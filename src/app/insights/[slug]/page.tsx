import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import ProgressBar from "@/components/UI/ProgressBar";
import InsightCTA from "@/components/UI/InsightCTA";
import styles from "./insight-detail.module.css";
import fs from "fs";
import path from "path";
import { marked } from "marked";

export async function generateStaticParams() {
    return insights.map((post) => ({
        slug: post.slug,
    }));
}

export default async function InsightDetail({ params }: { params: { slug: string } }) {
    const post = insights.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    let contentHtml = "";
    if (post.markdownFile) {
        const filePath = path.join(process.cwd(), post.markdownFile);
        try {
            const markdownString = fs.readFileSync(filePath, "utf8");
            contentHtml = await marked.parse(markdownString);
        } catch (e) {
            console.error("Error reading markdown file", e);
        }
    }

    return (
        <main className={styles.detailPage}>
            <ProgressBar />
            <header className={styles.hero}>
                <div className="container">
                    <span className={styles.badge}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className={styles.readTimeTag}>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className={styles.contentWrapper}>
                    <Link href="/insights" className={styles.backLink}>
                        ← Back to Insights
                    </Link>

                    {post.image ? (
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            width={1200} 
                            height={675} 
                            className={styles.featuredImage} 
                        />
                    ) : null}

                    <article className={styles.articleContent}>
                        {contentHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                        ) : (
                            <>
                                <p className="lead">
                                    {post.summary}
                                </p>
                                
                                <h2>The Evolution of Odoo</h2>
                                <p>
                                    With each new version, Odoo significantly expands its capabilities, turning a collection of apps into a robust ecosystem. 
                                    Understanding these changes is crucial for businesses aiming to maintain a competitive edge and operational efficiency.
                                </p>

                                <h2>Key Considerations</h2>
                                <p>
                                    Transitioning or upgrading your ERP isn't just an IT project; it's a strategic business initiative. Here's what you need to focus on:
                                </p>
                                <ul>
                                    <li><strong>Data Integrity:</strong> Ensuring that historical data maps correctly to new structures.</li>
                                    <li><strong>Custom Code:</strong> Evaluating if custom modules can be replaced by new standard features.</li>
                                    <li><strong>User Training:</strong> Preparing your team for UI changes and new workflow paradigms.</li>
                                    <li><strong>Downtime Mitigation:</strong> Planning the cutover carefully to minimize business disruption.</li>
                                </ul>

                                <h2>Looking Ahead</h2>
                                <p>
                                    The landscape of business software is rapidly evolving towards more AI-driven automation, unified interfaces, and cloud-native architectures. 
                                    Staying updated ensures your business runs on a secure, supported, and feature-rich foundation.
                                </p>
                            </>
                        )}
                    </article>

                    <InsightCTA />
                </div>
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = insights.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: `${post.title} | Insights | Odoo Upgrade Service`,
        description: post.summary,
    };
}
