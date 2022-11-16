import MediaContact from "@/components/shared/MediaContact";
import Navbar from "@/components/shared/Navbar/Navbar";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import Wrapper from "@/components/shared/Wrapper";
import { Component } from "@/utils/types";
import { IBM_Plex_Sans } from "@next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const MainLayout = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`flex flex-col w-screen duration-300 dark:bg-primary bg-light text-primary dark:text-light ${ibmPlexSans.className}`}
      id="layout"
    >
      <Navbar />
      <Sidebar />
      <div className="py-10 md:py-20 grow">
        <Wrapper className={`flex-col ${className}`}>{children}</Wrapper>
      </div>
      <MediaContact />
    </div>
  );
};

export default MainLayout;
