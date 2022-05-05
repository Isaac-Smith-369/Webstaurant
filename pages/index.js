import Divider from "components/Divider";
import styles from "/styles/Home.module.css";
import Image from "next/image";
import PrimaryButton from "components/PrimaryButton";
import Carousel from "components/Carousel";
import Hours from "components/Hours";

function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <Hours />
      <div className={styles.introContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <Image
              src="/img/pasta1.jpg"
              alt="image"
              width={500}
              height={550}
              quality={100}
              placeholder="blur"
              blurDataURL="/img/pasta1.jpg"
            />
          </div>
          <div className={styles.content}>
            <h3>Webstaurant</h3>
            <Divider
              width={140}
              align="right"
              style={{ borderTop: "3px solid black" }}
            />
            <div className={styles.paragraphs}>
              <p>
                JB Restaurant is the story of the Bratovž family and is built on
                family love and cooperation. The restaurant is a real gourmets
                paradise. Its beginnings can be traced back to the year 1992
                when Janez Bratovž, having gained invaluable experience abroad,
                returned home to Slovenia after 5 years. JB Restaurant with its
                chef Janez Bratovž was the first Slovenian restaurant to make
                the Worlds 50 Best Restaurants.
              </p>
              <p>
                JB Restaurant is the story of the Bratovž family and is built on
                family love and cooperation. The restaurant is a real gourmets
                paradise. Its beginnings can be traced back to the year 1992
                when Janez Bratovž, having gained invaluable experience abroad,
                returned home to Slovenia after 5 years. JB Restaurant with its
                chef Janez Bratovž was the first Slovenian restaurant to make
                the Worlds 50 Best Restaurants.
              </p>
              <p>
                JB Restaurant is the story of the Bratovž family and is built on
                family love and cooperation. The restaurant is a real gourmets
                paradise. Its beginnings can be traced back to the year 1992
                when Janez Bratovž, having gained invaluable experience abroad,
                returned home to Slovenia after 5 years. JB Restaurant with its
                chef Janez Bratovž was the first Slovenian restaurant to make
                the Worlds 50 Best Restaurants.
              </p>
              <PrimaryButton label="READ MORE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
