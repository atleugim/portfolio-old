import useDarkMode from "use-dark-mode";
import CurrentModeIcon from "./CurrentModeIcon";

const ToggleDarkMode = ({ initialState = true }) => {
  const { toggle, value: isDark } = useDarkMode(initialState, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  return (
    <button
      className="p-2 duration-300 transform rounded-full aspect-square dark:bg-light dark:bg-opacity-10 bg-primary bg-opacity-10 hover:rotate-90 backdrop-blur-md"
      onClick={toggle}
      aria-label="Toggle dark mode"
    >
      <CurrentModeIcon isDarkMode={isDark} />
    </button>
  );
};

export default ToggleDarkMode;
