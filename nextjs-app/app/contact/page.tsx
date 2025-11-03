'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      console.log('Form submitted:', data);
      
      // In a real app, you would send this to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            We've received your message and will get back to you within 24 hours.
          </p>
          <Link href="/">
            <Button className="w-full">
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to grow your business? Let's start a conversation about your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you achieve your business goals. Reach out to us through any of these channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">letsgrowprowithus@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Name *
                    </label>
                    <Input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <Input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      placeholder="john@company.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <Input
                      {...register('company')}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone
                    </label>
                    <Input
                      {...register('phone')}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Service Interest *
                    </label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select a service...</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Brand Strategy">Brand Strategy</option>
                      <option value="Analytics & Insights">Analytics & Insights</option>
                      <option value="Growth Consulting">Growth Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Budget Range *
                    </label>
                    <select
                      {...register('budget', { required: 'Please select a budget range' })}
                      className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.budget ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select budget range...</option>
                      <option value="<$5k">Less than $5,000</option>
                      <option value="$5k-$10k">$5,000 - $10,000</option>
                      <option value="$10k-$25k">$10,000 - $25,000</option>
                      <option value="$25k-$50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
