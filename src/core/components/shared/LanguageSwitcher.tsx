import { useCookie } from "atleugim-hooks";
import { useSyncLanguage } from "ni18n";
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useSyncLanguage();
  const { value, updateCookie } = useCookie("lang", "en");

  const handleLanguageChange = () => {
    updateCookie(value === "en" ? "es" : "en");
  };

  useEffect(() => {
    i18n.changeLanguage(value);
  }, [i18n, value]);

  return (
    <button
      onClick={handleLanguageChange}
      className="fixed bottom-4 right-4 aspect-square h-12 w-12 transform animate-fadeIn rounded-full bg-primary bg-opacity-10 font-mono text-xl font-bold uppercase backdrop-blur-md duration-300 dark:bg-light dark:bg-opacity-10"
    >
      {value}
    </button>
  );
};

export default LanguageSwitcher;
