import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import styles from "./case-studies.module.css";

export const metadata = {
    title: "Case Studies | Odoo Upgrade Service",
    description: "Explore our successful Odoo migration and upgrade projects across various industries.",
};

export default function CaseStudiesPage() {
    const featuredPost = caseStudies[0];
    const remainingPosts = caseStudies.slice(1);

    return (
        <main className={styles.archiveSection}>
            <div className="container">
                <header className="section-header">
                    <span className="section-badge">Success Stories</span>
                    <h1 className={styles.archiveTitle}>Case Studies</h1>
                    <p className="section-subtitle">
                        Real-world examples of how we help businesses modernize their operations with Odoo.
                    </p>
                </header>

                <div className={styles.grid}>
                    {/* Featured Post */}
                    {featuredPost && (
                        <div className={styles.featuredCard}>
                            <div className={styles.featuredImage}>
                                {/* Using a div with background color/placeholder until actual images are provided */}
                            </div>
                            <div className={styles.featuredContent}>
                                <span className={styles.badge}>{featuredPost.category}</span>
                                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                                <p className={styles.excerpt}>{featuredPost.summary}</p>
                                <div className={styles.meta}>{featuredPost.date}</div>
                                <Link href={`/case-studies/${featuredPost.slug}`} className={styles.readMore}>
                                    Read Full Story <span>→</span>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Remaining Posts */}
                    {remainingPosts.map((post) => (
                        <div key={post.id} className={styles.regularCard}>
                            <div className={styles.cardImage}>
                                {/* Placeholder */}
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.badge}>{post.category}</span>
                                <h3 className={styles.title}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.summary}</p>
                                <div className={styles.meta}>{post.date}</div>
                                <Link href={`/case-studies/${post.slug}`} className={styles.readMore}>
                                    View Details <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
