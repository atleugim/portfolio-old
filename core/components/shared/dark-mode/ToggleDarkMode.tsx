import useDarkMode from "@/hooks/useDarkMode";
import CurrentModeIcon from "./CurrentModeIcon";

const ToggleDarkMode = () => {
  const { setTheme, colorTheme } = useDarkMode();

  return (
    <button
      className="p-2 duration-300 transform rounded-full aspect-square dark:bg-light dark:bg-opacity-10 bg-primary bg-opacity-10 hover:rotate-90 backdrop-blur-md"
      onClick={() => setTheme(colorTheme)}
      aria-label="Toggle dark mode"
    >
      <CurrentModeIcon isDarkMode={colorTheme == "dark"} />
    </button>
  );
};

export default ToggleDarkMode;
