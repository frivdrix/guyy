import { PartnerLogos, Services, CaseStudies, Testimonials, FrequentlyAskedQuestions } from '@/types';

export const partnerLogosData: PartnerLogos[] = [
  {
    _id: '1',
    partnerName: 'Tech Corp',
    logoImage: 'https://via.placeholder.com/150x80?text=Tech+Corp',
    websiteUrl: 'https://example.com',
    description: 'Leading technology partner',
    displayOrder: 1
  },
  {
    _id: '2',
    partnerName: 'Innovation Labs',
    logoImage: 'https://via.placeholder.com/150x80?text=Innovation+Labs',
    websiteUrl: 'https://example.com',
    description: 'Innovation and research partner',
    displayOrder: 2
  }
];

export const servicesData: Services[] = [
  {
    _id: '1',
    serviceName: 'Digital Marketing',
    shortDescription: 'Grow your brand with data-driven marketing strategies',
    detailedDescription: 'Our comprehensive digital marketing services help you reach your target audience effectively through SEO, social media, and content marketing.',
    serviceImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    benefits: 'Increased visibility, Higher conversion rates, Better ROI',
    callToActionText: 'Learn More',
    callToActionUrl: '/contact'
  },
  {
    _id: '2',
    serviceName: 'Brand Strategy',
    shortDescription: 'Build a powerful brand identity that resonates',
    detailedDescription: 'We help you create a compelling brand strategy that differentiates you from competitors and connects with your audience.',
    serviceImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    benefits: 'Strong brand identity, Market differentiation, Customer loyalty',
    callToActionText: 'Get Started',
    callToActionUrl: '/contact'
  },
  {
    _id: '3',
    serviceName: 'Analytics & Insights',
    shortDescription: 'Make data-driven decisions for growth',
    detailedDescription: 'Transform raw data into actionable insights with our advanced analytics solutions.',
    serviceImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    benefits: 'Better decision making, Performance tracking, Growth optimization',
    callToActionText: 'Discover More',
    callToActionUrl: '/contact'
  }
];

export const caseStudiesData: CaseStudies[] = [
  {
    _id: '1',
    caseStudyTitle: 'E-commerce Growth Strategy',
    clientName: 'RetailCo',
    industry: 'E-commerce',
    challenge: 'Low conversion rates and high cart abandonment',
    solution: 'Implemented comprehensive UX improvements and personalized marketing campaigns',
    results: '150% increase in conversion rate, 40% reduction in cart abandonment',
    thumbnailImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    projectUrl: '/case-studies',
    completionDate: '2024-01-15'
  },
  {
    _id: '2',
    caseStudyTitle: 'Brand Transformation',
    clientName: 'TechStart Inc',
    industry: 'Technology',
    challenge: 'Outdated brand image not resonating with modern audience',
    solution: 'Complete brand overhaul including new visual identity and messaging',
    results: '200% increase in brand awareness, 85% positive sentiment',
    thumbnailImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
    projectUrl: '/case-studies',
    completionDate: '2024-02-20'
  }
];

export const testimonialsData: Testimonials[] = [
  {
    _id: '1',
    clientName: 'Sarah Johnson',
    clientTitleCompany: 'CEO, TechVision',
    testimonialText: 'LetsGrowPro transformed our digital presence completely. Their strategic approach and attention to detail resulted in a 300% increase in qualified leads.',
    clientPhoto: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    datePosted: '2024-01-10'
  },
  {
    _id: '2',
    clientName: 'Michael Chen',
    clientTitleCompany: 'Marketing Director, GrowthCo',
    testimonialText: 'The team at LetsGrowPro exceeded our expectations. Their data-driven approach helped us achieve ROI we never thought possible.',
    clientPhoto: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    datePosted: '2024-02-15'
  },
  {
    _id: '3',
    clientName: 'Emily Rodriguez',
    clientTitleCompany: 'Founder, StartupHub',
    testimonialText: 'Working with LetsGrowPro was a game-changer for our startup. They helped us establish a strong brand identity and go-to-market strategy.',
    clientPhoto: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    datePosted: '2024-03-01'
  }
];

export const faqsData: FrequentlyAskedQuestions[] = [
  {
    _id: '1',
    question: 'What services do you offer?',
    answer: 'We offer comprehensive digital marketing, brand strategy, analytics, and growth consulting services tailored to your business needs.',
    category: 'Services',
    isFeatured: true,
    displayOrder: 1
  },
  {
    _id: '2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks, but we can accommodate urgent requests.',
    category: 'Process',
    isFeatured: true,
    displayOrder: 2
  },
  {
    _id: '3',
    question: 'What industries do you work with?',
    answer: 'We work with businesses across various industries including technology, e-commerce, healthcare, finance, and professional services.',
    category: 'General',
    isFeatured: true,
    displayOrder: 3
  },
  {
    _id: '4',
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We offer flexible retainer packages for ongoing support, optimization, and consulting services.',
    category: 'Services',
    isFeatured: false,
    displayOrder: 4
  },
  {
    _id: '5',
    question: 'How do you measure success?',
    answer: 'We establish clear KPIs at the start of each project and provide regular reports on performance metrics including ROI, conversion rates, and engagement.',
    category: 'Process',
    isFeatured: false,
    displayOrder: 5
  }
];
