import Image from "next/image";
import { useEffect, useState } from "react";

const ImageWithFallback = ({ alt, src, ...props }) => {
  const fallbackImage = "/assets/images/not_found.webp";
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
