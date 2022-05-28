import MediaContact from "@/components/shared/MediaContact";
import Navbar from "@/components/shared/Navbar/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import { Component } from "@/utils/types";
import React from "react";

const MainLayout = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`flex flex-col w-screen h-screen max-h-screen duration-300 dark:bg-primary bg-light text-primary dark:text-light ${className}`}
    >
      <Navbar />
      <div className="py-20 grow">
        <Wrapper className="flex-col">{children}</Wrapper>
      </div>
      <MediaContact />
    </div>
  );
};

export default MainLayout;
