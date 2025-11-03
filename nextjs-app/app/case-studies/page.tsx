'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { CaseStudies } from '@/types';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudies[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch('/api/casestudies');
        const data = await response.json();
        setCaseStudies(data.items);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };

    fetchCaseStudies();
  }, []);

  // Get unique industries
  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry).filter(Boolean)))] as string[];

  // Filter case studies by industry
  const filteredCaseStudies = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover how we've helped businesses achieve remarkable growth and transformation
          </p>

          {/* Industry Filter */}
          {industries.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Case Studies Grid */}
        {filteredCaseStudies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all group"
              >
                {caseStudy.thumbnailImage && (
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={caseStudy.thumbnailImage}
                      alt={caseStudy.caseStudyTitle || ''}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {caseStudy.industry && (
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {caseStudy.industry}
                    </div>
                  )}
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseStudy.caseStudyTitle}
                  </h2>
                  
                  {caseStudy.clientName && (
                    <p className="text-gray-600 font-medium mb-4">
                      Client: {caseStudy.clientName}
                    </p>
                  )}

                  {/* Challenge */}
                  {caseStudy.challenge && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {caseStudy.challenge}
                      </p>
                    </div>
                  )}

                  {/* Solution */}
                  {caseStudy.solution && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {caseStudy.solution}
                      </p>
                    </div>
                  )}

                  {/* Results */}
                  {caseStudy.results && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Results</h3>
                          <p className="text-sm text-gray-700 font-medium">
                            {caseStudy.results}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Completion Date */}
                  {caseStudy.completionDate && (
                    <p className="text-sm text-gray-500 mb-4">
                      Completed: {new Date(caseStudy.completionDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  )}

                  {caseStudy.projectUrl && (
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      View Full Case Study <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              {selectedIndustry === 'All' ? 'Loading case studies...' : `No case studies found for ${selectedIndustry}.`}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to achieve remarkable results for your business
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
