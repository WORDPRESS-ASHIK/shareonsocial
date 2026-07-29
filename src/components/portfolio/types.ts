export type Project = {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  summary: string;
  services: string[];
  outcomes: { label: string; value: string }[];
  image: string;
  color: string;
  featured?: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    "id": "1",
    "title": "Restaurants Growth Strategy",
    "client": "Nova Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "Paid Ads",
      "Lead Gen",
      "SEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "2",
    "title": "Restaurants Growth Strategy",
    "client": "Global Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "Website",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "3",
    "title": "Restaurants Market Expansion",
    "client": "Aura Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "SEO",
      "AEO",
      "Website"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "4",
    "title": "Restaurants Acquisition Campaign",
    "client": "Prime Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "Content",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1466978913421-bac2e10c05c8?q=80&w=2942&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "5",
    "title": "Restaurants Digital Transformation",
    "client": "Next Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "Paid Ads",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "6",
    "title": "Restaurants Growth Strategy",
    "client": "Aura Restaurants",
    "industry": "Restaurants & Hospitality",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "Lead Gen",
      "Analytics",
      "Website",
      "Content"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "7",
    "title": "Healthcare Acquisition Campaign",
    "client": "Core Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "AEO",
      "Paid Ads",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2960&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "8",
    "title": "Healthcare Acquisition Campaign",
    "client": "Aura Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "CRM",
      "Website"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "9",
    "title": "Healthcare Acquisition Campaign",
    "client": "Aura Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Website",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2800&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "10",
    "title": "Healthcare Brand Refresh",
    "client": "Global Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Email",
      "CRM",
      "AEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2847&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "11",
    "title": "Healthcare Growth Strategy",
    "client": "Nova Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "CRM",
      "Email",
      "Lead Gen",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "12",
    "title": "Healthcare Acquisition Campaign",
    "client": "Apex Healthcare",
    "industry": "Healthcare & Wellness",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "Branding",
      "Social Media",
      "Website"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "13",
    "title": "Retail Brand Refresh",
    "client": "Next Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "Automation",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "14",
    "title": "Retail Growth Strategy",
    "client": "Global Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "Lead Gen",
      "Analytics",
      "Paid Ads"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "15",
    "title": "Retail Omnichannel Launch",
    "client": "Prime Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "Content",
      "SEO",
      "Automation",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "16",
    "title": "Retail Growth Strategy",
    "client": "Elite Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "Email",
      "Automation",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2872&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "17",
    "title": "Retail Growth Strategy",
    "client": "Zenith Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "Email",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "18",
    "title": "Retail Digital Transformation",
    "client": "Apex Retail",
    "industry": "Retail & E-commerce",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Website",
      "SEO",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "19",
    "title": "Real Brand Refresh",
    "client": "Aura Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "AEO",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "20",
    "title": "Real Acquisition Campaign",
    "client": "Core Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Content",
      "AEO",
      "Analytics",
      "SEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "21",
    "title": "Real Brand Refresh",
    "client": "Core Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "AEO",
      "Analytics",
      "SEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "22",
    "title": "Real Digital Transformation",
    "client": "Apex Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Content",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2946&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "23",
    "title": "Real Digital Transformation",
    "client": "Next Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Lead Gen",
      "Website",
      "SEO",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "24",
    "title": "Real Acquisition Campaign",
    "client": "Nova Real",
    "industry": "Real Estate & Property",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "CRM",
      "Social Media",
      "Lead Gen",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "25",
    "title": "Education Omnichannel Launch",
    "client": "Zenith Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "AEO",
      "Automation",
      "Analytics",
      "Lead Gen"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "26",
    "title": "Education Acquisition Campaign",
    "client": "Apex Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "Branding",
      "AEO",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2932&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "27",
    "title": "Education Market Expansion",
    "client": "Apex Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "SEO",
      "AEO",
      "Paid Ads",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "28",
    "title": "Education Growth Strategy",
    "client": "Next Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Lead Gen",
      "Branding",
      "Paid Ads"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "29",
    "title": "Education Market Expansion",
    "client": "Next Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "SEO",
      "Email"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "30",
    "title": "Education Acquisition Campaign",
    "client": "Zenith Education",
    "industry": "Education & Training",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Content",
      "Lead Gen",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "31",
    "title": "Construction Brand Refresh",
    "client": "Elite Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Social Media",
      "Website",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "32",
    "title": "Construction Growth Strategy",
    "client": "Nova Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Paid Ads",
      "Email",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "33",
    "title": "Construction Digital Transformation",
    "client": "Urban Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "Automation",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "34",
    "title": "Construction Growth Strategy",
    "client": "Prime Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Analytics",
      "Website",
      "SEO",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "35",
    "title": "Construction Growth Strategy",
    "client": "Urban Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Social Media",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34d?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "36",
    "title": "Construction Omnichannel Launch",
    "client": "Apex Construction",
    "industry": "Construction & Trades",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "Email",
      "Branding",
      "Content",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2944&auto=format&fit=crop",
    "color": "var(--brand-orange)"
  },
  {
    "id": "37",
    "title": "Home Omnichannel Launch",
    "client": "Core Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Email",
      "Social Media",
      "Content"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "38",
    "title": "Home Acquisition Campaign",
    "client": "Next Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "CRM",
      "AEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "39",
    "title": "Home Growth Strategy",
    "client": "Urban Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "AEO",
      "Content",
      "Analytics",
      "CRM",
      "Lead Gen"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "40",
    "title": "Home Growth Strategy",
    "client": "Nova Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Email",
      "Website",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2942&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "41",
    "title": "Home Omnichannel Launch",
    "client": "Prime Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "Content",
      "SEO",
      "AEO",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "42",
    "title": "Home Digital Transformation",
    "client": "Global Home",
    "industry": "Home Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "SEO",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "43",
    "title": "Beauty Growth Strategy",
    "client": "Aura Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "Website",
      "SEO",
      "Content",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "44",
    "title": "Beauty Market Expansion",
    "client": "Global Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "CRM",
      "Paid Ads",
      "SEO",
      "Lead Gen"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2938&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "45",
    "title": "Beauty Growth Strategy",
    "client": "Aura Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Lead Gen",
      "Paid Ads",
      "Website",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "46",
    "title": "Beauty Brand Refresh",
    "client": "Elite Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "Website",
      "Lead Gen",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "47",
    "title": "Beauty Brand Refresh",
    "client": "Elite Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "Automation",
      "Analytics"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1512496015851-a1cbfb9fb95f?q=80&w=2942&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "48",
    "title": "Beauty Acquisition Campaign",
    "client": "Prime Beauty",
    "industry": "Beauty & Personal Care",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "AEO",
      "Automation",
      "Branding",
      "Paid Ads"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1521590832168-b3a4e5c7809c?q=80&w=2938&auto=format&fit=crop",
    "color": "var(--brand-pink)"
  },
  {
    "id": "49",
    "title": "Professional Brand Refresh",
    "client": "Next Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Website",
      "SEO",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "50",
    "title": "Professional Omnichannel Launch",
    "client": "Aura Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "CRM",
      "Social Media",
      "Content"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2874&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "51",
    "title": "Professional Acquisition Campaign",
    "client": "Apex Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "AEO",
      "CRM",
      "Website",
      "SEO",
      "Automation"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "52",
    "title": "Professional Acquisition Campaign",
    "client": "Elite Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "AEO",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "53",
    "title": "Professional Omnichannel Launch",
    "client": "Urban Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "Website",
      "Email",
      "Paid Ads",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "54",
    "title": "Professional Brand Refresh",
    "client": "Elite Professional",
    "industry": "Professional Services",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Lead Gen",
      "Automation",
      "SEO",
      "Email",
      "AEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-blue)"
  },
  {
    "id": "55",
    "title": "Technology Market Expansion",
    "client": "Apex Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Automation",
      "SEO",
      "Website",
      "CRM",
      "Branding"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "56",
    "title": "Technology Digital Transformation",
    "client": "Nova Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Branding",
      "CRM",
      "Automation",
      "Paid Ads",
      "Lead Gen"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "57",
    "title": "Technology Brand Refresh",
    "client": "Global Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "CRM",
      "SEO",
      "Branding",
      "Content"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "58",
    "title": "Technology Growth Strategy",
    "client": "Elite Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Content",
      "Paid Ads",
      "Email",
      "Lead Gen",
      "CRM"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "59",
    "title": "Technology Digital Transformation",
    "client": "Next Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "Content",
      "Social Media"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2938&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  },
  {
    "id": "60",
    "title": "Technology Growth Strategy",
    "client": "Global Technology",
    "industry": "Technology & Startups",
    "location": "New York, NY",
    "summary": "A comprehensive strategy that delivered exceptional results and positioned the client for sustainable long-term growth.",
    "services": [
      "Email",
      "Branding",
      "Content",
      "AEO"
    ],
    "outcomes": [
      {
        "label": "Metric 1",
        "value": "+45%"
      },
      {
        "label": "Metric 2",
        "value": "3.2x"
      }
    ],
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
    "color": "var(--brand-cyan)"
  }
];
