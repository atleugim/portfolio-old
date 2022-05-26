import { NO_IMAGE_AVAILABLE } from "@/utils/vars";
import { useState } from "react";

interface Props {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  decoding?: "async" | "auto" | "sync";
}

const Img = ({
  src,
  fallbackSrc = NO_IMAGE_AVAILABLE,
  alt = "",
  className = "",
  width = "100%",
  height = "100%",
  decoding = "async",
}: Props) => {
  const [source, setSource] = useState<string>(src);

  const onError = () => {
    setSource(fallbackSrc);
  };

  return (
    <img
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding={decoding}
      src={source || fallbackSrc}
      onError={onError}
      alt={alt}
    />
  );
};

export default Img;