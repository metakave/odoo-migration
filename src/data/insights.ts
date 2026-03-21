export interface Insight {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content?: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
    markdownFile?: string;
}

export const insights: Insight[] = [
    {
        id: "1",
        title: "The Future of ERP: AI and Automation in Odoo 18",
        slug: "future-of-erp-ai-automation-odoo-18",
        summary: "Explore how the latest AI integrations and automated workflows in Odoo 18 are transforming the way businesses handle daily operations.",
        date: "12 Mar 2024",
        author: "Tech Strategy Team",
        category: "Technology trends",
        image: "/images/insights/ai-automation.webp",
        readTime: "4 Min Read"
    },
    {
        id: "2",
        title: "5 Signs Your Business is Ready for an Odoo Upgrade",
        slug: "5-signs-ready-for-odoo-upgrade",
        summary: "Struggling with slow performance or legacy integrations? Here are the top five indicators that it's time to take your Odoo system to the next level.",
        date: "25 Feb 2024",
        author: "Consulting Experts",
        category: "Business Strategy",
        image: "/images/insights/business-readiness.webp",
        readTime: "3 Min Read"
    },
    {
        id: "3",
        title: "Navigating Data Migration: A Step-by-Step Guide",
        slug: "navigating-data-migration-guide",
        summary: "Data migration is often the riskiest part of any ERP upgrade. Learn our proven methodology for ensuring zero data loss and minimal downtime.",
        date: "18 Jan 2024",
        author: "Migration Specialists",
        category: "Technical Guide",
        image: "/images/insights/data-migration.webp",
        readTime: "5 Min Read"
    },
    {
        id: "4",
        title: "A Comprehensive Guide for Odoo Version Migration in 2026",
        slug: "comprehensive-guide-odoo-version-migration-2026",
        summary: "Odoo version migration is no longer an optional “IT project”—it is a strategic move to unlock new features, close security gaps, and future‑proof your business.",
        date: "15 Mar 2026",
        author: "Migration Strategy Team",
        category: "Technical Guide",
        image: "/images/insights/odoo_migration_2026.webp",
        readTime: "9 Min Read",
        markdownFile: "public/comprehensive-guide.md"
    },
    {
        id: "5",
        title: "Odoo 19 vs Odoo 17: The Most Important New Features and Updates Explained",
        slug: "odoo-19-vs-odoo-17-new-features-and-updates",
        summary: "Odoo 19 is not just a cosmetic update over Odoo 17; it is a release where AI, automation, and compliance become first‑class citizens across the suite.",
        date: "15 Mar 2026",
        author: "Tech Strategy Team",
        category: "Feature",
        image: "/images/insights/odoo-feature.webp",
        readTime: "8 Min Read",
        markdownFile: "public/odoo-17to19.md"
    },
    {
        id: "6",
        title: "Odoo Version Support Policy & Impact on User License Pricing (2026)",
        slug: "odoo-version-support-policy-2026",
        summary: "Starting in July 2025, Odoo changed its terms to support all versions indefinitely, but older versions face a 25% Legacy Support Surcharge. Learn how this impacts your business.",
        date: "22 Mar 2026",
        author: "Strategy & Policy Team",
        category: "Policy & Pricing",
        image: "/images/insights/update-markus-winkler-qPjV8XaXPTQ-unsplash.jpg",
        readTime: "5 Min Read",
        markdownFile: "public/version-policy.md"
    }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
