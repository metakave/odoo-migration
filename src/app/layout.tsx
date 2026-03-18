import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import Script from "next/script";
import WhatsAppWidget from "@/components/UI/WhatsAppWidget";
import "./globals.css";

export const metadata: Metadata = {
    title: "Odoo Upgrade Service - Migration to Latest Odoo Version",
    description:
        "Expert Odoo migration & upgrade services. Migrate from any ERP or older Odoo version with zero data loss. Get your free migration assessment today.",
    keywords: [
        "Odoo migration",
        "Odoo upgrade",
        "Odoo data migration",
        "Odoo 18 migration",
        "ERP migration services",
        "Odoo migration consultant",
        "SAP to Odoo migration",
    ],
    openGraph: {
        title: "Odoo Upgrade Service - Migration to Latest Odoo Version",
        description:
            "Expert Odoo migration & upgrade services. Migrate from any ERP or older Odoo version with zero data loss.",
        type: "website",
        locale: "en_US",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark">
            <body>
                <Header />
                {children}
                <WhatsAppWidget />
                <Footer />
                <Script src="/three.r134.min.js" strategy="beforeInteractive" />
                <Script src="/vanta.globe.min.js" strategy="beforeInteractive" />
                <Script src="/vanta.dots.min.js" strategy="beforeInteractive" />
                <Script src="/vanta.clouds2.min.js" strategy="beforeInteractive" />
            </body>
        </html>
    );
}
