import { Img } from "@/utils/types";
import { NO_IMAGE_AVAILABLE } from "@/utils/vars";
import { useState } from "react";

const Img = (image: Img) => {
  const [source, setSource] = useState<string>(image.src);

  const onError = () => {
    setSource(image.fallbackSrc ?? NO_IMAGE_AVAILABLE);
  };

  return (
    <picture className="w-full h-full">
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
    </picture>
  );
};

export default Img;
