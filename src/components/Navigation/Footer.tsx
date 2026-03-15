import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footerBrand}>Odoo Upgrade Service</div>
                    
                    <nav className={styles.footerNav}>
                        <Link href="/" className={styles.footerLink}>Home</Link>
                        <Link href="/case-studies" className={styles.footerLink}>Case Studies</Link>
                        <Link href="/faq" className={styles.footerLink}>FAQ</Link>
                    </nav>

                    <div className={styles.footerCopy}>
                        © {new Date().getFullYear()} Odoo Upgrade Service. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
