import Img from "@/components/shared/Img";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <section className="grid w-full grid-cols-5 gap-10">
        <div className="flex flex-col items-start justify-start col-span-3 space-y-4">
          <p className="flex space-x-1 font-medium">
            <span className="text-secondary">Hi,</span>
            <span>my name is</span>
          </p>
          <h1 className="text-6xl font-bold">Miguel Vega.</h1>
          <p>
            I&apos;m a software engineer based in Colombia, specialized in web
            and mobile development. Self-taught developer building personal
            digital experiences.
          </p>
          <p>
            +2 years of experience in software development, focused on web with
            technologies like JavaScript, React.js, Next.js, TailwindCSS, and
            Bootstrap; and mobile with Flutter and Dart.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <picture className="w-full">
            <Img
              src="/assets/images/me.png"
              alt="Miguel Vega"
              className="object-contain rounded-full"
            />
          </picture>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
