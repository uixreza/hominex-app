import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Hominex",
  description: "find your dream house with just a click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`w-full h-full box-border flex items-center flex-col`}>
        <Header />
        <div className="container flex flex-col items-center pt-10">
          <div className="content max-w-4xl w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
