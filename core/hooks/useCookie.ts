import Cookies from "js-cookie";
import { useCallback, useState } from "react";

const useCookie = (
  name: string,
  defaultValue: string | undefined = undefined
) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);

    if (cookie === "undefined" || cookie?.trim() === "") {
      return undefined;
    }

    if (cookie) return cookie;
    if (defaultValue) {
      Cookies.set(name, defaultValue);
    }
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: string, options = {}) => {
      Cookies.set(name, newValue, { ...options });
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return { value, updateCookie, deleteCookie };
};

export default useCookie;
