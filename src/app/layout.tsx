import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import WhatsAppWidget from "@/components/UI/WhatsAppWidget";
import "./globals.css";

export const metadata: Metadata = {
    title: "Odoo Upgrade Service — Upgrade to Odoo 18 Seamlessly",
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
        title: "Odoo Upgrade Service — Upgrade to Odoo 18 Seamlessly",
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
        <html lang="en">
            <body>
                <Header />
                {children}
                <WhatsAppWidget />
                <Footer />
            </body>
        </html>
    );
}
