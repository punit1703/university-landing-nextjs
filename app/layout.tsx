import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaVarsity — Shaping Future Innovators & Leaders",
  description:
    "NexaVarsity is a premier modern university offering industry-oriented programs in Engineering, AI & Data Science, Management, Design, Commerce, and Law.",
  keywords: ["university", "education", "engineering", "AI", "data science", "management"],
  openGraph: {
    title: "NexaVarsity — Shaping Future Innovators & Leaders",
    description: "A premier modern university offering industry-oriented programs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
