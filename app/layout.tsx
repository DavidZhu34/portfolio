import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David | Personal Portfolio",
  description: "David is a software developer from UC Berkeley.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <meta name="trustpilot-one-time-domain-verification-id" content="9a0939b2-3dd2-45b9-ab8a-7d4112d9fae0"/>
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-white text-gray-800 text-opacity-90`}
      >
        {/* <div className="bg-[#296263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#176394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}

          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
