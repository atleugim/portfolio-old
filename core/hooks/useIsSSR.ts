import { useEffect, useState } from "react";

const useIsSSR = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR;
};

export default useIsSSR;