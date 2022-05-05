import Image from "next/image";
import react, { useState, useEffect, useRef } from "react";
import styles from "/styles/Carousel.module.css";

const images = ["pizza1", "pizza2", "pasta1", "pasta2"];
const delay = 5000;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {images.map((imgPath, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={`/img/${imgPath}.jpg`}
              width={2400}
              height={1000}
              quality={100}
              layout="responsive"
              alt="slideshow"
            ></Image>
          </div>
        ))}
      </div>
      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div
            className={styles.slideshowDot}
            key={idx}
            style={index == idx ? { backgroundColor: "black" } : {}}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
