import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import '@/styles/brand-colors.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "C & LI Abogados y Asesores - International Law Firm",
    template: "%s | C & LI Abogados"
  },
  description: "International law firm specialized in civil, criminal and real estate law with almost 20 years of experience. Offices in Spain and China.",
  keywords: ["lawyers", "banking law", "accidents", "claims", "Spain", "China", "international"],
  authors: [{ name: "C & LI Abogados y Asesores" }],
  creator: "C & LI Abogados y Asesores",
  publisher: "C & LI Abogados y Asesores",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-white`} suppressHydrationWarning>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}