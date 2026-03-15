import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { insights } from "@/data/insights";
import styles from "./insights.module.css";

export const metadata: Metadata = {
    title: "Insights & Updates | Odoo Upgrade Service",
    description: "Expert insights, best practices, and the latest updates on Odoo ERP version upgrades and business modernization.",
};

export default function InsightsPage() {
    return (
        <main className={styles.archiveSection}>
            <div className="container">
                <header className={styles.archiveHeader}>
                    <h1 className={styles.archiveTitle}>Odoo ERP Insights</h1>
                    <p className={styles.archiveSubtitle}>
                        Expert perspectives, proven strategies, and technical guides on navigating OS upgrades, complex migrations, and business transformation.
                    </p>
                </header>

                <div className={styles.grid}>
                    {insights.map((post) => (
                        <Link href={`/insights/${post.slug}`} key={post.id} className={styles.card}>
                            {post.image ? (
                                <Image 
                                    src={post.image} 
                                    alt={post.title} 
                                    width={600} 
                                    height={337} 
                                    className={styles.cardImage} 
                                />
                            ) : (
                                <div className={styles.cardImagePlaceholder} style={{ width: '100%', height: '337px', backgroundColor: '#f0f0f0' }}></div>
                            )}
                            <div className={styles.cardContent}>
                                <span className={styles.badge}>{post.category}</span>
                                <h2 className={styles.title}>{post.title}</h2>
                                <p className={styles.summary}>{post.summary}</p>
                                
                                <div className={styles.meta}>
                                    <span>{post.date}</span>
                                </div>
                                
                                <div className={styles.cardFooter}>
                                    <span className={styles.readTimeTag}>{post.readTime}</span>
                                    <span className={styles.readMore}>
                                        Read Insight <span>→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
