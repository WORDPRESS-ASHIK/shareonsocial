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
      description: "We help restaurants build a strong online presence. Our team creates engaging content and targeted ads that turn local scrollers into loyal, paying customers.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Restaurant Marketing Challenges",
      description: "We help restaurants overcome online visibility challenges to attract local diners and fill every table.",
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
      headline: "Complete Restaurant Marketing Toolkit",
      description: "Get everything you need to showcase your food, attract diners, and keep tables full.",
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
      headline: "Your Restaurant Marketing Partner",
      description: "We create customized marketing strategies that reflect your brand and help you stand out.",
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
      headline: "Let's keep your tables full.",
      description: "Whether you're opening a new restaurant or growing an established business, we're here to help you reach more local customers, increase engagement, and drive measurable growth.",
      closingText: "Ready to grow your restaurant? Let's create a strategy that delivers real results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  healthcare: {
    slug: 'healthcare',
    hero: {
      headline: "Social Media Marketing for Healthcare Providers That Builds Trust and Brings More Patients",
      subheadline: "Build trust and attract patients.",
      description: "We help clinics and medical practices establish a credible digital presence. Our strategic campaigns educate your community and consistently drive new appointment bookings.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Healthcare Marketing Challenges",
      description: "We build digital trust to help your medical practice consistently attract and book new patients.",
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
      headline: "Complete Healthcare Marketing Toolkit",
      description: "Get an end-to-end marketing solution that builds trust and drives consistent patient appointments.",
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
      headline: "Your Healthcare Marketing Partner",
      description: "We create accurate, professional content that builds trust and connects you with your local community.",
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
      headline: "How We Help Medical Practices Grow",
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
      headline: "Let's attract more patients.",
      description: "Whether you're launching a new clinic or growing an established healthcare practice, we'll help you build credibility, increase visibility, and attract more patients online.",
      closingText: "Ready to grow your practice? Let's build a strategy that delivers measurable results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  retail: {
    slug: 'retail',
    hero: {
      headline: "Social Media Marketing for Retail Businesses That Drives More Sales",
      subheadline: "Turn more browsers into buyers.",
      description: "We help retail stores and eCommerce brands stand out. Our engaging product content and targeted campaigns drive traffic, increase sales, and build customer loyalty.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Retail Marketing Challenges",
      description: "We help your retail business stand out online, driving foot traffic and increasing eCommerce sales.",
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
      headline: "Complete Retail Marketing Toolkit",
      description: "Combine stunning product visuals with data-driven advertising to move inventory and maximize daily sales.",
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
      headline: "Your Retail Marketing Partner",
      description: "We create customized marketing strategies that help your products get noticed and drive immediate sales.",
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
      headline: "How We Help Retail Brands Grow",
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
      headline: "Let's turn browsers into buyers.",
      description: "Whether you run a local boutique or a growing online store, we'll help you build a stronger brand, reach more customers, and increase sales through strategic social media marketing.",
      closingText: "Ready to grow your retail business? Let's create a strategy that delivers real results.",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  education: {
    slug: 'education',
    hero: {
      headline: "Social Media Marketing for Education That Inspires and Enrolls",
      subheadline: "Attract students and drive enrollments.",
      description: "We help schools and universities build vibrant online communities. Our targeted campaigns showcase your academic excellence and turn prospective applicants into enrolled students.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Education Marketing Challenges",
      description: "We build engaging digital footprints to help schools attract qualified applicants and drive campus enrollments.",
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
      headline: "Complete Education Marketing Toolkit",
      description: "Get the digital tools you need to attract top-tier students and drive consistent enrollments.",
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
      headline: "Your Education Marketing Partner",
      description: "We help institutions communicate their academic excellence and vibrant campus life to attract future students.",
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
      headline: "Let's drive more enrollment.",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  "professional-services": {
    slug: 'professional-services',
    hero: {
      headline: "Social Media Marketing for Professional Services That Builds Authority",
      subheadline: "Establish authority and generate leads.",
      description: "We help consultants, lawyers, and advisors build industry authority. Our professional digital strategies naturally attract high-value clients and consistently book more consultation calls.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Firm's Marketing Challenges",
      description: "We help you build online authority to attract high-value clients and generate consistent consultation requests.",
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
      headline: "Complete Professional Marketing Toolkit",
      description: "Leverage a sophisticated digital framework to establish authority and generate high-value client leads.",
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
      headline: "Your Professional Services Marketing Partner",
      description: "We build sophisticated digital marketing strategies that establish your firm as an undeniable industry authority.",
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
      headline: "How We Help Professional Firms Grow",
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
      headline: "Let's generate more leads.",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  "real-estate": {
    slug: 'real-estate',
    hero: {
      headline: "Social Media Marketing for Real Estate That Sells",
      subheadline: "Showcase properties and close deals.",
      description: "We help agents and brokerages elevate their premium listings online. Our targeted marketing strategies generate highly qualified buyer leads and accelerate your property sales.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Real Estate Marketing Challenges",
      description: "We elevate your online presence to generate highly qualified buyer leads and close deals faster.",
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
      headline: "Complete Real Estate Marketing Toolkit",
      description: "Access premium marketing assets designed to generate qualified buyer leads and sell properties faster.",
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
      headline: "Your Real Estate Marketing Partner",
      description: "We help you elevate your listings to generate highly qualified leads and close more deals.",
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
      headline: "Let's close more deals.",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  startups: {
    slug: 'startups',
    hero: {
      headline: "Social Media Marketing for Startups That Drives Hyper-Growth",
      subheadline: "Build buzz and acquire users.",
      description: "We help early-stage companies disrupt the market. Our agile marketing strategies scale your brand awareness, attract early adopters, and drive rapid user acquisition.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Startup Marketing Challenges",
      description: "We help tech startups build massive buzz, attract early adopters, and rapidly scale user growth.",
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
      headline: "Complete Startup Marketing Toolkit",
      description: "Deploy an agile marketing engine to acquire users rapidly while keeping acquisition costs low.",
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
      headline: "Your Startup Marketing Partner",
      description: "We act as your growth engine, delivering agile marketing strategies that scale with your ambition.",
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
      headline: "How We Help Tech Startups Scale",
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
      headline: "Let's accelerate your growth.",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  },
  events: {
    slug: 'events',
    hero: {
      headline: "Social Media Marketing for Events That Drives Attendance",
      subheadline: "Create hype and sell out.",
      description: "We help organizers generate undeniable excitement for upcoming experiences. Our targeted digital campaigns reach massive audiences and drive urgent ticket sales for your event.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Free Consultation"
    },
    challenges: {
      headline: "Solve Your Event Marketing Challenges",
      description: "We create undeniable digital hype to help your event reach massive audiences and sell out.",
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
      headline: "Complete Event Marketing Toolkit",
      description: "Use our comprehensive promotional toolkit to generate digital hype and sell out your event.",
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
      headline: "Your Event Marketing Partner",
      description: "We generate undeniable digital hype to reach massive audiences and drive urgent ticket sales.",
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
      headline: "How We Help Live Events Succeed",
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
      headline: "Make your event unforgettable.",
      description: "[CONTENT NEEDED: Please provide the exact text for this CTA description.]",
      closingText: "[CONTENT NEEDED: Closing text]",
      ctaButton: "Get Started Today • Book a Free Consultation"
    }
  }
};
