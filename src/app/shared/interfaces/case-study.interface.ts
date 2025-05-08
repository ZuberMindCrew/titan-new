export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  heroImage: string;
  metrics: {
    primary: {
      value: string;
      label: string;
    };
    secondary: {
      value: string;
      label: string;
    };
  };
  clientOverview: string[];
  challenges: string[];
  actions: string[];
  results: Array<{
    percentage: string;
    description: string;
  }>;
} 