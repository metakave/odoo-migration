"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.headerInner}>
                <Link href="/" className={styles.headerLogo}>
                    Odoo <span className={styles.headerLogoAccent}>Upgrade Service</span>
                </Link>

                <button
                    className={styles.menuToggle}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                    <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                    <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
                </button>

                <nav className={`${styles.headerNav} ${isMenuOpen ? styles.headerNavOpen : ""}`}>
                    <Link href="/#services" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/#process" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Process</Link>
                    <Link href="/insights" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Insights</Link>
                    <Link href="/contact" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link href="/faq" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                    <div className={styles.headerActions}>
                        <ThemeSwitcher />
                        <Link href="/#contact" className={styles.headerCta} onClick={() => setIsMenuOpen(false)}>Free Assessment</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
