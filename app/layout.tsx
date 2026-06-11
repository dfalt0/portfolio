import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-apple-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Akinshev | Portfolio",
  description: "Mark's portfolio showcasing creative development work",
  icons: {
    icon: "/profile.JPG",
    shortcut: "/profile.JPG",
    apple: "/profile.JPG",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const themeScript = `
(function() {
  try {
    var root = document.documentElement;
    var t = localStorage.getItem('portfolio-theme');
    var cs = localStorage.getItem('portfolio-color-scheme');
    if (t === 'classic') {
      root.setAttribute('data-theme', 'classic');
      root.classList.add('dark');
      root.removeAttribute('data-color-scheme');
    } else {
      root.setAttribute('data-theme', 'apple');
      var dark = cs === 'dark';
      root.setAttribute('data-color-scheme', dark ? 'dark' : 'light');
      if (dark) root.classList.add('dark');
      else root.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
