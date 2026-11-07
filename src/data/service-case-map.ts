/**
 * Maps each service page to the 2–3 case studies that best fit its category,
 * and each case study back to the service page it proves.
 * Slugs come from src/data/services.ts and src/data/work.ts.
 */
export const serviceCaseMap: Record<string, string[]> = {
  'mobile-app-development': ['healthcare-telehealth', 'ecommerce-platform', 'fintech-trading-platform'],
  'web-development': ['ecommerce-platform', 'logistics-platform', 'real-estate-portal'],
  'ai-ml': ['fintech-trading-platform', 'real-estate-portal', 'healthcare-telehealth'],
  'product-design': ['ecommerce-platform', 'fintech-trading-platform', 'real-estate-portal'],
  'blockchain-web3': ['fintech-trading-platform', 'payments-api-platform'],
  'cloud-devops': ['fintech-trading-platform', 'logistics-platform', 'payments-api-platform'],
  'ar-vr': ['ecommerce-platform', 'real-estate-portal'],
  'digital-marketing': ['ecommerce-platform', 'real-estate-portal'],
  'wordpress-cms': ['real-estate-portal', 'ecommerce-platform'],
  'game-development': ['fintech-trading-platform', 'logistics-platform'],
  'branding': ['ecommerce-platform', 'real-estate-portal'],
  'saas-development': ['logistics-platform', 'fintech-trading-platform', 'payments-api-platform'],
};

/** The service page each case study links back to. */
export const caseStudyServiceMap: Record<string, string> = {
  'fintech-trading-platform': 'ai-ml',
  'healthcare-telehealth': 'mobile-app-development',
  'ecommerce-platform': 'web-development',
  'logistics-platform': 'saas-development',
  'payments-api-platform': 'saas-development',
  'real-estate-portal': 'web-development',
};
