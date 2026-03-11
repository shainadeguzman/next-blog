import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Blog", // reused by other pages when they provide their own title
    default: "Next Blog", // used when a page does not define a title
  },
  description:
    "A clean and modern blog about Next.js, React, and frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-gray-50 text-gray-800`}
      >
        <NextTopLoader color="#0f172b" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
