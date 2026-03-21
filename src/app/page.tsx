"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const VantaGlobe = dynamic(() => import("@/components/UI/VantaGlobe"), { ssr: false });
const VantaDots = dynamic(() => import("@/components/UI/VantaDots"), { ssr: false });
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
    const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const router = useRouter();

    const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLeadStatus("loading");
        
        const formElement = e.target as HTMLFormElement;
        
        try {
            const body = {
                formType: 'lead',
                name: (formElement.querySelector('#lead-name') as HTMLInputElement).value,
                email: (formElement.querySelector('#lead-email') as HTMLInputElement).value,
                phone: (formElement.querySelector('#lead-phone') as HTMLInputElement).value,
                migrationType: (formElement.querySelector('#lead-migration-type') as HTMLSelectElement).value,
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setLeadStatus("success");
                formElement.reset();
                router.push('/thank-you');
            } else {
                setLeadStatus("error");
            }
        } catch (error) {
            console.error(error);
            setLeadStatus("error");
        }
    };

    return (
        <>
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

            <section className={styles.hero} id="hero">
                <VantaGlobe />
                <div className={styles.heroOrb + " " + styles.heroOrb1} />
                <div className={styles.heroOrb + " " + styles.heroOrb2} />
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeDot} />
                            Trusted by 200+ businesses worldwide
                        </div>
                        <h1 className={styles.heroTitle}>
                            Seamless Odoo Migrations{" "}
                            <span className={styles.heroHighlight}>Without the Downtime.</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Upgrade to the latest Odoo version safely. We protect your data,
                            update your custom modules, and ensure your business keeps
                            running without missing a beat.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link href="/contact" className="btn btn-white btn-lg">
                                Request a Free Migration Audit
                                <span className="btn-icon">→</span>
                            </Link>
                        </div>
                        <div className={styles.heroStats}>
                            <div>
                                <div className={styles.heroStatValue}>200+</div>
                                <div className={styles.heroStatLabel}>
                                    Successful Odoo Projects
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
                        <h2 className={`section-title ${styles.painSectionTitle}`}>
                            Is an Outdated Odoo Version Holding Your Business Back?
                        </h2>
                    </div>
                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>⚠️</div>
                            <h3 className={styles.painTitle}>The External Problem</h3>
                            <p className={styles.painText}>
                                You&apos;re stuck on an unsupported version of Odoo, missing out on new features, and your custom modules are starting to break.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>😰</div>
                            <h3 className={styles.painTitle}>The Internal Problem</h3>
                            <p className={styles.painText}>
                                The thought of upgrading feels risky and overwhelming. You&apos;re terrified of data loss or halting your daily operations.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>⚖️</div>
                            <h3 className={styles.painTitle}>The Philosophical Problem</h3>
                            <p className={styles.painText}>
                                Your ERP should accelerate your growth, not force you into stressful technical bottlenecks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SERVICES (Solution) ============ */}
            <section className={styles.services} id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">The Guide</span>
                        <h2 className="section-title">
                            We Make Complex Migrations Feel Effortless.
                        </h2>
                        <p className="section-subtitle">
                            We understand how critical your business data is. A botched migration isn&apos;t just an IT headache—it&apos;s a business crisis.
                        </p>
                    </div>
                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🏢</div>
                            <h3 className={styles.serviceTitle}>Odoo Partner</h3>
                            <p className={styles.serviceText}>
                                As an official Odoo Partner, we have direct access to Odoo&apos;s internal migration tools and support.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🎓</div>
                            <h3 className={styles.serviceTitle}>Certified Experts</h3>
                            <p className={styles.serviceText}>
                                Our team includes Odoo Certified Functional Consultants with deep expertise in Odoo&apos;s latest architecture.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🏆</div>
                            <h3 className={styles.serviceTitle}>20+ Years Experience</h3>
                            <p className={styles.serviceText}>
                                We bring two decades of hands-on IT and digital transformation experience to every project.
                            </p>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
                        <p style={{ maxWidth: '800px', margin: '0 auto var(--space-xl)', fontSize: '1.125rem', color: 'var(--neutral-600)' }}>
                            As an official Odoo Partner with over two decades of IT experience, we have successfully guided businesses through complex database upgrades and custom module refactors.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Request a Free Migration Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ PROCESS (Roadmap) ============ */}
            <section className={styles.process} id="process">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge section-dark">The Plan</span>
                        <h2 className="section-title" style={{ color: "#fff" }}>
                            Your Path to the Latest Odoo Version in 3 Steps
                        </h2>
                    </div>
                    <div className={styles.processSteps} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>01</div>
                            <h3 className={styles.processStepTitle}>The Migration Audit</h3>
                            <p className={styles.processStepText}>
                                We analyze your current database, identify custom apps, and map out a risk-free upgrade strategy.
                            </p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>02</div>
                            <h3 className={styles.processStepTitle}>The Test Run</h3>
                            <p className={styles.processStepText}>
                                We perform a complete test migration in a secure staging environment. You test everything while your live system keeps running.
                            </p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>03</div>
                            <h3 className={styles.processStepTitle}>Seamless Go-Live</h3>
                            <p className={styles.processStepText}>
                                Once you approve, we execute the final upgrade over a weekend. You log in on Monday to a faster, fully updated Odoo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SUCCESS (Vision) ============ */}
            <section className={styles.results} id="vision">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">The Success</span>
                        <h2 className="section-title">Unlock the Full Power of Modern Odoo</h2>
                    </div>
                    <div className={styles.visionGrid}>
                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>🛡️</div>
                            <h3 className={styles.visionTitle}>Peace of Mind</h3>
                            <p className={styles.visionText}>Knowing your data is secure and flawlessly migrated by experts who care about your continuity.</p>
                        </div>
                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>🚀</div>
                            <h3 className={styles.visionTitle}>Increased Speed</h3>
                            <p className={styles.visionText}>Leveraging the massive performance boosts and efficiency of the newest Odoo architecture.</p>
                        </div>
                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>💎</div>
                            <h3 className={styles.visionTitle}>Future-Proofed</h3>
                            <p className={styles.visionText}>Full access to the latest native apps, AI features, and official long-term support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ FAILURE (Warning) ============ */}
            <section className={styles.warningSection}>
                <div className="container">
                    <div className={styles.warningBox}>
                        <h2 className={styles.warningTitle}>Don&apos;t Risk Your Business Continuity</h2>
                        <p className={styles.warningText}>
                            Delaying an upgrade leaves your system vulnerable to security risks, while attempting a DIY migration often leads to corrupted databases and broken custom code.
                        </p>
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
            <section className={styles.ctaSection}>
                <VantaDots />
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Ready to Modernize Your Odoo?
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Get a free, no-obligation migration audit. Our experts will
                        analyze your current setup and provide a detailed roadmap.
                    </p>
                    <form className={styles.leadForm} onSubmit={handleLeadSubmit}>
                        <div className={styles.leadFormTitle}>
                            Request a Free Migration Audit
                        </div>
                        <input
                            type="text"
                            className={styles.leadFormInput}
                            placeholder="Full Name"
                            id="lead-name"
                            required
                            aria-label="Full Name"
                        />
                        <input
                            type="email"
                            className={styles.leadFormInput}
                            placeholder="Work Email"
                            id="lead-email"
                            required
                            aria-label="Work Email"
                        />
                        <input
                            type="tel"
                            className={styles.leadFormInput}
                            placeholder="Phone Number"
                            id="lead-phone"
                            required
                            aria-label="Phone Number"
                        />
                        <select
                            className={styles.leadFormSelect}
                            id="lead-migration-type"
                            required
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
                        <button 
                            className={styles.leadFormBtn} 
                            type="submit" 
                            id="lead-submit"
                            disabled={leadStatus === "loading"}
                        >
                            {leadStatus === "loading" ? "Sending Request..." : "Request Free Migration Audit →"}
                        </button>
                        
                        {leadStatus === "success" && (
                            <p style={{ color: "var(--accent-emerald)", marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", fontWeight: "600" }}>
                                Thanks! Your request has been sent.
                            </p>
                        )}
                        {leadStatus === "error" && (
                            <p style={{ color: "#ef4444", marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", fontWeight: "600" }}>
                                Error sending request. Please try again.
                            </p>
                        )}

                        <p className={styles.leadFormTrust}>
                            🔒 Your information is secure. We never share your data.
                        </p>
                    </form>
                </div>
            </section>

        </>
    );
}
