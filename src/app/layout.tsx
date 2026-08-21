import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "himang-dg · GitHub Profile",
  description:
    "Explore himang-dg's open source projects, repositories, and contributions — Developer Portfolio powered by GitHub API.",
  keywords: [
    "GitHub",
    "himang-dg",
    "developer",
    "portfolio",
    "repositories",
    "open source",
  ],
  openGraph: {
    title: "himang-dg · GitHub Profile",
    description:
      "Explore himang-dg's open source projects, repositories, and contributions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
