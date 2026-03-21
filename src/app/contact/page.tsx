"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        const formElement = e.target as HTMLFormElement;
        
        try {
            const body = {
                formType: 'contact',
                name: (formElement.querySelector('#name') as HTMLInputElement).value,
                email: (formElement.querySelector('#email') as HTMLInputElement).value,
                currentVersion: (formElement.querySelector('#currentVersion') as HTMLSelectElement).value,
                targetVersion: (formElement.querySelector('#targetVersion') as HTMLSelectElement).value,
                edition: (formElement.querySelector('#edition') as HTMLSelectElement).value,
                timeline: (formElement.querySelector('#timeline') as HTMLSelectElement).value,
                message: (formElement.querySelector('#message') as HTMLTextAreaElement).value,
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setStatus("success");
                formElement.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
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
                            <a href="mailto:hello@sadiqalam.com">
                                hello@sadiqalam.com
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

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="currentVersion">Current Odoo Version</label>
                                    <select id="currentVersion" className={styles.formSelect} required>
                                        <option value="">Select version...</option>
                                        <option value="18">Odoo 18</option>
                                        <option value="17">Odoo 17</option>
                                        <option value="16">Odoo 16</option>
                                        <option value="15">Odoo 15</option>
                                        <option value="14">Odoo 14</option>
                                        <option value="older">Odoo 13 or older</option>
                                        <option value="other">Other ERP (SAP, Oracle, etc.)</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="targetVersion">Target Version</label>
                                    <select id="targetVersion" className={styles.formSelect} required>
                                        <option value="">Select version...</option>
                                        <option value="19">Odoo 19 (Latest)</option>
                                        <option value="18">Odoo 18</option>
                                        <option value="17">Odoo 17</option>
                                        <option value="undecided">Not sure yet</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="edition">Odoo Edition</label>
                                    <select id="edition" className={styles.formSelect} required>
                                        <option value="">Select edition...</option>
                                        <option value="enterprise">Enterprise Edition</option>
                                        <option value="community">Community Edition</option>
                                        <option value="sh">Odoo.sh</option>
                                        <option value="online">Odoo Online</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="timeline">Required Timeline</label>
                                    <select id="timeline" className={styles.formSelect} required>
                                        <option value="">Select timeline...</option>
                                        <option value="asap">ASAP (Within 1 month)</option>
                                        <option value="1-3months">1-3 Months</option>
                                        <option value="3-6months">3-6 Months</option>
                                        <option value="6months+">6+ Months / Exploring</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Project Details</label>
                                <textarea 
                                    id="message" 
                                    required 
                                    className={styles.formTextarea} 
                                    placeholder="Tell us about your business size, required modules, and any custom developments..."
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
