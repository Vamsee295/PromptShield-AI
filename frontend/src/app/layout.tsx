import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PromptShield - Secure Your AI Prompts",
  description: "Secure your prompts and mask sensitive PII before LLM processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
