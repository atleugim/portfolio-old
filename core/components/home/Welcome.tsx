import {
  DART_URL,
  FLUTTER_URL,
  JAVASCRIPT_URL,
  NEXT_JS_URL,
  REACT_URL,
  TAILWIND_URL,
} from "@/utils/vars";
import ExternalLink from "../shared/ExternalLink";
import ImageWithFallback from "../shared/ImageWithFallback";

const Welcome = () => {
  return (
    <section className="flex flex-col w-full space-y-10 md:flex-row md:space-x-5 md:space-y-0">
      <div className="flex flex-col items-start justify-start w-full col-span-3 space-y-4 font-light md:w-8/12">
        <div className="flex flex-col items-start">
          <p className="flex space-x-1 text-lg font-medium">
            <span className="text-secondary">Hi,</span>
            <span>my name is</span>
          </p>
          <h1 className="text-6xl font-bold">Miguel Vega.</h1>
        </div>
        <p>
          I&apos;m a software developer based in Colombia, specialized in web
          and mobile development. Self-taught developer building personal
          digital experiences.
        </p>
        <p>
          +2 years of experience in software development, focused on{" "}
          <b className="font-medium">web</b> with technologies like{" "}
          <ExternalLink href={JAVASCRIPT_URL} name="Javascript" />,{" "}
          <ExternalLink href={REACT_URL} name="React.js" />,{" "}
          <ExternalLink href={NEXT_JS_URL} name="Next.js" />,{" "}
          <ExternalLink href={TAILWIND_URL} name="TailwindCSS" />; and{" "}
          <b className="font-medium">mobile</b> with{" "}
          <ExternalLink href={FLUTTER_URL} name="Flutter" /> and{" "}
          <ExternalLink href={DART_URL} name="Dart" />.
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-full col-span-2 max-h-80 md:w-4/12">
        <ImageWithFallback
          width={300}
          height={300}
          priority
          src="/assets/images/me.webp"
          alt="Miguel Vega"
          className="animate-fadeIn"
        />
      </div>
    </section>
  );
};

export default Welcome;
