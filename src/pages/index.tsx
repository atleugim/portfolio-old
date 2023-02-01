import Contact from "@/core/components/home/contact";
import Projects from "@/core/components/home/projects";
import Spotify from "@/core/components/home/Spotify";
import Welcome from "@/core/components/home/welcome";
import MainLayout from "@/core/layouts/MainLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout className="space-y-20 md:space-y-20">
      <Welcome />
      <Projects />
      <Contact />
      <Spotify />
    </MainLayout>
  );
};

export default Home;
