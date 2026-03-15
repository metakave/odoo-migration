import { Metadata } from 'next';
import styles from './faq.module.css';

export const metadata: Metadata = {
    title: 'FAQ | Odoo Upgrade Service',
    description: 'Frequently asked questions about Odoo version upgrades and migration services. Learn about our process, costs, security, and timeline.',
};

const faqData = [
    {
        category: "General questions",
        items: [
            { q: "What is an Odoo version upgrade?", a: "An Odoo version upgrade is the process of moving your existing Odoo system to a newer official Odoo release while keeping your data, main configuration, and business processes intact." },
            { q: "What is Odoo migration?", a: "Odoo migration is a broader process that includes upgrading the Odoo version, adapting custom modules, updating integrations, and ensuring all data and workflows function correctly on the new version." },
            { q: "What is the difference between Odoo upgrade and Odoo migration?", a: "An Odoo upgrade focuses mainly on moving from one official Odoo version to another, while an Odoo migration covers the whole ecosystem: data, customizations, third‑party apps, and integrations." },
            { q: "Why should I upgrade my Odoo version?", a: "Upgrading gives you new features, better performance, security fixes, compatibility with new modules, and longer support from the Odoo ecosystem." },
            { q: "How often should I upgrade Odoo?", a: "Most businesses upgrade every 2–3 major versions or when their current version approaches end of support, but the ideal timing depends on your stability and feature needs." },
            { q: "What are the risks of not upgrading Odoo?", a: "Staying on an old version can lead to security vulnerabilities, missing features, compatibility problems with add‑ons, and increasing difficulty when you finally decide to upgrade." },
            { q: "Is Odoo upgrade mandatory?", a: "No, it is not mandatory, but it is highly recommended if your version is outdated, unsupported, or blocking you from new features or integrations you need." },
            { q: "Which Odoo versions can you upgrade from and to?", a: "We typically support upgrades from several older community and enterprise versions to the latest stable release, and we can review special cases individually." },
            { q: "Can you help me decide whether to upgrade or stay on my current version?", a: "Yes, we start with an assessment to compare benefits, costs, and risks so you can make an informed decision tailored to your business." },
            { q: "Do you support both Odoo Community and Odoo Enterprise upgrades?", a: "Yes, we work with both Community and Enterprise editions and adapt the upgrade and migration plan based on your specific edition and licensing." }
        ]
    },
    {
        category: "Scope and services",
        items: [
            { q: "What is included in your Odoo Upgrade Service?", a: "Our service usually includes analysis of your current system, database upgrade, custom module migration, testing, performance checks, training, and post‑upgrade support." },
            { q: "What is included in your Odoo Migration Service?", a: "Odoo Migration Service adds data mapping, refactoring of customizations, integration adjustments, and sometimes functional redesign to fit new features and best practices." },
            { q: "Do you only upgrade Odoo or also review business processes?", a: "We can do both: a technical upgrade only or a combined upgrade with process review and improvements to take advantage of the new version’s capabilities." },
            { q: "Can you migrate data from other ERPs into Odoo during the upgrade?", a: "Yes, we can plan data migration from legacy systems into the new Odoo version as part of a broader migration project, subject to data quality and scope." },
            { q: "Do you help with Odoo hosting changes during migration?", a: "We can assist with moving from on‑premise to cloud, from one hosting provider to another, or to Odoo Online/Odoo.sh as part of the migration plan." },
            { q: "Can you handle multi‑company or multi‑database Odoo environments?", a: "Yes, we have procedures for upgrading complex setups with multiple companies, databases, and environments while preserving their structure." },
            { q: "Do you provide emergency support for failed Odoo upgrades?", a: "We can perform a rescue assessment, identify what went wrong, stabilize the system, and propose a recovery and proper migration plan." },
            { q: "Can you split the upgrade into phases?", a: "Yes, for larger projects we often phase the upgrade by modules, companies, or departments to reduce risk and manage change more smoothly." },
            { q: "Do you offer functional consulting as part of Odoo migration?", a: "We provide functional consulting to align your workflows, configurations, and modules with the capabilities of the target Odoo version." },
            { q: "Can you train our team on the new Odoo version?", a: "Yes, we can conduct role‑based training sessions and provide documentation so users understand what has changed and how to work efficiently." }
        ]
    },
    {
        category: "Process and methodology",
        items: [
            { q: "What is your standard Odoo upgrade process?", a: "Typically we follow these steps: discovery and analysis, upgrade planning, test migration, custom code adaptation, user testing, final migration, and post‑go‑live support." },
            { q: "Do you start with a test upgrade?", a: "Yes, we always perform at least one test migration in a staging environment to validate data, custom modules, and integrations before touching your production system." },
            { q: "How do you handle custom modules during Odoo version migration?", a: "We review each custom module, refactor or rewrite it for the target version, resolve deprecated APIs, and test it thoroughly before deployment." },
            { q: "How do you manage third‑party apps and integrations?", a: "We check compatibility, update or replace outdated apps, adjust integrations (APIs, webhooks, connectors), and coordinate with vendors when needed." },
            { q: "How do you ensure the upgraded system is stable?", a: "We run automated and manual tests, involve your key users for UAT, monitor logs and performance, and keep a rollback plan ready during cutover." },
            { q: "What is your approach to minimize downtime?", a: "We plan cutover during low‑activity windows, run rehearsals in staging, optimize migration scripts, and prepare backup and rollback strategies." },
            { q: "Do you use a separate staging environment for testing?", a: "Yes, we work in a staging environment that mirrors production as closely as possible so we can validate behavior before final migration." },
            { q: "How do you handle configuration changes between versions?", a: "We document your current configuration, map it to the new version, adjust settings where features have changed, and verify behavior with test scenarios." },
            { q: "Can we continue working in Odoo during the migration process?", a: "You can continue using your current production system while we work on a copy in staging, and we schedule a final cutover for the actual switch." },
            { q: "How do you communicate progress during an Odoo migration?", a: "We define milestones, share a clear project plan, and provide regular updates via calls, reports, or your preferred collaboration tools." }
        ]
    },
    {
        category: "Timeframe and cost",
        items: [
            { q: "How long does an Odoo upgrade usually take?", a: "Smaller, mostly standard setups can take a few days to a few weeks, while heavily customized or multi‑company environments can require several weeks or more." },
            { q: "What factors influence the duration of an Odoo migration?", a: "Key factors include database size, number of modules, level of customization, integration complexity, user testing time, and your availability for decisions." },
            { q: "How much does an Odoo upgrade service cost?", a: "Costs vary depending on scope and complexity; we typically provide a detailed estimate after assessing your current system and requirements." },
            { q: "Do you offer fixed‑price Odoo migration packages?", a: "For well‑defined scopes we can offer fixed‑price packages; for complex or evolving requirements, we may propose time‑and‑materials engagement." },
            { q: "Can you provide a quick ballpark estimate before a full analysis?", a: "We can share typical ranges based on similar projects, but a thorough analysis is needed for an accurate quote and risk assessment." },
            { q: "Is there an additional cost for post‑upgrade support?", a: "Post‑upgrade hypercare is often included for a limited period, and ongoing support can be offered under a separate support contract or retainer." },
            { q: "Do you charge separately for staging and testing environments?", a: "We’ll clarify environment costs up front; depending on hosting, staging may be included or billed as a separate resource." },
            { q: "Can we reduce our upgrade cost by simplifying our system first?", a: "Yes, cleaning up unused modules, obsolete customizations, and bad data before migration can reduce effort and future maintenance." },
            { q: "Do you offer discounts for multiple databases or companies?", a: "For larger engagements, multi‑database or multi‑company migrations can be priced with volume considerations; we discuss this during proposal." },
            { q: "How do you handle scope changes during the project?", a: "We use change control: new requirements are assessed for impact on time and cost, then approved or deferred according to your priorities." }
        ]
    },
    {
        category: "Data, security, and reliability",
        items: [
            { q: "Will we lose any data during the Odoo migration?", a: "Our goal is zero data loss; we work from full backups, validate migrated data, and keep rollback options if any critical issues appear." },
            { q: "How do you ensure data integrity after the upgrade?", a: "We perform consistency checks, sample records across key modules, compare totals (e.g., balances, inventory), and involve your team to verify." },
            { q: "Is our data secure during the upgrade process?", a: "We follow secure access practices, use encrypted channels, respect confidentiality agreements, and can work within your security policies or VPN." },
            { q: "Do you create backups before starting the Odoo upgrade?", a: "Yes, we always create full backups and, when possible, snapshot the environment so we can restore quickly if needed." },
            { q: "Can you help with performance optimization after migration?", a: "We can review server sizing, configuration, indexing, and module usage to improve performance on the new version." },
            { q: "What happens if the upgrade fails or we find critical issues?", a: "We can roll back to the previous version, fix the root cause in staging, and repeat the migration once the issues are resolved." },
            { q: "Do you provide documentation after the Odoo migration?", a: "Yes, we can deliver technical and functional documentation, including upgrade steps performed, key changes, and known limitations." },
            { q: "Will all our custom reports work after the upgrade?", a: "We review and adapt custom reports to the new version’s reporting engine and data model, testing critical reports with your team." },
            { q: "Can you support us after go‑live if we face user issues?", a: "We provide a support window after go‑live and can extend it with SLAs for bug fixing, coaching, and small enhancements." },
            { q: "How do we get started with your Odoo Upgrade or Migration Service?", a: "You can contact us with details of your current Odoo version and usage; we will schedule a discovery session and propose the next steps and timeline." }
        ]
    }
];

export default function FAQPage() {
    // Generate JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.flatMap(category => 
            category.items.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
        )
    };

    return (
        <main className={styles.faqPage}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <header className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Frequently Asked Questions</h1>
                    <p className={styles.subtitle}>
                        Everything you need to know about our Odoo upgrade and migration services.
                        If you have other questions, feel free to reach out to us.
                    </p>
                </div>
            </header>

            <section className={styles.content}>
                {faqData.map((category, index) => (
                    <div key={index} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>{category.category}</h2>
                        <div className={styles.faqList}>
                            {category.items.map((item, i) => (
                                <details key={i} className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        {item.q}
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>{item.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
