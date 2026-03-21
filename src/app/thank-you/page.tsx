import Link from "next/link";
import styles from "./thank-you.module.css";

export const metadata = {
    title: "Thank You | Odoo Upgrade Service",
    description: "Thank you for reaching out to us. We will get back to you shortly.",
};

export default function ThankYouPage() {
    return (
        <main className={styles.thankYouPage}>
            <div className={styles.container}>
                <div className={styles.icon}>✓</div>
                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.message}>
                    Your request has been successfully submitted. One of our Odoo migration experts will review your details and get back to you within 24 hours.
                </p>
                <div className={styles.actions}>
                    <Link href="/" className="btn btn-primary">
                        Return Home
                    </Link>
                    <Link href="/insights" className="btn btn-outline">
                        Read Our Insights
                    </Link>
                </div>
            </div>
        </main>
    );
}
