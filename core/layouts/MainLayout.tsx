import Wrapper from "@/components/shared/Wrapper";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen max-h-screen duration-300 dark:bg-primary-dark bg-light text-primary dark:text-light">
      <div className="grow h-[200vh]">
        <Wrapper>{children}</Wrapper>
      </div>
      {/* <BottomCTA /> */}
    </div>
  );
};

export default MainLayout;
