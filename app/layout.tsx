import './globals.css';
import { Jost } from 'next/font/google';

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
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
