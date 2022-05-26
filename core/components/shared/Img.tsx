import { Component } from "@/utils/types";
import { NO_IMAGE_AVAILABLE } from "@/utils/vars";
import { useState } from "react";

interface Image extends Component {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
}

const Img = (image: Image) => {
  const [source, setSource] = useState<string>(image.src);

  const onError = () => {
    setSource(image.fallbackSrc ?? NO_IMAGE_AVAILABLE);
  };

  return (
    <img
      width={image.width}
      height={image.height}
      className={image.className}
      loading={image.loading ?? "lazy"}
      decoding={image.decoding ?? "async"}
      src={source || image.fallbackSrc}
      onError={onError}
      alt={image.alt}
    />
  );
};

export default Img;