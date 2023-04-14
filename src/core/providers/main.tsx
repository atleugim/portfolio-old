import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { Toaster } from "sonner";
import { Component } from "../utils/types";
import SidebarProvider from "./sidebar";

const MainProvider = ({ children }: Component) => {
  return (
    <>
      <Head>
        <title>Miguel Vega - Software Developer</title>
      </Head>
      <Analytics />
      <Toaster richColors position="top-center" />
      <SidebarProvider>{children}</SidebarProvider>
    </>
  );
};

export default MainProvider;
