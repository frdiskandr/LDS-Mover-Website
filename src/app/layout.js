import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "LDS Movers Indonesia",
    description:
        "LDS Movers Indonesia adalah perusahaan jasa logistik dan relokasi terpercaya. Kami melayani pindahan rumah, kantor, dan pengiriman barang dengan aman dan tepat waktu.",
    keywords:
        "LDS Movers, moving service, jasa pindahan, logistic Indonesia, jasa relokasi",
    openGraph: {
        title: "LDS Movers Indonesia | Professional Moving & Logistics Services",
        description:
            "LDS Movers adalah penyedia layanan pindahan rumah, kantor, dan logistik dengan pengalaman bertahun-tahun.",
        type: "website",
        images: [
            {
                url: "/company.webp",
                width: 1200,
                height: 630,
                alt: "LDS Movers Indonesia",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Suspense fallback={<Loading />}>
                    <Navbar />
                    {children}
                    <Footer />
                </Suspense>
            </body>
        </html>
    );
}
