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
      description: "Running a restaurant leaves little time for marketing, but an empty dining room hurts your bottom line. We help you overcome common visibility challenges so you can focus on serving great food to a packed house.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low table reservations — Stop relying on foot traffic and start driving predictable bookings online.",
        "Poor local visibility — Ensure hungry customers in your neighborhood find you before they find competitors.",
        "Weak customer engagement — Turn silent followers into active fans who share your food with their friends.",
        "Inconsistent food content — Replace blurry phone photos with mouth-watering visuals that demand attention.",
        "Low repeat customers — Build loyalty programs and reminders that keep regulars coming back for more.",
        "Ineffective social advertising — Stop wasting budget on ads that don't bring actual diners through the door."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Restaurant Online",
      description: "We provide a comprehensive digital toolkit designed specifically for the hospitality industry. From mouth-watering visuals to targeted ads, you get everything needed to keep your tables full.",
      listHeadline: "Included Services",
      items: [
        "Social Media Management — We handle your posting schedule so you can focus on running your kitchen.",
        "Food Content Creation — Stunning photography and videos that make your menu look absolutely irresistible.",
        "Promotional Campaigns — Strategic offers and seasonal specials designed to drive immediate foot traffic.",
        "Facebook & Instagram Ads — Targeted advertising that reaches hungry diners in your exact neighborhood.",
        "Google Business Profile — Optimized local search presence so you always appear when people search for nearby food.",
        "Monthly Performance Reports — Clear, actionable data showing exactly how many reservations our marketing generated."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Restaurant Marketing Partner",
      description: "We understand that every restaurant has its own story, audience, and goals. That's why we create customized marketing strategies that reflect your brand and help you stand out in a competitive market.",
      listHeadline: "Why Businesses Choose Us",
      items: [
        "Restaurant Marketing Expertise — Partner with a team that understands the unique rhythms of the hospitality industry.",
        "Creative Food Content — Make your menu irresistible with high-quality photography, video, and design.",
        "Local Customer Growth — Focus on campaigns that bring diners from your neighborhood directly to your tables.",
        "Consistent Brand Presence — Keep your restaurant top of mind with regular, engaging posts that build loyalty.",
        "Performance Tracking — See exactly how your marketing spend translates into reservations and foot traffic.",
        "Dedicated Marketing Support — Get an account manager who acts as an extension of your own restaurant team."
      ]
    },
    process: {
      headline: "How We Help Restaurants Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your restaurant, audience, and local market."
        },
        {
          number: "02",
          title: "Plan",
          description: "Build a monthly restaurant marketing strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Design engaging food content and campaigns."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Publish content and run targeted promotions."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track results and optimize performance."
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
      description: "Patients today research providers online long before they book a consultation. We help you build a professional digital presence that establishes trust and consistently attracts new patients.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low patient enquiries — Drive more qualified leads by making it easy for patients to reach out directly.",
        "Weak online trust — Build credibility with professional content that highlights your medical expertise.",
        "Limited local visibility — Ensure your clinic ranks high when nearby patients search for healthcare services.",
        "Poor educational content — Share valuable health tips that position your team as industry thought leaders.",
        "Low appointment bookings — Convert passive online browsers into actual scheduled visits for your practice.",
        "Ineffective healthcare advertising — Run compliant, targeted ads that reach the right patients at the right time."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Practice Online",
      description: "We provide an end-to-end marketing solution built for modern medical practices. Our services ensure your clinic maintains a professional, compliant, and highly visible digital presence.",
      listHeadline: "Included Services",
      items: [
        "Healthcare Content Creation — Professionally designed graphics and videos that communicate your medical expertise.",
        "Educational Posts — Informative, accurate content that positions your doctors as trusted community leaders.",
        "Patient Awareness Campaigns — Targeted initiatives designed to highlight specific treatments and clinical services.",
        "Appointment Promotion — Strategic advertising funnels that seamlessly convert online scrollers into scheduled visits.",
        "Google Business Profile — Local SEO optimization ensuring patients find your clinic first during emergencies.",
        "Monthly Analytics — Comprehensive reporting on patient inquiries, ad performance, and overall digital growth."
      ]
    },
    whyUs: {
      headline: "Your Trusted Healthcare Marketing Partner",
      description: "Healthcare marketing requires accuracy, professionalism, and absolute trust. Our team creates content that reflects your expertise while helping you connect with your local community.",
      listHeadline: "Why Healthcare Providers Choose Us",
      items: [
        "Healthcare Marketing Specialists — Work with a team experienced in medical compliance, patient privacy, and care.",
        "Patient Trust & Credibility — Establish your practice as a leading, reliable voice in your medical field.",
        "Educational Content Strategy — Keep patients informed with accurate, highly valuable health and wellness tips.",
        "Local Practice Growth — Position your clinic as the premier choice for families in your immediate area.",
        "Transparent Reporting — Track every enquiry and appointment generated by your social media campaigns.",
        "Dedicated Account Manager — Enjoy direct communication with a strategist who understands your practice goals."
      ]
    },
    process: {
      headline: "How We Help Healthcare Businesses Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Learn about your practice and patient goals."
        },
        {
          number: "02",
          title: "Plan",
          description: "Develop a healthcare marketing strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Produce trusted educational content."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Reach more patients through social campaigns."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Monitor growth and improve results."
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
      description: "In a crowded market, great products aren't enough if nobody knows they exist. We help retail brands stand out online to drive more foot traffic and increase eCommerce sales.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low product visibility — Get your best inventory in front of targeted shoppers actively looking to buy.",
        "Weak brand awareness — Build a recognizable brand identity that stands out from endless online noise.",
        "Low online sales — Optimize your social channels to create frictionless paths straight to checkout.",
        "Poor customer engagement — Create interactive campaigns that turn casual browsers into loyal brand advocates.",
        "Seasonal sales challenges — Maximize your revenue during holidays and key shopping events with timely promotions.",
        "Ineffective promotions — Launch data-driven campaigns that actually convert instead of burning ad spend."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Retail Business Online",
      description: "Our retail marketing suite provides everything required to move inventory faster. We combine stunning product visuals with data-driven advertising to maximize your daily sales volume.",
      listHeadline: "Included Services",
      items: [
        "Product Content Creation — High-end visuals and engaging videos that make your inventory highly desirable.",
        "Promotional Campaigns — Urgency-driven marketing designed to clear stock and boost seasonal revenue.",
        "Social Media Management — Consistent, on-brand posting across all platforms to keep your audience engaged.",
        "Paid Advertising — Highly targeted ad campaigns optimized for immediate eCommerce and in-store conversions.",
        "Seasonal Campaigns — Strategic rollouts for major shopping events like Black Friday and the holidays.",
        "Monthly Reports — Transparent data tracking your return on ad spend and overall sales growth."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Retail Marketing Partner",
      description: "Every retail business has a unique story and customer base. We create customized marketing strategies that help your products get noticed and your brand stay top of mind.",
      listHeadline: "Why Retail Businesses Choose Us",
      items: [
        "Retail Growth Strategies — Implement proven marketing funnels designed specifically to move physical and digital inventory.",
        "Product-Focused Content — Showcase your merchandise through high-end visuals that drive immediate desire.",
        "Sales-Driven Campaigns — Run targeted advertising built from the ground up to maximize return on ad spend.",
        "Consistent Brand Identity — Ensure your aesthetic remains premium and cohesive across every social platform.",
        "Data-Driven Decisions — Use advanced analytics to identify which products and campaigns drive the most revenue.",
        "Dedicated Marketing Team — Access a full team of designers, copywriters, and ad specialists dedicated to your store."
      ]
    },
    process: {
      headline: "How We Help Retail Businesses Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your products and customers."
        },
        {
          number: "02",
          title: "Plan",
          description: "Build a retail-focused marketing plan."
        },
        {
          number: "03",
          title: "Create",
          description: "Produce high-converting product content."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Launch campaigns across social platforms."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Improve sales using performance insights."
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
      description: "Standing out to prospective students requires more than just a traditional brochure. We help educational institutions build engaging digital footprints that attract applicants and drive enrollments.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low student enrolments — Attract more qualified applicants by showcasing the true value of your programs.",
        "Poor course visibility — Highlight specific degrees and certifications to the exact demographic that needs them.",
        "Weak engagement — Foster a vibrant online community that gets students excited about your campus.",
        "Low enquiry rates — Simplify the discovery process so prospective students easily request more information.",
        "Inconsistent educational content — Deliver polished, inspiring stories that reflect your institution's academic excellence.",
        "Limited brand awareness — Expand your reach locally and internationally to become a top-choice school."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Institution Online",
      description: "We equip schools and universities with the digital tools needed to attract top-tier students. From campus tours to enrollment drives, we handle your entire social strategy.",
      listHeadline: "Included Services",
      items: [
        "Course Promotion — Targeted advertising designed to fill seats in specific academic programs and certifications.",
        "Student Success Content — Inspiring alumni stories and testimonials that prove the value of your education.",
        "Social Media Management — Daily engagement that keeps prospective students excited about your vibrant campus life.",
        "Lead Generation Campaigns — Strategic funnels that encourage students to download brochures or request information.",
        "Educational Branding — A cohesive, prestigious visual identity that reflects your institution's academic excellence.",
        "Monthly Analytics — Detailed tracking of inquiry forms, website visits, and overall enrollment marketing performance."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Education Marketing Partner",
      description: "Choosing a school or educational program is a major life decision built on reputation. We help institutions communicate their academic excellence and vibrant campus life to future students.",
      listHeadline: "Why Institutions Choose Us",
      items: [
        "Education Industry Experience — Benefit from strategies tailored to enrollment cycles, semesters, and admissions.",
        "Student Engagement Strategies — Foster an active, exciting digital community that prospective students want to join.",
        "Course Promotion Experts — Highlight specific degrees, programs, and certifications to the perfect demographic.",
        "Consistent Educational Branding — Maintain a prestigious, unified look across all your institutional social channels.",
        "Performance Analytics — Track your marketing success through measurable increases in inquiries and campus tours.",
        "Dedicated Success Manager — Collaborate with a strategist focused entirely on hitting your enrollment targets."
      ]
    },
    process: {
      headline: "How We Help Educational Brands Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your institution and student demographics."
        },
        {
          number: "02",
          title: "Plan",
          description: "Build an enrollment-driven marketing strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Produce inspiring campus and academic content."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Launch targeted student recruitment campaigns."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track enrollment metrics and optimize outreach."
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
      description: "Your expertise is your biggest asset, but growing a firm requires consistent lead generation. We help consultants, lawyers, and financial advisors build authority that naturally attracts high-value clients.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low lead generation — Implement targeted strategies that consistently bring qualified prospects to your inbox.",
        "Weak online authority — Establish your firm as the definitive expert in your specific professional niche.",
        "Poor client engagement — Keep your network active with insightful updates that prove your ongoing value.",
        "Limited local reach — Dominate your local market so you become the obvious choice for nearby clients.",
        "Inconsistent branding — Unify your digital presence so every touchpoint reflects your premium service.",
        "Low consultation requests — Turn your social media profiles into active funnels that book more discovery calls."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Firm Online",
      description: "We provide consultants, lawyers, and advisors with a sophisticated digital marketing framework. Our services focus on establishing unquestionable authority and generating high-value B2B leads.",
      listHeadline: "Included Services",
      items: [
        "LinkedIn Marketing — Professional network growth strategies designed to connect with high-net-worth clients.",
        "Authority Building — Thought leadership content that positions your firm as the leading voice in your niche.",
        "Lead Generation — Automated social advertising funnels that consistently book high-quality consultation calls.",
        "Content Strategy — Insightful articles and graphics that prove your ongoing value to existing clients.",
        "Personal Branding — Elevate the digital presence of your managing partners to build deeper client trust.",
        "Monthly Reporting — Clear metrics tracking exactly how your marketing translates into new retained clients."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Professional Services Marketing Partner",
      description: "For consultants, lawyers, and financial advisors, reputation is everything. We build sophisticated digital marketing strategies that establish your firm as an undeniable industry authority.",
      listHeadline: "Why Firms Choose Us",
      items: [
        "Authority Building — Position your partners and firm as the definitive experts in your specific service niche.",
        "Lead Generation Strategy — Implement automated social funnels that consistently deliver high-quality client prospects.",
        "Professional Brand Positioning — Maintain a polished, high-end digital presence that justifies premium retainer fees.",
        "Consistent Client Communication — Keep your network engaged with insightful updates that prove your ongoing value.",
        "Measurable Growth — See exactly how your social presence is impacting consultation requests and firm revenue.",
        "Dedicated Marketing Partner — Work alongside a responsive team that understands the nuances of B2B and professional services."
      ]
    },
    process: {
      headline: "How We Help Firms Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your firm and ideal client profile."
        },
        {
          number: "02",
          title: "Plan",
          description: "Develop a professional lead generation strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Design authoritative content for your niche."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Run targeted B2B networking campaigns."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track client inquiries and optimize performance."
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
      description: "Real estate is highly competitive, and buyers expect a premium online experience. We help agents and brokerages showcase properties effectively to generate more qualified leads and close more deals.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low property enquiries — Drive serious buyer interest with stunning property showcases and targeted reach.",
        "Poor listing visibility — Ensure your premium listings get in front of active buyers, not just casual scrollers.",
        "Weak local presence — Become the go-to real estate expert in your specific neighborhoods and communities.",
        "Low lead quality — Filter out unmotivated buyers by targeting high-intent demographics with precision.",
        "Limited buyer engagement — Keep potential clients engaged with market updates and valuable buying tips.",
        "Ineffective advertising — Maximize your ad spend with campaigns proven to generate actual property viewings."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Real Estate Business Online",
      description: "We equip real estate professionals with premium marketing assets that sell properties faster. From listing promotion to personal branding, we handle your entire digital pipeline.",
      listHeadline: "Included Services",
      items: [
        "Property Listing Promotion — Stunning digital campaigns that ensure your properties are seen by motivated buyers.",
        "Lead Generation — Targeted social advertising designed specifically to capture high-intent buyer and seller leads.",
        "Property Content Creation — High-end video tours and photography that make your listings truly stand out.",
        "Paid Advertising — Strategic budget management across Google and Facebook to maximize local property views.",
        "Local Market Campaigns — Hyper-targeted local outreach that establishes you as the neighborhood real estate expert.",
        "Monthly Performance Reports — Detailed analytics showing the exact ROI of your property marketing campaigns."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Real Estate Marketing Partner",
      description: "Real estate moves fast, and buyers expect a premium online experience. We help agents and brokerages elevate their listings, generate qualified leads, and close more deals.",
      listHeadline: "Why Agents Choose Us",
      items: [
        "Property Marketing Experts — Leverage strategies specifically designed to highlight luxury real estate and commercial spaces.",
        "Qualified Lead Generation — Stop chasing cold leads by targeting high-intent buyers looking for their next property.",
        "Local Market Visibility — Dominate your specific zip codes so you become the go-to agent for neighborhood listings.",
        "Premium Listing Promotion — Showcase your portfolio with high-end digital brochures, virtual tours, and stunning visuals.",
        "Performance Reporting — Track engagement and lead volume so you know exactly which listings are performing best.",
        "Dedicated Campaign Management — Let our experts handle the advertising while you focus entirely on closing deals."
      ]
    },
    process: {
      headline: "How We Help Real Estate Brands Grow",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your target market and property portfolio."
        },
        {
          number: "02",
          title: "Plan",
          description: "Create a localized real estate marketing strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Produce premium property showcase content."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Launch targeted listing promotions online."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track buyer leads and optimize ad spend."
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
      description: "Startups need to move fast and acquire users quickly before funding runs out. We help emerging tech companies build massive buzz, attract early adopters, and scale their growth rapidly.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low brand awareness — Break through the noise and get your innovative product noticed by the right audience.",
        "Limited market reach — Expand beyond your initial network to capture market share on a global scale.",
        "Slow user acquisition — Implement aggressive growth strategies that turn curiosity into active signups.",
        "Weak social presence — Build a modern, engaging brand that makes investors and users take you seriously.",
        "Low engagement — Foster a passionate community of early adopters who advocate for your product.",
        "Limited marketing resources — Maximize your impact with efficient campaigns that deliver high ROI on tight budgets."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Startup Online",
      description: "We provide an agile, scalable marketing engine designed for early-stage companies. Our services help you acquire users rapidly while keeping customer acquisition costs low.",
      listHeadline: "Included Services",
      items: [
        "Brand Awareness Campaigns — Aggressive digital strategies that introduce your innovative product to the masses.",
        "Startup Content Strategy — Engaging, disruptive content that clearly explains your unique value proposition.",
        "Growth Marketing — Data-driven social advertising focused purely on scaling your active user base rapidly.",
        "Product Launch Campaigns — High-impact promotional sprints designed to maximize buzz around new features.",
        "Social Media Management — Consistent community building that turns early adopters into passionate brand advocates.",
        "Analytics & Reporting — Deep insights into user acquisition costs, conversion rates, and overall marketing ROI."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Startup Marketing Partner",
      description: "Emerging companies need to build massive buzz and acquire users quickly before funding runs out. We act as your growth engine, delivering agile marketing that scales with your ambition.",
      listHeadline: "Why Startups Choose Us",
      items: [
        "Startup Growth Strategy — Deploy aggressive, innovative marketing tactics designed for rapid user acquisition.",
        "Brand Awareness Campaigns — Break through industry noise and ensure your target market knows your name.",
        "Scalable Marketing Solutions — Start lean and rapidly scale your advertising spend as your user base grows.",
        "Agile Content Creation — Move fast with a creative team that adapts quickly to your product updates and pivots.",
        "Data-Driven Growth — Optimize your marketing daily based on real-time performance metrics and user feedback.",
        "Long-Term Growth Partner — Scale your business alongside a dedicated team invested in your ultimate success."
      ]
    },
    process: {
      headline: "How We Help Startups Scale",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your product and growth objectives."
        },
        {
          number: "02",
          title: "Plan",
          description: "Develop an agile startup marketing strategy."
        },
        {
          number: "03",
          title: "Create",
          description: "Design disruptive content that captures attention."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Run aggressive user acquisition campaigns."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Monitor growth metrics and scale rapidly."
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
      description: "An empty venue is every event organizer's worst nightmare. We help you create undeniable hype, reach massive audiences, and drive urgent ticket sales for your next big experience.",
      listHeadline: "We Help You Solve:",
      items: [
        "Low ticket sales — Implement urgency-driven campaigns that convert interested audiences into paying attendees.",
        "Weak event awareness — Generate massive pre-event buzz so your target demographic knows exactly what's happening.",
        "Limited audience engagement — Keep excitement high with interactive teasers, artist announcements, and countdowns.",
        "Poor promotional reach — Expand your event's visibility far beyond your existing email list and followers.",
        "Low registrations — Simplify the sign-up process through targeted ads that remove friction for attendees.",
        "Ineffective event marketing — Stop wasting money on generic promotions and start driving measurable RSVP growth."
      ]
    },
    included: {
      headline: "Everything You Need to Grow Your Event Online",
      description: "We provide a comprehensive promotional toolkit designed to sell out your next event. We handle the digital hype so you can focus entirely on creating an incredible experience.",
      listHeadline: "Included Services",
      items: [
        "Event Promotion — Urgency-driven digital campaigns designed to maximize ticket sales before the big day.",
        "Ticket Sales Campaigns — Highly optimized social advertising funnels that convert interested browsers into attendees.",
        "Social Media Management — Continuous audience engagement with artist announcements, countdowns, and event teasers.",
        "Event Content Creation — High-energy graphics and video promos that capture the vibe of your upcoming event.",
        "Paid Advertising — Strategic ad placements across multiple platforms to reach entirely new demographics.",
        "Performance Reporting — Real-time tracking of ticket sales, ad spend, and overall campaign momentum."
      ]
    },
    whyUs: {
      headline: "Your Dedicated Event Marketing Partner",
      description: "An incredible event means nothing if the venue is empty. We generate undeniable hype, reach massive audiences, and drive urgent ticket sales for your next big experience.",
      listHeadline: "Why Event Organizers Choose Us",
      items: [
        "Event Promotion Specialists — Partner with a team that understands the timeline and urgency of event marketing.",
        "Ticket Sales Campaigns — Launch targeted, conversion-focused ads designed specifically to sell out your venue.",
        "Audience Engagement — Keep excitement high leading up to the event with interactive countdowns and artist teasers.",
        "Multi-Platform Promotion — Maximize your reach across Instagram, TikTok, and Facebook to capture every demographic.",
        "Real-Time Performance Tracking — Monitor your ticket sales and ad performance daily to ensure you hit capacity.",
        "Dedicated Event Marketing Team — Rely on our experts to manage the digital buzz so you can focus on event logistics."
      ]
    },
    process: {
      headline: "How We Help Events Succeed",
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understand your event and target audience."
        },
        {
          number: "02",
          title: "Plan",
          description: "Build a hype-driven promotional timeline."
        },
        {
          number: "03",
          title: "Create",
          description: "Produce exciting teaser and artist content."
        },
        {
          number: "04",
          title: "Publish & Promote",
          description: "Launch urgent ticket sales campaigns."
        },
        {
          number: "05",
          title: "Measure & Improve",
          description: "Track ticket conversions and maximize ROI."
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
