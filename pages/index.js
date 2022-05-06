import Divider from "components/Divider";
import styles from "/styles/Home.module.css";
import Image from "next/image";
import PrimaryButton from "components/PrimaryButton";
import Carousel from "components/Carousel";
import Hours from "components/Hours";
import Link from "next/link";
import { links } from "utilities/links";

function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <Hours />
      <div className={styles.introContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <Image
              src="/img/breakfast.jpeg"
              alt="image"
              width={500}
              height={550}
              quality={100}
              placeholder="blur"
              blurDataURL="/img/breakfast.jpeg"
              objectFit="contain"
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
                Webstaurant is is built on family love and cooperation. The
                restaurant is a real gourmets paradise. having gained invaluable
                experience abroad, returned home to Slovenia after 5 years.
                Webstaurant with its chef was the first Ghanaian restaurant to
                make the Worlds 50 Best Restaurants.
              </p>
              <p>
                Webstaurant is is built on family love and cooperation. The
                restaurant is a real gourmets paradise. having gained invaluable
                experience abroad, returned home to Slovenia after 5 years.
                Webstaurant with its chef was the first Ghanaian restaurant to
                make the Worlds 50 Best Restaurants.
              </p>
              <p>
                Webstaurant is is built on family love and cooperation. The
                restaurant is a real gourmets paradise. having gained invaluable
                experience abroad, returned home to Slovenia after 5 years.
                Webstaurant with its chef was the first Ghanaian restaurant to
                make the Worlds 50 Best Restaurants.
              </p>
              <Link href={links.about}>
                <a>
                  <PrimaryButton label="READ MORE" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
