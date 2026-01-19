export interface FaqItem {
    question: string;
    answer: string | React.ReactNode;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface StepItem {
    title: string;
    description: string;
    image: string;
}

export interface TestimonialItem {
    content: string;
    author: string;
    role: string;
    image: string;
    rating: number;
}
