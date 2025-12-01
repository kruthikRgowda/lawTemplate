import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lawyera.example"),
  title: {
    default: "Shwetha Ravishankar | SRA Legal Firm",
    template: "%s | Lawyer Legal",
  },
  description:
    "Premium legal services with a boutique feel. Strategic counsel across corporate, civil, and criminal matters.",
  openGraph: {
    title: "Shwetha Ravishankar | SRA Legal Firm",
    description:
      "Premium legal services with a boutique feel. Strategic counsel across corporate, civil, and criminal matters.",
    url: "https://lawyera.example",
    siteName: "Lawyera Legal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawyer | Boutique Legal Firm",
    description:
      "Premium legal services with a boutique feel. Strategic counsel across corporate, civil, and criminal matters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${heading.variable} ${body.variable} font-body antialiased bg-[var(--sand)] text-[var(--text)]`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
