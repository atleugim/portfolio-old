import { Component } from "@/utils/types";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import SidebarProvider from "./sidebar";

const MainProvider = ({ children }: Component) => {
  return (
    <>
      <Head>
        <title>Miguel Vega - Software Developer</title>
      </Head>
      <Toaster />
      <SidebarProvider>{children}</SidebarProvider>
    </>
  );
};

export default MainProvider;
