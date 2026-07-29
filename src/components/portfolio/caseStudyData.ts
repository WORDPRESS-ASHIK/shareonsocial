export type CaseStudyContent = {
  challenge: {
    background: string;
    challenges: string;
    painPoints: string;
    competition: string;
    opportunities: string;
    image: string;
  };
  strategy: {
    implementation: string;
    execution: string;
    improvements: string;
    image: string;
  };
};

export const CASE_STUDY_DATA: Record<string, CaseStudyContent> = {
  "Restaurants & Hospitality": {
    challenge: {
      background: "The restaurant industry is highly saturated, making it difficult for established venues to maintain consistent foot traffic while expanding their demographic reach.",
      challenges: "They struggled to convert digital engagement into actual reservations. Their existing online presence lacked a cohesive strategy, relying on sporadic posts rather than a data-driven approach.",
      painPoints: "High customer acquisition costs, unpredictable weekend volumes, and low visibility during off-peak hours.",
      competition: "Local competitors were heavily leveraging influencer marketing and hyper-targeted local ads, capturing the key demographic.",
      opportunities: "A strong, untapped potential in private event bookings and a loyal but under-engaged local customer base.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We deployed a comprehensive localized SEO strategy combined with high-impact visual social media campaigns to reposition the brand.",
      execution: "Our team overhauled their local search presence, optimized their Google Business Profile, and launched targeted Meta ads focusing on high-intent dining queries.",
      improvements: "We implemented an automated CRM to nurture repeat customers and streamlined their digital reservation system to reduce booking friction.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
    }
  },
  "Healthcare & Wellness": {
    challenge: {
      background: "Modern healthcare requires a delicate balance of establishing deep trust while ensuring high visibility in a crowded digital marketplace.",
      challenges: "The practice was facing a plateau in new patient acquisitions and suffering from a fragmented digital reputation that didn't reflect their clinical excellence.",
      painPoints: "Difficulty in standing out in local searches for specialized treatments and low conversion rates from their legacy website.",
      competition: "Rival clinics were aggressively outbidding them on paid search for high-value procedures.",
      opportunities: "Leveraging patient testimonials and educational content to establish unmatched local authority.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We built a trust-first digital ecosystem, focusing heavily on patient education, compliance-friendly AEO, and targeted search campaigns.",
      execution: "By restructuring their content architecture, we captured high-intent semantic searches. We also launched a localized paid search campaign targeting specific treatments.",
      improvements: "A complete website redesign improved mobile conversions, while our automated review generation strategy significantly boosted their local SEO presence.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2940&auto=format&fit=crop",
    }
  },
  "Retail & E-commerce": {
    challenge: {
      background: "The shift towards omni-channel commerce has forced traditional retail brands to rapidly evolve their digital infrastructure and acquisition strategies.",
      challenges: "The brand struggled with high cart abandonment rates and a disjointed user experience that failed to translate their in-store aesthetic to their digital storefront.",
      painPoints: "Low return on ad spend (ROAS), poor mobile conversion rates, and ineffective inventory syncing.",
      competition: "DTC (Direct-to-Consumer) competitors were capturing market share with hyper-personalized shopping experiences.",
      opportunities: "A rich product catalog and a strong existing offline brand reputation ready to be digitized.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We engineered a complete digital transformation focusing on frictionless commerce and high-conversion paid media.",
      execution: "Our team optimized the entire path-to-purchase, implemented dynamic retargeting, and deployed shopping campaigns across Google and social channels.",
      improvements: "We introduced AI-driven product recommendations and streamlined the checkout process, dramatically improving average order value (AOV) and lifetime value (LTV).",
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=2940&auto=format&fit=crop",
    }
  },
  "Real Estate & Property": {
    challenge: {
      background: "In the highly competitive property market, digital first impressions are often the only deciding factor for prospective buyers and tenants.",
      challenges: "The agency relied too heavily on traditional aggregators and lacked a proprietary pipeline for generating high-quality exclusive leads.",
      painPoints: "High cost per lead, low-quality generic inquiries, and an outdated digital showcase that failed to highlight premium properties.",
      competition: "Boutique agencies were dominating local SEO and leveraging high-end video tours to attract premium clients.",
      opportunities: "Capitalizing on high-net-worth local demographics through targeted luxury property showcases.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We built a localized omnipresence strategy, capturing both high-intent search traffic and passive luxury buyers through visual social channels.",
      execution: "We deployed targeted Meta ad campaigns featuring immersive property visuals and optimized their platform for high-value localized real estate queries.",
      improvements: "A bespoke CRM integration ensured leads were instantly routed to the right agents, while automated follow-up sequences increased viewing appointments.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop",
    }
  },
  "Education & Training": {
    challenge: {
      background: "The education sector requires a delicate approach to marketing, focusing on long-term value, credibility, and outcomes rather than immediate transactions.",
      challenges: "They faced declining enrollment numbers and struggled to communicate their unique educational value proposition to a digitally native demographic.",
      painPoints: "High drop-off rates during the lengthy application process and inefficient lead nurturing.",
      competition: "Other institutions were aggressively capturing the market using highly targeted digital open days and sophisticated content marketing.",
      opportunities: "Showcasing student success stories and leveraging alumni networks to build organic institutional authority.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We pivoted their acquisition model to a content-first strategy, positioning them as thought leaders while streamlining the enrollment funnel.",
      execution: "We executed multi-channel enrollment campaigns targeting prospective students and decision-makers, utilizing targeted search and dynamic social retargeting.",
      improvements: "We digitized the entire application journey, removing friction points, and implemented automated lead-nurturing workflows to keep prospects engaged.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
    }
  },
  "Construction & Trades": {
    challenge: {
      background: "The construction and commercial trades sector is shifting rapidly, with commercial clients and general contractors increasingly relying on digital vetting.",
      challenges: "The company was entirely dependent on word-of-mouth and lacked a digital footprint capable of attracting high-margin commercial contracts.",
      painPoints: "Unpredictable project pipelines, invisibility in local commercial searches, and an inability to showcase their scale of work.",
      competition: "Modernized competitors were winning bids by presenting a highly polished, professional online portfolio.",
      opportunities: "A massive portfolio of successful past projects that had never been documented or utilized for marketing.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We transformed their digital presence from a digital business card into a robust commercial lead generation engine.",
      execution: "We developed a high-performance portfolio website, optimized for local B2B search, and launched targeted LinkedIn and Google Ads campaigns.",
      improvements: "By integrating a robust local SEO framework and project-showcase architecture, we dramatically increased inbound commercial inquiries.",
      image: "https://images.unsplash.com/photo-1541888086903-efdc749f53df?q=80&w=2874&auto=format&fit=crop",
    }
  },
  "Home Services": {
    challenge: {
      background: "In the residential service industry, speed, proximity, and trust are the three pillars of customer acquisition.",
      challenges: "They were losing highly lucrative emergency and routine maintenance jobs to local competitors who simply appeared higher on Google.",
      painPoints: "Extremely high cost-per-click on traditional ads, poor local map pack rankings, and low customer lifetime value.",
      competition: "Large regional aggregators were outspending them, making traditional paid search highly inefficient.",
      opportunities: "A strong database of past customers that were never remarketed to for seasonal maintenance.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We executed a hyper-local dominance strategy, prioritizing Google Local Services and aggressive local SEO optimization.",
      execution: "Our team overhauled their local citations, optimized their Google Business Profile, and implemented a review-generation system to build trust.",
      improvements: "We deployed a dispatch-integrated CRM that automatically followed up with past clients for seasonal tune-ups, massively increasing repeat business.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop",
    }
  },
  "Beauty & Personal Care": {
    challenge: {
      background: "The beauty sector thrives on visual aesthetics and social proof, requiring a seamless bridge between digital inspiration and in-person bookings.",
      challenges: "The brand struggled to convert their massive social media following into actual paying clients in the chair.",
      painPoints: "A cumbersome booking process, low visibility for high-margin specialized services, and inconsistent branding across platforms.",
      competition: "Local salons were aggressively utilizing TikTok and Instagram Reels to capture the younger demographic.",
      opportunities: "An incredibly talented team whose work was visually stunning but poorly distributed online.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2874&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We built a visually immersive, conversion-optimized digital presence designed to turn scrollers into booked appointments.",
      execution: "We launched highly targeted visual campaigns on Meta, partnered with a localized SEO strategy to dominate \"near me\" searches for premium services.",
      improvements: "We integrated a frictionless digital booking system directly into their social profiles and website, drastically reducing appointment drop-offs.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2938&auto=format&fit=crop",
    }
  },
  "Professional Services": {
    challenge: {
      background: "For B2B and professional services, authority and trust are the primary drivers of client acquisition and long-term retention.",
      challenges: "The firm's digital presence was sterile and failed to articulate their unique expertise, leading to long, inefficient sales cycles.",
      painPoints: "A reliance on expensive networking, low inbound lead volume, and an inability to rank for high-value commercial keywords.",
      competition: "Modernized boutique firms were out-positioning them as industry thought-leaders through aggressive content marketing.",
      opportunities: "Decades of internal expertise and proprietary methodologies that were not being utilized for market positioning.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We positioned the firm as the undisputed regional authority by building a thought-leadership engine and a high-conversion B2B pipeline.",
      execution: "We executed a comprehensive AEO/SEO strategy targeting niche commercial queries and launched highly targeted LinkedIn account-based marketing (ABM) campaigns.",
      improvements: "We overhauled their website to focus on case studies and partner outcomes, while implementing an automated lead-scoring CRM system.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2832&auto=format&fit=crop",
    }
  },
  "Technology & Startups": {
    challenge: {
      background: "In the fast-paced tech sector, generating immediate product-market fit validation while simultaneously scaling user acquisition is critical.",
      challenges: "The startup was struggling with high customer acquisition costs (CAC) and needed to rapidly scale their user base before their next funding round.",
      painPoints: "Low conversion rates on their landing pages, poor organic visibility, and an inefficient paid media strategy.",
      competition: "Well-funded incumbents were dominating the search space and aggressively outbidding them on core industry keywords.",
      opportunities: "A highly innovative product that retained users exceptionally well once they experienced the core value proposition.",
      image: "https://images.unsplash.com/photo-1553025820-c47d758c26c6?q=80&w=2938&auto=format&fit=crop",
    },
    strategy: {
      implementation: "We engineered a rapid-scale growth framework, focusing entirely on lowering CAC through conversion rate optimization (CRO) and viral loops.",
      execution: "We deployed rapid multivariate testing across all landing pages and launched aggressive, highly segmented performance marketing campaigns.",
      improvements: "By completely restructuring their onboarding flow and utilizing dynamic lifecycle emails, we significantly increased their trial-to-paid conversion rate.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    }
  }
};
