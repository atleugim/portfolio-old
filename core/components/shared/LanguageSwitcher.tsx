import useCookie from "@/hooks/useCookie";
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
      className="fixed w-12 h-12 text-xl font-bold uppercase duration-300 transform rounded-full aspect-square dark:bg-light dark:bg-opacity-10 bg-primary bg-opacity-10 backdrop-blur-md bottom-4 right-4 animate-fadeIn"
    >
      {value}
    </button>
  );
};

export default LanguageSwitcher;
