"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        handleScroll();
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

                <nav className={`${styles.headerNav} ${isMenuOpen ? styles.headerNavOpen : ""}`}>
                    <Link href="/#services" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/#process" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Process</Link>
                    <Link href="/insights" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Insights</Link>
                    <a href="https://www.odooupgradeservice.com/case-studies" className={styles.headerLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
                    <Link href="/contact" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link href="/faq" className={styles.headerLink} onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                </nav>

                <div className={styles.headerRightArea}>
                    <div className={styles.headerDesktopActions}>
                        <Link href="/contact" className={styles.headerCta}>Free Assessment</Link>
                    </div>

                    <button
                        className={styles.menuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                        <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
