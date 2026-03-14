"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const faqs = [
    {
        q: "How long does an Odoo migration typically take?",
        a: "Most migrations are completed within 4–8 weeks depending on the complexity of your data, the number of custom modules, and the version gap. We provide a detailed timeline after the initial assessment.",
    },
    {
        q: "Will I lose any data during the migration?",
        a: "Absolutely not. Data integrity is our top priority. We perform full backups before any changes, run parallel environments for validation, and provide a detailed data reconciliation report.",
    },
    {
        q: "Can you migrate from other ERPs like SAP or NetSuite?",
        a: "Yes. We have extensive experience migrating businesses from SAP, Oracle, NetSuite, Microsoft Dynamics, and other legacy systems into Odoo with complete data mapping and business logic transfer.",
    },
    {
        q: "Do you preserve custom modules and integrations?",
        a: "We audit every custom module and third-party integration before the migration. Compatible modules are updated; incompatible ones are rebuilt using Odoo's latest API. Nothing is lost.",
    },
    {
        q: "What kind of support do you provide after migration?",
        a: "We provide 90 days of post-migration support including bug fixes, performance optimization, and user training. Extended support plans are also available.",
    },
];

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* ======= HEADER ======= */}
            <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
                <div className={styles.headerInner}>
                    <div className={styles.headerLogo}>
                        Odoo <span className={styles.headerLogoAccent}>Migration Services</span>
                    </div>

                    <button
                        className={styles.menuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                        <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
                    </button>

                    <nav className={`${styles.headerNav} ${isMenuOpen ? styles.headerNavOpen : ""}`}>
                        <a href="#services" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#process" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Process</a>
                        <a href="#results" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Results</a>
                        <a href="#testimonials" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Stories</a>
                        <a href="#faq" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>FAQ</a>
                        <a href="#contact" className={styles.headerCta} onClick={() => setIsMenuOpen(false)}>Free Assessment</a>
                    </nav>
                </div>
            </header>
            {/* ======= JSON-LD Structured Data ======= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        name: "Odoo Migration Services",
                        description:
                            "Expert Odoo migration & upgrade services. Migrate from any ERP or older Odoo version with zero data loss.",
                        serviceType: "ERP Migration",
                        areaServed: "Worldwide",
                        url: "https://odoo-migration.com",
                        offers: {
                            "@type": "Offer",
                            name: "Free Migration Assessment",
                            price: "0",
                            priceCurrency: "USD",
                        },
                    }),
                }}
            />

            {/* ============ HERO ============ */}
            <section className={styles.hero} id="hero">
                <div className={styles.heroOrb + " " + styles.heroOrb1} />
                <div className={styles.heroOrb + " " + styles.heroOrb2} />
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeDot} />
                            Trusted by 200+ businesses worldwide
                        </div>
                        <h1 className={styles.heroTitle}>
                            Seamless Odoo Migration.{" "}
                            <span className={styles.heroHighlight}>Zero Downtime.</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Upgrade to the latest Odoo version or migrate from any legacy ERP
                            — with complete data integrity, custom module preservation, and
                            expert support every step of the way.
                        </p>
                        <div className={styles.heroCtas}>
                            <a href="#contact" className="btn btn-white btn-lg">
                                Get Free Migration Assessment
                                <span className="btn-icon">→</span>
                            </a>
                        </div>
                        <div className={styles.heroStats}>
                            <div>
                                <div className={styles.heroStatValue}>200+</div>
                                <div className={styles.heroStatLabel}>
                                    Successful Migrations
                                </div>
                            </div>
                            <div>
                                <div className={styles.heroStatValue}>99.9%</div>
                                <div className={styles.heroStatLabel}>
                                    Data Integrity Rate
                                </div>
                            </div>
                            <div>
                                <div className={styles.heroStatValue}>48hr</div>
                                <div className={styles.heroStatLabel}>
                                    Average Response Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PAIN POINTS (Problem) ============ */}
            <section className={styles.painPoints} id="problems">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">The Problem</span>
                        <h2 className="section-title">
                            Running on an Outdated Odoo Version?
                        </h2>
                        <p className="section-subtitle">
                            Staying on legacy systems costs you more than you think — in
                            security risks, lost productivity, and missed opportunities.
                        </p>
                    </div>
                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>🔓</div>
                            <h3 className={styles.painTitle}>Security Vulnerabilities</h3>
                            <p className={styles.painText}>
                                Older Odoo versions no longer receive security patches, leaving
                                your business data exposed to growing threats.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>⚡</div>
                            <h3 className={styles.painTitle}>Performance Bottlenecks</h3>
                            <p className={styles.painText}>
                                Slow load times, clunky UI, and inefficient workflows — legacy
                                versions drag your team&apos;s productivity down daily.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>🔌</div>
                            <h3 className={styles.painTitle}>Integration Dead-Ends</h3>
                            <p className={styles.painText}>
                                Modern third-party tools and APIs often don&apos;t support older
                                Odoo versions, creating costly workarounds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SERVICES (Solution) ============ */}
            <section className={styles.services} id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Solutions</span>
                        <h2 className="section-title">
                            Comprehensive Odoo Migration Services
                        </h2>
                        <p className="section-subtitle">
                            Whether you&apos;re upgrading versions or moving from a completely
                            different ERP — we have you covered.
                        </p>
                    </div>
                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🔄</div>
                            <h3 className={styles.serviceTitle}>Version Upgrade</h3>
                            <p className={styles.serviceText}>
                                Upgrade from Odoo 12, 13, 14, 15, 16, or 17 to the latest Odoo
                                18 with full data and module compatibility.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Database schema migration</li>
                                <li>Custom module re-engineering</li>
                                <li>Theme & UI modernization</li>
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>📊</div>
                            <h3 className={styles.serviceTitle}>Data Migration</h3>
                            <p className={styles.serviceText}>
                                Move your critical business data — customers, invoices,
                                inventory, HR records — with field-level precision.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Data mapping & cleansing</li>
                                <li>Automated validation pipelines</li>
                                <li>Historical data preservation</li>
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🌐</div>
                            <h3 className={styles.serviceTitle}>ERP-to-Odoo Migration</h3>
                            <p className={styles.serviceText}>
                                Transitioning from SAP, Oracle, NetSuite, or Microsoft Dynamics?
                                We handle the full migration lifecycle.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Business process alignment</li>
                                <li>Multi-system data consolidation</li>
                                <li>Go-live cutover planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PROCESS (Roadmap) ============ */}
            <section className={styles.process} id="process">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge section-dark">Our Process</span>
                        <h2 className="section-title" style={{ color: "#fff" }}>
                            Your Migration Roadmap
                        </h2>
                        <p
                            className="section-subtitle"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                            A proven, battle-tested 4-step process that ensures a smooth
                            transition with zero surprises.
                        </p>
                    </div>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>01</div>
                            <h3 className={styles.processStepTitle}>Discovery & Audit</h3>
                            <p className={styles.processStepText}>
                                We analyze your current system, data structures, custom modules,
                                and integrations to build a complete migration blueprint.
                            </p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>02</div>
                            <h3 className={styles.processStepTitle}>Migration Planning</h3>
                            <p className={styles.processStepText}>
                                A detailed plan with timelines, risk mitigation strategies,
                                rollback procedures, and resource allocation.
                            </p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>03</div>
                            <h3 className={styles.processStepTitle}>
                                Execute & Validate
                            </h3>
                            <p className={styles.processStepText}>
                                We migrate your data in a staging environment, run automated
                                tests, and validate every record before going live.
                            </p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>04</div>
                            <h3 className={styles.processStepTitle}>Go-Live & Support</h3>
                            <p className={styles.processStepText}>
                                Seamless cutover with 90 days of post-migration support,
                                including performance monitoring and user training.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ RESULTS / SOCIAL PROOF ============ */}
            <section className={styles.results} id="results">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Proven Results</span>
                        <h2 className="section-title">Numbers That Speak for Themselves</h2>
                    </div>
                    <div className={styles.resultsGrid}>
                        <div className={styles.resultCard}>
                            <div className={styles.resultValue}>200+</div>
                            <div className={styles.resultLabel}>Migrations Delivered</div>
                        </div>
                        <div className={styles.resultCard}>
                            <div className={styles.resultValue}>15+</div>
                            <div className={styles.resultLabel}>Countries Served</div>
                        </div>
                        <div className={styles.resultCard}>
                            <div className={styles.resultValue}>99.9%</div>
                            <div className={styles.resultLabel}>Data Accuracy</div>
                        </div>
                        <div className={styles.resultCard}>
                            <div className={styles.resultValue}>4.9★</div>
                            <div className={styles.resultLabel}>Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ TESTIMONIALS ============ */}
            <section className={styles.testimonials} id="testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Client Stories</span>
                        <h2 className="section-title">What Our Clients Say</h2>
                    </div>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialStars}>★★★★★</div>
                            <p className={styles.testimonialText}>
                                &ldquo;We were stuck on Odoo 13 for years. The team migrated us
                                to Odoo 17 in just 5 weeks — no data loss, no downtime. Our
                                team&apos;s productivity improved by 40% almost
                                immediately.&rdquo;
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.testimonialAvatar}>SK</div>
                                <div>
                                    <div className={styles.testimonialName}>Sarah K.</div>
                                    <div className={styles.testimonialRole}>
                                        COO, TechManufacture Inc.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialStars}>★★★★★</div>
                            <p className={styles.testimonialText}>
                                &ldquo;Moving from SAP to Odoo felt like an impossible task
                                until we found this team. They mapped every single business
                                process and delivered ahead of schedule. Truly world-class
                                service.&rdquo;
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.testimonialAvatar}>MR</div>
                                <div>
                                    <div className={styles.testimonialName}>Michael R.</div>
                                    <div className={styles.testimonialRole}>
                                        CTO, GreenLogistics GmbH
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ FAQ ============ */}
            <section className={styles.faq} id="faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">FAQ</span>
                        <h2 className="section-title">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className={styles.faqList}>
                        {faqs.map((faq, i) => (
                            <div className={styles.faqItem} key={i}>
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    {faq.q}
                                    <span
                                        className={`${styles.faqToggle} ${openFaq === i ? styles.faqToggleOpen : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <div className={styles.faqAnswer}>{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ FINAL CTA + LEAD FORM ============ */}
            <section className={styles.ctaSection} id="contact">
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Ready to Modernize Your Odoo?
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Get a free, no-obligation migration assessment. Our experts will
                        analyze your current setup and provide a detailed roadmap.
                    </p>
                    <div className={styles.leadForm}>
                        <div className={styles.leadFormTitle}>
                            Get Your Free Assessment
                        </div>
                        <input
                            type="text"
                            className={styles.leadFormInput}
                            placeholder="Full Name"
                            id="lead-name"
                            aria-label="Full Name"
                        />
                        <input
                            type="email"
                            className={styles.leadFormInput}
                            placeholder="Work Email"
                            id="lead-email"
                            aria-label="Work Email"
                        />
                        <input
                            type="tel"
                            className={styles.leadFormInput}
                            placeholder="Phone Number"
                            id="lead-phone"
                            aria-label="Phone Number"
                        />
                        <select
                            className={styles.leadFormSelect}
                            id="lead-migration-type"
                            aria-label="Migration Type"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Type of Migration
                            </option>
                            <option value="version-upgrade">
                                Odoo Version Upgrade
                            </option>
                            <option value="data-migration">Data Migration</option>
                            <option value="erp-to-odoo">
                                Other ERP → Odoo
                            </option>
                            <option value="not-sure">Not Sure Yet</option>
                        </select>
                        <button className={styles.leadFormBtn} type="button" id="lead-submit">
                            Request Free Assessment →
                        </button>
                        <p className={styles.leadFormTrust}>
                            🔒 Your information is secure. We never share your data.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============ FOOTER ============ */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerInner}>
                        <div className={styles.footerBrand}>OdooMigrate</div>
                        <div className={styles.footerCopy}>
                            © {new Date().getFullYear()} OdooMigrate. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
