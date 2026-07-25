export type IndustryData = {
  slug: string;
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  challenges: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  included: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  whyUs: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  process: {
    headline: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  cta: {
    headline: string;
    description: string;
    closingText: string;
    ctaButton: string;
  };
};

export const industriesData: Record<string, IndustryData> = {
  restaurants: {
    slug: 'restaurants',
    hero: {
      headline: "Social Media Marketing for Restaurants That Brings More Customers Through Your Doors",
      subheadline: "Great food deserves great marketing.",
      description: "At Share On Social, we help restaurants build a stronger online presence with professionally managed social media, creative content, and targeted advertising that attracts new customers and keeps regulars coming back. Whether you own a café, fast-food outlet, fine dining restaurant, cloud kitchen, or local eatery, our team creates content that showcases your brand and turns scrolling into bookings, orders, and loyal customers.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Restaurants Face Every Day",
      description: "Running a restaurant means focusing on food quality and customer service, leaving little time for consistent marketing. Without an active social media presence, it's easy to lose potential customers to competitors.",
      listHeadline: "We Help You Solve:",
      items: [
        "Inconsistent posting across social platforms",
        "Low customer engagement",
        "Poor-quality food content",
        "Limited local brand awareness",
        "Low reservation and takeaway inquiries",
        "Facebook and Instagram ads that don't perform"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Restaurant Online",
      description: "Our restaurant marketing service is designed to help you attract attention, build trust, and increase customer visits through consistent, high-quality content.",
      listHeadline: "Included Services",
      items: [
        "Social Media Management",
        "Custom Food Graphics & Creative Design",
        "Professional Caption Writing",
        "Monthly Content Calendar",
        "Facebook & Instagram Advertising",
        "Promotional Campaign Creation",
        "Google Business Profile Management",
        "Monthly Analytics & Performance Reports"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Restaurant Marketing Partner",
      description: "We understand that every restaurant has its own story, audience, and goals. That's why we create customized marketing strategies that reflect your brand and help you stand out in a competitive market.",
      listHeadline: "Why Businesses Choose Us",
      items: [
        "Industry-focused marketing strategies",
        "Creative content that captures attention",
        "Consistent branding across every platform",
        "Transparent monthly reporting",
        "Dedicated account management",
        "A team focused on growing your business—not just your followers"
      ]
    },
    process: {
      headline: "How We Help Restaurants Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "We learn about your restaurant, target audience, and business goals."
        },
        {
          number: "02",
          title: "Plan",
          description: "Our team creates a content strategy and monthly posting calendar tailored to your brand."
        },
        {
          number: "03",
          title: "Create",
          description: "We design engaging graphics, write compelling captions, and prepare campaigns that showcase your food and business."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "We schedule your content, manage your social media platforms, and optimize advertising campaigns for better reach."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Every month, we analyze performance, share detailed reports, and refine our strategy to deliver even better results."
        }
      ]
    },
    cta: {
      headline: "Let's Build a Social Media Presence That Keeps Your Tables Full",
      description: "Whether you're opening a new restaurant or growing an established business, we're here to help you reach more local customers, increase engagement, and drive measurable growth.",
      closingText: "Ready to grow your restaurant? Let's create a strategy that delivers real results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  healthcare: {
    slug: 'healthcare',
    hero: {
      headline: "Social Media Marketing for Healthcare Providers That Builds Trust and Brings More Patients",
      subheadline: "Healthcare is built on trust—and your online presence should reflect that.",
      description: "At Share On Social, we help clinics, dental practices, medical centers, wellness providers, and healthcare professionals create a credible digital presence that educates, engages, and converts. From patient education to appointment-driven campaigns, we create strategic social media content that strengthens your reputation and helps more people discover your services.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Healthcare Providers Face Every Day",
      description: "Patients often research online before booking an appointment. Without consistent communication and professional branding, it's easy to lose potential patients to competitors with a stronger digital presence.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low patient engagement on social media",
        "Inconsistent healthcare content",
        "Poor online credibility",
        "Limited local visibility",
        "Low appointment inquiries",
        "Advertising campaigns with poor performance"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Healthcare Practice Online",
      description: "Our healthcare marketing solutions are designed to build trust while helping you reach more patients through strategic content and advertising.",
      listHeadline: "Included Services",
      items: [
        "Social Media Management",
        "Healthcare Content Creation",
        "Educational Graphics & Posts",
        "Professional Caption Writing",
        "Facebook & Instagram Advertising",
        "Google Business Profile Management",
        "Monthly Content Calendar",
        "Analytics & Performance Reports"
      ]
    },
    whyUs: {
      headline: "Your Trusted Healthcare Marketing Partner",
      description: "Healthcare marketing requires accuracy, professionalism, and trust. Our team creates content that reflects your expertise while helping you connect with your local community.",
      listHeadline: "Why Healthcare Providers Choose Us",
      items: [
        "Industry-specific marketing strategies",
        "Professional and compliant content",
        "Consistent branding across every platform",
        "Transparent reporting and communication",
        "Dedicated account management",
        "Strategies focused on long-term patient growth"
      ]
    },
    process: {
      headline: "How We Help Healthcare Businesses Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "We learn about your practice, services, audience, and business goals."
        },
        {
          number: "02",
          title: "Plan",
          description: "We create a customized social media strategy and monthly content calendar."
        },
        {
          number: "03",
          title: "Create",
          description: "Our creative team develops educational content, graphics, and campaigns that build trust."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "We manage your social media channels and optimize paid advertising to reach the right audience."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Every month, we review performance and continuously improve your marketing strategy."
        }
      ]
    },
    cta: {
      headline: "Let's Help More Patients Discover Your Services",
      description: "Whether you're launching a new clinic or growing an established healthcare practice, we'll help you build credibility, increase visibility, and attract more patients online.",
      closingText: "Ready to grow your practice? Let's build a strategy that delivers measurable results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  retail: {
    slug: 'retail',
    hero: {
      headline: "Social Media Marketing for Retail Businesses That Drives More Sales",
      subheadline: "In today's competitive market, customers discover products online before making a purchase.",
      description: "At Share On Social, we help retail stores, boutiques, and eCommerce brands stand out with engaging content, strategic campaigns, and performance-driven advertising. From product launches to seasonal promotions, we create social media strategies that increase visibility, drive traffic, and turn followers into loyal customers.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Retail Businesses Face Every Day",
      description: "With countless brands competing for attention, maintaining a strong online presence can be challenging. Without consistent marketing, even great products can go unnoticed.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low product visibility",
        "Inconsistent social media activity",
        "Poor customer engagement",
        "Weak brand recognition",
        "Slow online sales",
        "Ineffective advertising campaigns"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Retail Business Online",
      description: "Our retail marketing solutions help you showcase products, promote offers, and connect with customers through creative content and targeted campaigns.",
      listHeadline: "Included Services",
      items: [
        "Social Media Management",
        "Product Content Creation",
        "Promotional Graphic Design",
        "Professional Caption Writing",
        "Facebook & Instagram Advertising",
        "Seasonal Campaign Management",
        "Monthly Content Calendar",
        "Analytics & Performance Reports"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Retail Marketing Partner",
      description: "Every retail business has a unique story and customer base. We create customized marketing strategies that help your products get noticed and your brand stay top of mind.",
      listHeadline: "Why Retail Businesses Choose Us",
      items: [
        "Industry-focused marketing strategies",
        "Eye-catching product content",
        "Consistent branding across platforms",
        "Transparent monthly reporting",
        "Dedicated account management",
        "Data-driven campaigns that support sales growth"
      ]
    },
    process: {
      headline: "How We Help Retail Businesses Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "We understand your products, customers, and business objectives."
        },
        {
          number: "02",
          title: "Plan",
          description: "We develop a tailored content strategy designed to support your sales goals."
        },
        {
          number: "03",
          title: "Create",
          description: "Our creative team produces engaging visuals, compelling captions, and promotional campaigns."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "We manage your social media presence and optimize advertising campaigns to increase reach and conversions."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "We monitor performance, share monthly reports, and continuously refine your strategy for better results."
        }
      ]
    },
    cta: {
      headline: "Let's Turn More Browsers Into Buyers",
      description: "Whether you run a local boutique or a growing online store, we'll help you build a stronger brand, reach more customers, and increase sales through strategic social media marketing.",
      closingText: "Ready to grow your retail business? Let's create a strategy that delivers real results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  education: {
    slug: 'education',
    hero: {
      headline: "Social Media Marketing for Education That Inspires and Enrolls",
      subheadline: "[CONTENT NEEDED: Subheadline]",
      description: "[CONTENT NEEDED: Please provide the exact text for the Education Hero description. Using this placeholder to ensure the page renders properly while maintaining your strict copy requirements.]",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Education Institutions Face Every Day",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "We Help You Solve:",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Educational Brand Online",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Included Services",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]",
        "[CONTENT NEEDED: Bullet 7]",
        "[CONTENT NEEDED: Bullet 8]"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Education Marketing Partner",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Why Institutions Choose Us",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    process: {
      headline: "How We Help Educational Brands Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "02",
          title: "Plan",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "03",
          title: "Create",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "[CONTENT NEEDED]"
        }
      ]
    },
    cta: {
      headline: "Let's Build a Digital Presence That Drives Enrollment",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  "professional-services": {
    slug: 'professional-services',
    hero: {
      headline: "Social Media Marketing for Professional Services That Builds Authority",
      subheadline: "[CONTENT NEEDED: Subheadline]",
      description: "[CONTENT NEEDED: Please provide the exact text for the Professional Services Hero description.]",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Professionals Face Every Day",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "We Help You Solve:",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Firm Online",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Included Services",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]",
        "[CONTENT NEEDED: Bullet 7]",
        "[CONTENT NEEDED: Bullet 8]"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Professional Services Marketing Partner",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Why Firms Choose Us",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    process: {
      headline: "How We Help Firms Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "02",
          title: "Plan",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "03",
          title: "Create",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "[CONTENT NEEDED]"
        }
      ]
    },
    cta: {
      headline: "Let's Build Authority That Generates Leads",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  "real-estate": {
    slug: 'real-estate',
    hero: {
      headline: "Social Media Marketing for Real Estate That Sells",
      subheadline: "[CONTENT NEEDED: Subheadline]",
      description: "[CONTENT NEEDED: Please provide the exact text for the Real Estate Hero description.]",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Real Estate Agents Face Every Day",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "We Help You Solve:",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Real Estate Brand Online",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Included Services",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]",
        "[CONTENT NEEDED: Bullet 7]",
        "[CONTENT NEEDED: Bullet 8]"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Real Estate Marketing Partner",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Why Agents Choose Us",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    process: {
      headline: "How We Help Real Estate Brands Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "02",
          title: "Plan",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "03",
          title: "Create",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "[CONTENT NEEDED]"
        }
      ]
    },
    cta: {
      headline: "Let's Close More Deals Through Social Media",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  startups: {
    slug: 'startups',
    hero: {
      headline: "Social Media Marketing for Startups That Drives Hyper-Growth",
      subheadline: "[CONTENT NEEDED: Subheadline]",
      description: "[CONTENT NEEDED: Please provide the exact text for the Startups Hero description.]",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Startups Face Every Day",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "We Help You Solve:",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    included: {
      headline: "Everything You Need to Scale Your Startup Online",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Included Services",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]",
        "[CONTENT NEEDED: Bullet 7]",
        "[CONTENT NEEDED: Bullet 8]"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Startup Marketing Partner",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Why Startups Choose Us",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    process: {
      headline: "How We Help Startups Scale",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "02",
          title: "Plan",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "03",
          title: "Create",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "[CONTENT NEEDED]"
        }
      ]
    },
    cta: {
      headline: "Let's Accelerate Your Growth",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  events: {
    slug: 'events',
    hero: {
      headline: "Social Media Marketing for Events That Drives Attendance",
      subheadline: "[CONTENT NEEDED: Subheadline]",
      description: "[CONTENT NEEDED: Please provide the exact text for the Events Hero description.]",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Marketing Challenges Event Organizers Face Every Day",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "We Help You Solve:",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    included: {
      headline: "Everything You Need to Promote Your Event Online",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Included Services",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]",
        "[CONTENT NEEDED: Bullet 7]",
        "[CONTENT NEEDED: Bullet 8]"
      ]
    },
    whyUs: {
      headline: "Your Dedicated Event Marketing Partner",
      description: "[CONTENT NEEDED: Please provide the exact text for this section's description.]",
      listHeadline: "Why Event Organizers Choose Us",
      items: [
        "[CONTENT NEEDED: Bullet 1]",
        "[CONTENT NEEDED: Bullet 2]",
        "[CONTENT NEEDED: Bullet 3]",
        "[CONTENT NEEDED: Bullet 4]",
        "[CONTENT NEEDED: Bullet 5]",
        "[CONTENT NEEDED: Bullet 6]"
      ]
    },
    process: {
      headline: "How We Help Events Succeed",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "02",
          title: "Plan",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "03",
          title: "Create",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "[CONTENT NEEDED]"
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "[CONTENT NEEDED]"
        }
      ]
    },
    cta: {
      headline: "Let's Make Your Next Event Unforgettable",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  }
};
