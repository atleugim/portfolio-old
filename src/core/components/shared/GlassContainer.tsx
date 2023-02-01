import { Component } from "@/core/utils/types";

const GlassContainer = ({ children, className = "" }: Component) => {
  return (
    <div
      className={`w-full bg-opacity-75 backdrop-blur-md duration-300 dark:bg-opacity-75 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
