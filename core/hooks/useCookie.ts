import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

const useCookie = (name: string, defaultValue?: string | undefined) => {
  const [value, setValue] = useState<string | undefined>(() => {
    const cookie = Cookies.get(name)?.trim();

    if (!cookie) {
      return undefined;
    }

    return cookie;
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

  useEffect(() => {
    if (defaultValue) {
      updateCookie(defaultValue);
    }
  }, [defaultValue, updateCookie]);

  return { value, updateCookie, deleteCookie };
};

export default useCookie;
