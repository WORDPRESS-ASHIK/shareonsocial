export type SolutionData = {
  slug: string;
  title: string;
  shortDescription: string;
  featuredImage: string;
  category: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    valueProp: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    stats: { label: string; value: string; }[];
  };
  whoFor: {
    heading: string;
    introduction: string;
    cards: { icon: string; title: string; description: string; }[];
  };
  problem: {
    heading: string;
    description: string;
    painPoints: { title: string; description: string; }[];
  };
  ourSolution: {
    heading: string;
    cards: { number: string; icon: string; title: string; description: string; }[];
  };
  included: {
    heading: string;
    features: { icon: string; title: string; description: string; }[];
  };
  process: {
    heading: string;
    steps: { title: string; description: string; }[];
  };
  outcomes: {
    heading: string;
    metrics: { value: string; label: string; }[];
  };
  faq: {
    heading: string;
    questions: { question: string; answer: string; }[];
  };
  cta: {
    heading: string;
    description: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
};

export const solutionsData: Record<string, SolutionData> = {

  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Build a consistent social presence with strategic content, community management, and campaigns that increase engagement and drive business growth.",
    featuredImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    category: "Social • ShareOnSocial",
    tags: ["Strategy","Content","Scheduling"],
    seo: {
      title: "Social Media Management Services | Share On Social",
      description: "Build a loyal following, increase brand awareness, and drive engagement with expert social media management."
    },
    hero: {
      headline: "Social Media Management",
      valueProp: "Build a consistent social presence with strategic content, community management, and campaigns that increase engagement and drive business growth.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Share2", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "Users", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "MessageCircle", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "BarChart2", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Image", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Smartphone", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "TrendingUp", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Zap", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with Social Media Management?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "branding-media-management": {
    slug: "branding-media-management",
    title: "Branding & Media Management",
    shortDescription: "Create a memorable brand identity with strategic positioning, visual design, and media assets that build trust and recognition.",
    featuredImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    category: "Branding • ShareOnSocial",
    tags: ["Branding","Identity","Media"],
    seo: {
      title: "Branding & Media Management | Share On Social",
      description: "Define your identity, build trust, and maintain a premium brand presence across all media channels."
    },
    hero: {
      headline: "Branding & Media Management",
      valueProp: "Create a memorable brand identity with strategic positioning, visual design, and media assets that build trust and recognition.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Feather", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "PenTool", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "Camera", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "Layout", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Monitor", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Star", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Target", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Award", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with Branding & Media Management?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Design and develop high-performance websites that are fast, user-friendly, mobile responsive, and built to convert visitors into customers.",
    featuredImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
    category: "Technology • ShareOnSocial",
    tags: ["UI/UX","WordPress","SEO"],
    seo: {
      title: "Website Development | Share On Social",
      description: "Design and develop high-performance websites built to convert visitors into customers."
    },
    hero: {
      headline: "Website Development",
      valueProp: "Design and develop high-performance websites that are fast, user-friendly, mobile responsive, and built to convert visitors into customers.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Code", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "Smartphone", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "Gauge", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "Lock", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Globe", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Search", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Database", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Server", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with Website Development?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "seo-aeo": {
    slug: "seo-aeo",
    title: "SEO & AEO",
    shortDescription: "Increase your visibility on Google and AI search platforms with technical SEO, Answer Engine Optimization, and long-term organic growth.",
    featuredImage: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop",
    category: "Digital • ShareOnSocial",
    tags: ["Technical SEO","Local SEO","AEO"],
    seo: {
      title: "SEO & AEO Services | Share On Social",
      description: "Increase your visibility on Google and AI search platforms with technical SEO and Answer Engine Optimization."
    },
    hero: {
      headline: "SEO & AEO",
      valueProp: "Increase your visibility on Google and AI search platforms with technical SEO, Answer Engine Optimization, and long-term organic growth.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Search", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "BarChart", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "MapPin", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "FileText", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Link", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Cpu", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "TrendingUp", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Eye", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with SEO & AEO?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "paid-advertising": {
    slug: "paid-advertising",
    title: "Paid Advertising",
    shortDescription: "Generate qualified leads and maximize ROI with high-converting campaigns across Google, Meta, LinkedIn, and other paid channels.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "Marketing • ShareOnSocial",
    tags: ["Google Ads","Meta Ads","ROAS"],
    seo: {
      title: "Paid Advertising Management | Share On Social",
      description: "Generate qualified leads and maximize ROI with high-converting campaigns across paid channels."
    },
    hero: {
      headline: "Paid Advertising",
      valueProp: "Generate qualified leads and maximize ROI with high-converting campaigns across Google, Meta, LinkedIn, and other paid channels.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "MousePointer", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "DollarSign", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "Target", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "PieChart", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "TrendingUp", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Filter", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Activity", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Award", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with Paid Advertising?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "content-creation": {
    slug: "content-creation",
    title: "Content Creation",
    shortDescription: "Produce premium photo, video, and social content that captures attention, strengthens your brand, and drives engagement.",
    featuredImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    category: "Content • ShareOnSocial",
    tags: ["Reels","Photography","Editing"],
    seo: {
      title: "Content Creation Services | Share On Social",
      description: "Produce premium photo, video, and social content that captures attention and drives engagement."
    },
    hero: {
      headline: "Content Creation",
      valueProp: "Produce premium photo, video, and social content that captures attention, strengthens your brand, and drives engagement.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Camera", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "Video", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "Edit3", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "Image", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Film", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Monitor", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Mic", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "PlayCircle", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with Content Creation?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "crm-automation": {
    slug: "crm-automation",
    title: "CRM & Automation",
    shortDescription: "Automate customer communication, lead nurturing, and business workflows to save time and improve conversion rates.",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    category: "Technology • ShareOnSocial",
    tags: ["CRM","Automation","WhatsApp"],
    seo: {
      title: "CRM & Automation | Share On Social",
      description: "Automate customer communication and business workflows to save time and improve conversion rates."
    },
    hero: {
      headline: "CRM & Automation",
      valueProp: "Automate customer communication, lead nurturing, and business workflows to save time and improve conversion rates.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Database", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "Settings", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "Mail", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "MessageSquare", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Phone", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Users", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Zap", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Activity", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with CRM & Automation?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  },
  "ai-business-solutions": {
    slug: "ai-business-solutions",
    title: "AI Business Solutions",
    shortDescription: "Integrate AI-powered tools and intelligent automation to streamline operations, improve customer experience, and scale efficiently.",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    category: "Technology • ShareOnSocial",
    tags: ["AI Agents","Chatbots","Automation"],
    seo: {
      title: "AI Business Solutions | Share On Social",
      description: "Integrate AI-powered tools and intelligent automation to streamline operations and scale efficiently."
    },
    hero: {
      headline: "AI Business Solutions",
      valueProp: "Integrate AI-powered tools and intelligent automation to streamline operations, improve customer experience, and scale efficiently.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Portfolio",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      stats: [
        { label: "Leads", value: "+320%" },
        { label: "Client Rating", value: "4.8★" },
        { label: "Projects", value: "120+" }
      ]
    },
    whoFor: {
      heading: "Who This Is For",
      introduction: "We partner with ambitious brands across industries who want to scale their digital presence and drive measurable ROI.",
      cards: [
        { icon: "Utensils", title: "Restaurants", description: "Drive foot traffic and reservations through visually stunning local campaigns." },
        { icon: "Stethoscope", title: "Healthcare", description: "Build patient trust and community authority with compliant, educational content." },
        { icon: "Briefcase", title: "Professional Services", description: "Establish thought leadership and generate high-value B2B leads." },
        { icon: "ShoppingBag", title: "Retail", description: "Increase online sales and brand loyalty through strategic social commerce." }
      ]
    },
    problem: {
      heading: "The Business Problem",
      description: "In today's digital landscape, a fragmented strategy leads to wasted budget and lost opportunities.",
      painPoints: [
        { title: "Inconsistent Brand Voice", description: "Your messaging changes across platforms, confusing potential customers and diluting brand equity." },
        { title: "Low Conversion Rates", description: "You're getting traffic, but it's not translating into qualified leads or paying customers." },
        { title: "Wasted Ad Spend", description: "Running campaigns without a data-driven strategy resulting in high CPA and low ROAS." },
        { title: "Lack of Resources", description: "Your internal team is stretched thin trying to manage everything without specialized expertise." }
      ]
    },
    ourSolution: {
      heading: "Our Solution",
      cards: [
        { number: "01", icon: "Search", title: "Discovery", description: "Deep dive into your business goals, target audience, and current digital footprint." },
        { number: "02", icon: "Target", title: "Strategy", description: "Develop a comprehensive, multi-channel approach tailored to your specific objectives." },
        { number: "03", icon: "PenTool", title: "Design", description: "Create stunning visual assets and compelling copy that captures your brand essence." },
        { number: "04", icon: "Settings", title: "Implementation", description: "Execute the strategy across chosen platforms with precise timing and targeting." },
        { number: "05", icon: "Activity", title: "Optimization", description: "Continuously monitor performance and refine tactics based on real-time data." },
        { number: "06", icon: "TrendingUp", title: "Growth", description: "Scale successful campaigns and expand into new channels for sustained success." }
      ]
    },
    included: {
      heading: "What's Included",
      features: [
        { icon: "Cpu", title: "Strategic Planning", description: "Comprehensive roadmap aligned with your business KPIs and revenue goals." },
        { icon: "Bot", title: "Audience Targeting", description: "Advanced demographic and psychographic targeting to reach your ideal customers." },
        { icon: "MessageCircle", title: "Asset Creation", description: "Premium quality creatives optimized for each specific digital platform." },
        { icon: "Zap", title: "Performance Tracking", description: "Real-time dashboards and detailed reporting on all core metrics." },
        { icon: "Settings", title: "A/B Testing", description: "Continuous testing of creative, copy, and targeting to maximize results." },
        { icon: "Code", title: "Platform Management", description: "End-to-end management of all relevant digital channels and tools." },
        { icon: "Brain", title: "Conversion Optimization", description: "Strategic tweaks to your funnels to improve overall conversion rates." },
        { icon: "Workflow", title: "Dedicated Support", description: "Direct access to our team of specialists for strategic guidance and updates." }
      ]
    },
    process: {
      heading: "Our Process",
      steps: [
        { title: "Discovery", description: "Understanding your brand" },
        { title: "Research", description: "Analyzing the market" },
        { title: "Planning", description: "Developing the strategy" },
        { title: "Execution", description: "Launching the campaign" },
        { title: "Optimization", description: "Refining for performance" },
        { title: "Growth", description: "Scaling the results" }
      ]
    },
    outcomes: {
      heading: "Expected Outcomes",
      metrics: [
        { value: "+300%", label: "Organic Traffic" },
        { value: "+220%", label: "Qualified Leads" },
        { value: "+45%", label: "Conversion Rate" },
        { value: "4x", label: "ROI" }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "How long does it take to see results?", answer: "While some initial improvements can be seen within the first 30 days, we typically recommend a 3 to 6-month engagement to see significant, sustainable ROI." },
        { question: "Do you work with businesses in my industry?", answer: "Yes, we have extensive experience across multiple verticals including healthcare, real estate, e-commerce, and professional services. Our strategies are adaptable." },
        { question: "How do you measure success?", answer: "We track core business metrics like Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Volume, and overall Revenue Growth, providing detailed monthly reports." },
        { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will be assigned a dedicated strategist who will be your main point of contact and coordinate our internal specialists." },
        { question: "Can we adjust the strategy as we go?", answer: "Yes. Our agile approach means we continuously optimize and pivot based on real-time performance data to ensure the best possible results." },
        { question: "What do you need from us to get started?", answer: "We require access to your current platforms, existing brand guidelines, and a comprehensive onboarding call to fully understand your business objectives." }
      ]
    },
    cta: {
      heading: "Ready to grow with AI Business Solutions?",
      description: "Partner with ShareOnSocial to elevate your digital presence and drive meaningful business results.",
      primaryBtnText: "Book a Consultation",
      secondaryBtnText: "Contact Us"
    }
  }
};
