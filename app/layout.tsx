import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Bufu Travelers",
  description: "Professional travel and transport services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
