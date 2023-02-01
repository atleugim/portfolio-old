import useDarkMode from "@/core/hooks/useDarkMode";
import CurrentModeIcon from "./CurrentModeIcon";

const ToggleDarkMode = () => {
  const { setTheme, colorTheme } = useDarkMode();

  return (
    <button
      className="aspect-square transform rounded-full bg-primary bg-opacity-10 p-2 backdrop-blur-md duration-300 hover:rotate-90 dark:bg-light dark:bg-opacity-10"
      onClick={() => setTheme(colorTheme)}
      aria-label="Toggle dark mode"
    >
      <CurrentModeIcon isDarkMode={colorTheme == "dark"} />
    </button>
  );
};

export default ToggleDarkMode;
