import Image from "next/image";

const Photo = ({ src, alt, width, height, style }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={src}
      style={style}
    />
  );
};

export default Photo;
