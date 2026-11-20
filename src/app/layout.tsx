import type { Metadata } from "next";
import { figtree } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { fetchGlobalSettings } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Chain of Mental Health Hospitals & Rehab in India | Sukoon",
  description: "Sukoon is a mental health hospital chain in India, with psychiatric care and rehabs across Delhi, Gurgaon, Bangalore & Hyderabad.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await fetchGlobalSettings();

  return (
    <html lang="en" className={`${figtree.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#111827] font-sans antialiased">
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}

