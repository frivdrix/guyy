#!/usr/bin/env python3
"""
Backend API Testing Script for LetsGrowPro Application
Tests all backend API endpoints to verify functionality and response structure.
"""

import requests
import json
import sys
from typing import Dict, Any

# Backend URL from frontend environment
BACKEND_URL = "https://problem-solver-121.preview.emergentagent.com"

def test_endpoint(method: str, endpoint: str, expected_status: int = 200, data: Dict[Any, Any] = None) -> Dict[str, Any]:
    """
    Test a single API endpoint and return results.
    
    Args:
        method: HTTP method (GET, POST, etc.)
        endpoint: API endpoint path
        expected_status: Expected HTTP status code
        data: Request data for POST requests
    
    Returns:
        Dictionary with test results
    """
    url = f"{BACKEND_URL}{endpoint}"
    
    try:
        print(f"\n🔍 Testing {method} {endpoint}")
        print(f"   URL: {url}")
        
        if method == "GET":
            response = requests.get(url, timeout=10)
        elif method == "POST":
            response = requests.post(url, json=data, timeout=10)
        else:
            return {
                "success": False,
                "error": f"Unsupported HTTP method: {method}",
                "status_code": None,
                "response": None
            }
        
        print(f"   Status Code: {response.status_code}")
        
        # Try to parse JSON response
        try:
            response_json = response.json()
            print(f"   Response: {json.dumps(response_json, indent=2)}")
        except json.JSONDecodeError:
            response_json = {"raw_response": response.text}
            print(f"   Raw Response: {response.text}")
        
        # Check if status code matches expected
        status_ok = response.status_code == expected_status
        
        return {
            "success": status_ok,
            "status_code": response.status_code,
            "response": response_json,
            "error": None if status_ok else f"Expected status {expected_status}, got {response.status_code}"
        }
        
    except requests.exceptions.ConnectionError as e:
        error_msg = f"Connection error: {str(e)}"
        print(f"   ❌ {error_msg}")
        return {
            "success": False,
            "error": error_msg,
            "status_code": None,
            "response": None
        }
    except requests.exceptions.Timeout as e:
        error_msg = f"Request timeout: {str(e)}"
        print(f"   ❌ {error_msg}")
        return {
            "success": False,
            "error": error_msg,
            "status_code": None,
            "response": None
        }
    except Exception as e:
        error_msg = f"Unexpected error: {str(e)}"
        print(f"   ❌ {error_msg}")
        return {
            "success": False,
            "error": error_msg,
            "status_code": None,
            "response": None
        }

def validate_collection_response(response: Dict[str, Any], collection_name: str) -> Dict[str, Any]:
    """
    Validate that a collection endpoint response has the correct structure.
    
    Args:
        response: API response dictionary
        collection_name: Name of the collection being tested
    
    Returns:
        Validation result dictionary
    """
    if not isinstance(response, dict):
        return {
            "valid": False,
            "error": f"Response is not a dictionary: {type(response)}"
        }
    
    # Check for required fields
    if "items" not in response:
        return {
            "valid": False,
            "error": "Missing 'items' field in response"
        }
    
    if "totalCount" not in response:
        return {
            "valid": False,
            "error": "Missing 'totalCount' field in response"
        }
    
    # Check field types
    if not isinstance(response["items"], list):
        return {
            "valid": False,
            "error": f"'items' field should be a list, got {type(response['items'])}"
        }
    
    if not isinstance(response["totalCount"], int):
        return {
            "valid": False,
            "error": f"'totalCount' field should be an integer, got {type(response['totalCount'])}"
        }
    
    # For empty database, expect empty array and count of 0
    expected_count = len(response["items"])
    if response["totalCount"] != expected_count:
        return {
            "valid": False,
            "error": f"totalCount ({response['totalCount']}) doesn't match items length ({expected_count})"
        }
    
    return {
        "valid": True,
        "error": None,
        "items_count": len(response["items"]),
        "total_count": response["totalCount"]
    }

def run_all_tests():
    """Run all backend API tests and report results."""
    
    print("=" * 80)
    print("🚀 LetsGrowPro Backend API Testing")
    print("=" * 80)
    print(f"Backend URL: {BACKEND_URL}")
    
    # Test cases
    test_cases = [
        {
            "name": "Root Endpoint",
            "method": "GET",
            "endpoint": "/api/",
            "validate_collection": False
        },
        {
            "name": "Partner Logos",
            "method": "GET", 
            "endpoint": "/api/partnerlogos",
            "validate_collection": True
        },
        {
            "name": "Services",
            "method": "GET",
            "endpoint": "/api/services", 
            "validate_collection": True
        },
        {
            "name": "Case Studies",
            "method": "GET",
            "endpoint": "/api/casestudies",
            "validate_collection": True
        },
        {
            "name": "Testimonials", 
            "method": "GET",
            "endpoint": "/api/testimonials",
            "validate_collection": True
        },
        {
            "name": "FAQs",
            "method": "GET",
            "endpoint": "/api/frequentlyaskedquestions",
            "validate_collection": True
        }
    ]
    
    results = []
    
    for test_case in test_cases:
        print(f"\n{'='*60}")
        print(f"Testing: {test_case['name']}")
        print(f"{'='*60}")
        
        # Run the API test
        result = test_endpoint(
            method=test_case["method"],
            endpoint=test_case["endpoint"]
        )
        
        test_result = {
            "name": test_case["name"],
            "endpoint": test_case["endpoint"],
            "success": result["success"],
            "status_code": result["status_code"],
            "error": result["error"]
        }
        
        if result["success"]:
            print(f"   ✅ API call successful")
            
            # Validate response structure for collection endpoints
            if test_case["validate_collection"]:
                validation = validate_collection_response(result["response"], test_case["name"])
                test_result["validation"] = validation
                
                if validation["valid"]:
                    print(f"   ✅ Response structure valid")
                    print(f"   📊 Items: {validation['items_count']}, Total Count: {validation['total_count']}")
                else:
                    print(f"   ❌ Response structure invalid: {validation['error']}")
                    test_result["success"] = False
                    test_result["error"] = validation["error"]
            else:
                # For root endpoint, just check if we got a message
                if isinstance(result["response"], dict) and "message" in result["response"]:
                    print(f"   ✅ Root endpoint returned welcome message")
                    test_result["validation"] = {"valid": True}
                else:
                    print(f"   ❌ Root endpoint should return a message")
                    test_result["success"] = False
                    test_result["error"] = "Root endpoint should return a message field"
        else:
            print(f"   ❌ API call failed: {result['error']}")
        
        results.append(test_result)
    
    # Summary
    print(f"\n{'='*80}")
    print("📋 TEST SUMMARY")
    print(f"{'='*80}")
    
    passed = sum(1 for r in results if r["success"])
    total = len(results)
    
    print(f"Total Tests: {total}")
    print(f"Passed: {passed}")
    print(f"Failed: {total - passed}")
    
    if passed == total:
        print("\n🎉 ALL TESTS PASSED!")
    else:
        print(f"\n⚠️  {total - passed} TESTS FAILED")
        print("\nFailed Tests:")
        for result in results:
            if not result["success"]:
                print(f"  ❌ {result['name']}: {result['error']}")
    
    print(f"\n{'='*80}")
    
    return results

if __name__ == "__main__":
    try:
        results = run_all_tests()
        
        # Exit with error code if any tests failed
        failed_count = sum(1 for r in results if not r["success"])
        sys.exit(failed_count)
        
    except KeyboardInterrupt:
        print("\n\n⚠️  Testing interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Testing script error: {str(e)}")
        sys.exit(1)