"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.footerGrid}>
                    {/* Column 1: Brand & About */}
                    <div className={styles.footerCol}>
                        <Link href="/" className={styles.footerBrand}>
                            Odoo <span className={styles.footerBrandAccent}>Upgrade Service</span>
                        </Link>
                        <p className={styles.footerAbout}>
                            We are a team of certified Odoo experts specializing in seamless ERP migrations, 
                            version upgrades, and custom module development. Trusted by 200+ businesses worldwide.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Quick Links</h4>
                        <nav className={styles.footerNav}>
                            <Link href="/" className={styles.footerLink}>Home</Link>
                            <Link href="/#services" className={styles.footerLink}>Services</Link>
                            <Link href="/#process" className={styles.footerLink}>Our Process</Link>
                            <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
                            <Link href="/faq" className={styles.footerLink}>FAQ</Link>
                        </nav>
                    </div>

                    {/* Column 3: Resources */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Resources</h4>
                        <nav className={styles.footerNav}>
                            <Link href="/insights" className={styles.footerLink}>Insights & Blog</Link>
                            <Link href="/case-studies" className={styles.footerLink}>Case Studies</Link>
                            <Link href="/insights/comprehensive-guide-odoo-version-migration-2026" className={styles.footerLink}>Migration Guide</Link>
                            <Link href="/insights/odoo-19-vs-odoo-17-new-features-and-updates" className={styles.footerLink}>Odoo 19 vs 17</Link>
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Get in Touch</h4>
                        <div className={styles.footerContactList}>
                            <a href="mailto:hello@sadiqalam.com" className={styles.footerContactItem}>
                                <span className={styles.footerContactIcon}>✉</span>
                                Email
                            </a>
                            <a href="https://wa.me/8801924572887" target="_blank" rel="noopener noreferrer" className={styles.footerContactItem}>
                                <span className={styles.footerContactIcon}>💬</span>
                                WhatsApp
                            </a>
                            <Link href="/contact" className={styles.footerCtaBtn}>
                                Request Free Assessment →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.footerBottom}>
                    <div className={styles.footerCopy}>
                        © {new Date().getFullYear()} Odoo Upgrade Service. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
