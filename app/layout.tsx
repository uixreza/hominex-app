import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Slide, ToastContainer } from "react-toastify";
import NewsBar from "@/components/UI/NewsBar";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: "Hominex | هومینکس",
  description: "خونه رویاییتو با یک تصمیم هوشمند انتخاب کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`w-full overflow-y-scroll overflow-x-hidden box-border flex items-center flex-col pt-30 px-5 sm:px-0`}>
        <NewsBar />
        {/* header */}
        <Header />
        {/* body */}
        <div className="container flex flex-col items-center pt-10">
          <div className=" max-w-[1350px] w-full">
            {children}
            {/* <Waitlist /> */}
          </div>
        </div>
        {/* footer */}
        <Footer />
        <Socials />
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
