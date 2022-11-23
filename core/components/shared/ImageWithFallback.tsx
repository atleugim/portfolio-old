import { ImageFallback } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageWithFallback = ({ alt, src, ...props }: ImageFallback) => {
  const fallbackImage = "/assets/images/not_found.webp";
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={(err) => setError(!!err)}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
