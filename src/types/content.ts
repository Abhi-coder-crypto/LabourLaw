export type WhyUsItem = { title: string; desc: string };
export type Testimonial = { text: string; author: string; role: string };
export type StatItem = { target: number; decimals: number; suffix: string; label: string };
export type OneStopCard = { title: string; desc: string };

export type HomeContent = {
  _id?: string;
  heroLine1: string;
  heroPhrases: string[];
  heroLine2: string;
  heroDescription: string;
  heroVideoUrl: string;
  heroImage1Url: string;
  heroImage2Url: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  oneStopLabel: string;
  oneStopTitle: string;
  oneStopCards: OneStopCard[];
  whyUsLogoUrl: string;
  whyUsHeading: string;
  whyUsBody: string;
  whyUsItems: WhyUsItem[];
  servicesPreviewLabel: string;
  servicesPreviewTitle: string;
  servicesPreviewDescription: string;
  testimonialsHeading: string;
  testimonials: Testimonial[];
  stats: StatItem[];
};

export type Deliverable = { title: string; desc: string };

export type ServiceContent = {
  _id: string;
  slug: string;
  title: string;
  img: string;
  desc: string;
  headline?: string;
  subhead?: string;
  intro?: string;
  body?: string;
  deliverables?: Deliverable[];
  order?: number;
};

export type JobContent = {
  _id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  category: 'internal' | 'client';
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  ctc: string;
  postedOn: string;
};
