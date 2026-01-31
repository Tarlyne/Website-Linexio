
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Sections/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Linexio - Der digitale Lehrer-Assistent für das iPad',
    description: 'Linexio organisiert Ihren Schulalltag intuitiv, effizient und 100% offline. Notenverwaltung, Sitzpläne und Checklisten – speziell für Lehrkräfte entwickelt.',
    keywords: 'Lehrer App, iPad Unterricht, Notenverwaltung, Sitzplan App, DSGVO Lehrer App',
    authors: [{ name: 'Torben Böhm' }],
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: 'https://tarlyne.github.io/Website-Linexio/',
        title: 'Linexio - Ihr Unterricht. Ihre Daten. Ihr System.',
        description: 'Die iPad-App für Lehrer: Noten, Sitzpläne und Checklisten – 100% offline und datenschutzkonform.',
        images: [
            {
                url: 'https://raw.githubusercontent.com/tarlyne/linexio-assets/main/logo-preview.webp',
                width: 1200,
                height: 630,
                alt: 'Linexio Preview',
            },
        ],
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className={`${inter.variable}`}>
            <body className="bg-dark-900 text-slate-100 min-h-screen overflow-x-hidden selection:bg-brand-500/30 selection:text-white relative font-sans">
                <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-brand-900/20 blur-[120px] rounded-full opacity-40" />
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-600/10 blur-[150px] rounded-full opacity-30" />
                    <div className="absolute top-[600px] left-1/4 w-[500px] h-[500px] bg-brand-800/10 blur-[120px] rounded-full opacity-20" />
                </div>

                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cb584e6858724aeba526f470b339c168"}'></script>
            </body>
        </html>
    );
}
