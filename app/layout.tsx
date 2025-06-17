import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Slide, ToastContainer } from "react-toastify";
import NewsBar from "@/components/UI/NewsBar";
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
      <body
        className={`w-full overflow-scroll box-border flex items-center flex-col pt-30`}>
        <NewsBar />
        <Header />
        <div className="container flex flex-col items-center pt-10">
          <div className="content max-w-4xl w-full">{children}</div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </body>
    </html>
  );
}
