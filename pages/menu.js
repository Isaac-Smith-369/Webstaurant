import Divider from "components/Divider";
import styles from "/styles/Menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.breakfast}>
        <h3>Breakfast</h3>
        <Divider width={150} />
        <div className={styles.menuItem}>
          <p>Avocado Toast</p>
          <p>15₵</p>
          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>Breakfast Sandwitch</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>Chicken And Waffles</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>French Toast</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>Sausage</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>Cereal</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>English Toast</p>
          <p>15₵</p>

          <p>******</p>
        </div>
        <div className={styles.menuItem}>
          <p>French Fries</p>
          <p>15₵</p>

          <p>******</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
