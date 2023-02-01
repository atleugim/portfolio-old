import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import Spotify from "@/components/home/Spotify";
import Welcome from "@/components/home/welcome";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
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
