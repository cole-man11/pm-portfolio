// Case study metadata
// Vite's BASE_URL already includes the trailing slash
const BASE_PATH = import.meta.env.BASE_URL || '/';

export const caseStudies = [
  {
    slug: "ai-powered-api-docs",
    title: "AI-Powered API Docs",
    hasProductionExperience: true,
    markdownFile: `${BASE_PATH}case-studies/ai-powered-api-docs.md`
  },
  {
    slug: "api-access-and-secure-consent-in-complex-environments",
    title: "API Access and Secure Consent in Complex Environments",
    hasProductionExperience: true,
    markdownFile: `${BASE_PATH}case-studies/api-access-and-secure-consent-in-complex-environments.md`
  }
];
