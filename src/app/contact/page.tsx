"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <main className={styles.contactPage}>
            <header className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Let's Talk About Your Migration</h1>
                    <p className={styles.subtitle}>
                        Ready to upgrade your Odoo experience? Our experts are here to help you scope, plan, and execute a flawless transition.
                    </p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Contact Information Side */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoBlock}>
                            <h3>📍 Headquarters</h3>
                            <p>Global Remote Operations</p>
                            <p>Serving clients across MENA, EU, & Americas</p>
                        </div>
                        
                        <div className={styles.infoBlock}>
                            <h3>📞 WhatsApp & Phone</h3>
                            <a href="https://wa.me/8801924572887" target="_blank" rel="noopener noreferrer">
                                +880 1924 572 887
                            </a>
                        </div>
                        
                        <div className={styles.infoBlock}>
                            <h3>✉️ Email inquiries</h3>
                            <a href="mailto:hello@odooupgradeservice.com">
                                hello@odooupgradeservice.com
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className={styles.contactFormWrapper}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    className={styles.formInput} 
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Work Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required 
                                    className={styles.formInput} 
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="system">Current System (Optional)</label>
                                <input 
                                    type="text" 
                                    id="system" 
                                    className={styles.formInput} 
                                    placeholder="e.g. Odoo 14, Oracle EBS, SAP"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Project Details</label>
                                <textarea 
                                    id="message" 
                                    required 
                                    className={styles.formTextarea} 
                                    placeholder="Tell us about your business size, required modules, and timeline..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitBtn}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Sending Request..." : "Request Free Assessment"}
                            </button>

                            {status === "success" && (
                                <div className={`${styles.formStatus} ${styles.statusSuccess}`}>
                                    Thanks! We will be in touch shortly.
                                </div>
                            )}
                            {status === "error" && (
                                <div className={`${styles.formStatus} ${styles.statusError}`}>
                                    Oops! Something went wrong. Try emailing us directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
