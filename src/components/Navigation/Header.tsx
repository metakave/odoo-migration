"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isDarkHeroPage = pathname === '/' || 
                           pathname === '/contact' || 
                           (pathname.startsWith('/insights/') && pathname !== '/insights') || 
                           (pathname.startsWith('/case-studies/') && pathname !== '/case-studies');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Trigger initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const headerClass = `${styles.header} ${isScrolled || !isDarkHeroPage ? styles.headerScrolled : ""}`;

    return (
        <header className={headerClass}>
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
                        <Link href="/contact" className={styles.headerCta} onClick={() => setIsMenuOpen(false)}>Free Assessment</Link>
                    </div>
                </nav>
                <div className={styles.headerDesktopActions}>
                    <ThemeSwitcher />
                    <Link href="/contact" className={styles.headerCta}>Free Assessment</Link>
                </div>
            </div>
        </header>
    );
}
