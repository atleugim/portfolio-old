import { Component } from "@/utils/types";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import SidebarProvider from "./sidebar";

const MainProvider = ({ children }: Component) => {
  return (
    <>
      <Head>
        <title>Miguel Vega - Software Developer</title>
      </Head>
      <Analytics />
      <Toaster containerClassName="text-sm font-medium" />
      <SidebarProvider>{children}</SidebarProvider>
    </>
  );
};

export default MainProvider;