import Carousel from "/components/Carousel";
import styles from "/styles/About.module.css";

function About() {
  return (
    <div>
      <Carousel />
      <div className={styles.about}>
        <div className={styles.heading}>
          <h2>Our Story</h2>
        </div>
        <div className={styles.subHeading}>
          <h3>
            The century of exceptional food and hospitality that turned a café
            into a Ghanaian landmark.
          </h3>
        </div>
        <div className={styles.content}>
          <p>
            When owner Abel Giandolini and Maître dHôtel Mario Gallati joined
            forces in 1917, their modest café soon made friends and gained
            favour amongst the theatre community, and The Ivy was born.
            Subsequent redevelopments over the years have evolved the dining
            room as we know it today, a space closely resembling the grand
            restaurant created by the original duo back in their heyday.
          </p>
          <p>
            When owner Abel Giandolini and Maître dHôtel Mario Gallati joined
            forces in 1917, their modest café soon made friends and gained
            favour amongst the theatre community, and The Ivy was born.
            Subsequent redevelopments over the years have evolved the dining
            room as we know it today, a space closely resembling the grand
            restaurant created by the original duo back in their heyday.
          </p>
          <p>
            When owner Abel Giandolini and Maître dHôtel Mario Gallati joined
            forces in 1917, their modest café soon made friends and gained
            favour amongst the theatre community, and The Ivy was born.
            Subsequent redevelopments over the years have evolved the dining
            room as we know it today, a space closely resembling the grand
            restaurant created by the original duo back in their heyday.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
