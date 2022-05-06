import react, { useState } from "react";
import Divider from "components/Divider";
import Image from "next/image";
import styles from "/styles/Menu.module.css";
import { menu } from "utilities/data";
import SecondaryButton from "components/SecondaryButton";

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("breakfast");

  var menuItems = menu.filter((item) => {
    return item.type === currentMenu;
  });

  const handleMenuChange = () => {
    return;
  };

  // console.log(getMenu());

  return (
    <div className={styles.menu}>
      {/* <div className={styles.menuBackground}></div>
      <div className={styles.overlay}></div> */}
      {/* <div className={styles.content}> */}
      <div className={styles.headings}>
        <SecondaryButton label="Breakfast" onClick={handleMenuChange} />
        <SecondaryButton
          label="Lunch"
          onClick={() => setCurrentMenu("lunch")}
        />
        <SecondaryButton label="Dinner" onClick={handleMenuChange} />
      </div>
      <Divider width="80%" style={{ borderTop: "2px solid black" }} />
      <div className={styles.menuItems}>
        {menu
          .filter((item) => item.type === currentMenu)
          .map((menuItem) => (
            <div className={styles.menuItem} key={menuItem.name}>
              <Image
                src={`/img/${menuItem.image}`}
                width={200}
                height={200}
                objectFit="cover"
                alt=""
                style={{
                  borderRadius: 8,
                }}
              />
              <div>
                <h4>{menuItem.name}</h4>
                <Divider
                  width="100%"
                  align="left"
                  style={{ borderTop: "1px solid black" }}
                />
                <p>{menuItem.description}</p>
                <p>{menuItem.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>

    // </div>
  );
};

export default Menu;

// Menu.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };

{
  /* <div className={styles.breakfast}>
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
      </div> */
}
