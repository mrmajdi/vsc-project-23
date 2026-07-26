import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'صفحه شمارشگر',
  description: 'یک صفحه ساده شمارشگر counter به زبان فارسی',
  // Optional: add more metadata like authors, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}