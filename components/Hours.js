import Divider from "./Divider";
import styles from "/styles/Hours.module.css";

const Hours = () => {
  return (
    <>
      <Divider width="100%" style={{ borderTop: "1px solid gray" }} />
      <div className={styles.workinghours}>
        <div className={styles.hours}>
          <h3>Monday - Friday</h3>
          <p>Open all day</p>
          <p>12pm - 11pm</p>
        </div>
        <div className={styles.hours}>
          <h3>Saturday</h3>
          <p>Open all day</p>
          <p>11:30am - 11pm</p>
        </div>
        <div className={styles.hours}>
          <h3>Sunday</h3>
          <p>Open all day</p>
          <p>11:30am - 10:30pm</p>
        </div>
      </div>
      <Divider width="100%" style={{ borderTop: "1px solid gray" }} />
    </>
  );
};

export default Hours;
