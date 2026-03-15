export interface CaseStudy {
    id: string;
    title: string;
    summary: string;
    date: string;
    category: string;
    image: string;
    slug: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        title: "Global Retailer Migrates to Odoo 18 with Zero Downtime",
        summary: "How a billion-dollar retail chain successfully transitioned their entire operations from a legacy SAP system to Odoo 18, improving efficiency by 35%.",
        date: "10 Mar 2024",
        category: "Retail",
        image: "/images/case-studies/retail-migration.webp",
        slug: "global-retailer-odoo-18-migration"
    },
    {
        id: "2",
        title: "Manufacturing Efficiency Boost: From Odoo 14 to 18",
        summary: "Automating shop floor operations and real-time inventory tracking for a leading automotive parts manufacturer.",
        date: "28 Feb 2024",
        category: "Manufacturing",
        image: "/images/case-studies/manufacturing-boost.webp",
        slug: "manufacturing-odoo-upgrade"
    },
    {
        id: "3",
        title: "Scaling E-commerce with Odoo Integration",
        summary: "Synchronizing multi-channel sales and logistics for a rapidly growing fashion brand using Odoo's advanced API.",
        date: "15 Feb 2024",
        category: "E-commerce",
        image: "/images/case-studies/ecommerce-scaling.webp",
        slug: "ecommerce-odoo-integration"
    },
    {
        id: "4",
        title: "Financial Services Modernization",
        summary: "Replacing disparate accounting tools with a unified Odoo Financials suite for a boutique investment firm.",
        date: "20 Jan 2024",
        category: "Finance",
        image: "/images/case-studies/finance-modernization.webp",
        slug: "finance-services-odoo"
    }
];
