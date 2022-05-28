import { Component } from "@/utils/types";

const Wrapper = ({ children, className = "" }: Component) => {
  return (
    <div className="flex justify-center w-full h-full">
      <div
        className={`flex w-full max-w-screen-sm lg:max-w-screen-md py-4 pl-14 pr-4 md:p-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
