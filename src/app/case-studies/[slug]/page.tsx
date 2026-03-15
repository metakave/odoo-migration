import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import styles from "./case-study-detail.module.css";

export async function generateStaticParams() {
    return caseStudies.map((post) => ({
        slug: post.slug,
    }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const post = caseStudies.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className={styles.caseStudyDetail}>
            <header className={styles.hero}>
                <div className="container">
                    <span className={styles.badge}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>{post.date}</div>
                </div>
            </header>

            <div className="container">
                <div className={styles.contentWrapper}>
                    <Link href="/case-studies" className={styles.backLink}>
                        ← Back to Case Studies
                    </Link>

                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={1200} 
                        height={514} 
                        className={styles.featuredImage} 
                    />

                    <article className={styles.articleContent}>
                        <p className="lead">
                            {post.summary}
                        </p>
                        
                        <h2>The Challenge</h2>
                        <p>
                            Every migration starts with a unique set of challenges. For this project, the client was facing
                            significant performance bottlenecks and security concerns with their legacy systems.
                            They needed a partner who could manage the transition with zero data loss and minimal downtime.
                        </p>

                        <h2>Our Approach</h2>
                        <p>
                            We implemented a rigorous 4-step migration roadmap, starting with a comprehensive audit of their
                            current data structures and business processes. We then developed a customized migration pipeline
                            to handle field-level mapping and validation.
                        </p>
                        <ul>
                            <li>Comprehensive system audit and blueprinting.</li>
                            <li>Automated data cleansing and transformation.</li>
                            <li>Parallel environment testing and validation.</li>
                            <li>Executed go-live with 24/7 post-migration support.</li>
                        </ul>

                        <h2>The Results</h2>
                        <p>
                            The transition was completed ahead of schedule, resulting in a 35% increase in operational efficiency
                            and a significantly improved user experience for their global team.
                        </p>
                        <p>
                            &ldquo;The expertise and dedication of the OdooMigrate team were instrumental in our successful
                            digital transformation. They turned a complex migration into a seamless experience.&rdquo;
                        </p>
                    </article>
                </div>
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = caseStudies.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: `${post.title} | Case Studies | Odoo Upgrade Service`,
        description: post.summary,
    };
}
