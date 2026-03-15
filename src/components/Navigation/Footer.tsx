import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footerBrand}>Odoo Upgrade Service</div>
                    <div className={styles.footerCopy}>
                        © {new Date().getFullYear()} Odoo Upgrade Service. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
