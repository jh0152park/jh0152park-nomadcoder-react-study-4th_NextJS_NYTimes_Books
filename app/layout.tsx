import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Next Bookstore",
        default: "Next Bookstore",
    },
    description: "Entire Best Sellers in the world 🌏",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={shadows.className}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
