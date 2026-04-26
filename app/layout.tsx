import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: 'מסע לאיטליה',
  description: 'תוכנית נסיעה — אגם גארדה והדולומיטים',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full antialiased`}>
      <body className="h-full font-[family-name:var(--font-heebo)]">{children}</body>
    </html>
  );
}
