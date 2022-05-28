import Projects from "@/components/home/projects/Projects";
import Welcome from "@/components/home/Welcome";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout className="space-y-20 md:space-y-44">
      <Welcome />
      <Projects />
    </MainLayout>
  );
};

export default Home;
