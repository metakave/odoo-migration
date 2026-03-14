import styles from "./Footer.module.css";

export default function Footer() {
    return (
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
    );
}
