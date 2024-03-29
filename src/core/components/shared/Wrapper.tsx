import { Component } from "@/core/utils/types";

const Wrapper = ({ children, className = "" }: Component) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div
        className={`flex w-full max-w-screen-sm py-4 pl-14 pr-4 md:p-4 lg:max-w-screen-md ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
