import { IBM_Plex_Sans } from "@next/font/google";
import dynamic from "next/dynamic";
import MediaContact from "../components/shared/MediaContact";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import Wrapper from "../components/shared/Wrapper";
import { Component } from "../utils/types";

const LanguageSwitcher = dynamic(
  () => import("@/core/components/shared/LanguageSwitcher"),
  {
    ssr: false,
  }
);

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const MainLayout = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`flex w-screen flex-col bg-light text-primary duration-300 dark:bg-primary dark:text-light ${ibmPlexSans.className}`}
      id="layout"
    >
      <Navbar />
      <Sidebar />
      <div className="grow overflow-x-hidden py-10 md:py-20">
        <Wrapper className={`flex-col ${className}`}>{children}</Wrapper>
      </div>
      <MediaContact />
      <LanguageSwitcher />
    </div>
  );
};

export default MainLayout;
