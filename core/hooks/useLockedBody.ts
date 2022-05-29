import { useEffect, useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayout";

type ReturnType = {
  isLocked: Boolean;
  setLocked: (locked: boolean) => void;
};

function useLockedBody(initialLocked = false): ReturnType {
  const [locked, setLocked] = useState(initialLocked);

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    const root = document.getElementById("layout");
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return { isLocked: locked, setLocked };
}

export default useLockedBody;
