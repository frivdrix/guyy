export interface CaseStudies {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  caseStudyTitle?: string;
  clientName?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  thumbnailImage?: string;
  projectUrl?: string;
  completionDate?: Date | string;
}

export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  question?: string;
  answer?: string;
  category?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface PartnerLogos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  partnerName?: string;
  logoImage?: string;
  websiteUrl?: string;
  description?: string;
  displayOrder?: number;
}

export interface PricingPlans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  planName?: string;
  price?: number;
  billingCycle?: string;
  shortDescription?: string;
  featuresSummary?: string;
  callToActionText?: string;
  callToActionUrl?: string;
  isRecommended?: boolean;
}

export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  serviceName?: string;
  shortDescription?: string;
  detailedDescription?: string;
  serviceImage?: string;
  benefits?: string;
  callToActionText?: string;
  callToActionUrl?: string;
}

export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  clientName?: string;
  clientTitleCompany?: string;
  testimonialText?: string;
  clientPhoto?: string;
  rating?: number;
  datePosted?: Date | string;
}
