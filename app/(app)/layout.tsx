import { Jost } from 'next/font/google';

import '../globals.css';

import Header from '@/components/common/header/header.component';
import CTA from '@/components/common/cta/cta.component';
import Footer from '@/components/common/footer/footer.component';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: 'Designo',
  description: 'Award-winning custom designs and digital branding solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${jost.className} min-h-full`} id="root">
        <Header />
        {children}
        <CTA />
        <Footer />
        <div id="portal" />
      </body>
    </html>
  );
}
