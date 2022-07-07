import react, { useEffect, useState } from "react";
import Divider from "components/Divider";
import Image from "next/image";
import styles from "/styles/Menu.module.css";
import { menuTypes } from "utilities/data";
import SecondaryButton from "components/SecondaryButton";

const Menu = (props) => {
  const [menu, setMenu] = useState([]);
  // const [contacts, setContacts] = useState(contactList);
  const [filteredMenu, setFilteredMenu] = useState([]);

  console.log("Contacts: ", props);

  const getMenu = async () => {
    const result = await fetch("/api/menu");
    const data = await result.json();
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
    return () => {};
  }, []);

  useEffect(() => {
    handleMenuChange(menuTypes.BREAKFAST);
    return () => {};
  }, [menu]);

  const handleMenuChange = (filter) => {
    setFilteredMenu([]);
    const currMenu = menu;
    switch (filter) {
      case menuTypes.BREAKFASNT:
        currMenu.forEach((menuItem) => {
          if (menuItem.type === menuTypes.BREAKFAST) {
            setFilteredMenu((prevMenu) => [...prevMenu, menuItem]);
          }
        });
        break;
      case menuTypes.LUNCH:
        currMenu.forEach((menuItem) => {
          if (menuItem.type === menuTypes.LUNCH) {
            setFilteredMenu((prevMenu) => [...prevMenu, menuItem]);
          }
        });
        break;
      case menuTypes.DINNER:
        currMenu.forEach((menuItem) => {
          if (menuItem.type === menuTypes.DINNER) {
            setFilteredMenu((prevMenu) => [...prevMenu, menuItem]);
          }
        });
        break;
      default:
        currMenu.forEach((menuItem) => {
          if (menuItem.type === menuTypes.BREAKFAST) {
            setFilteredMenu((prevMenu) => [...prevMenu, menuItem]);
          }
        });
        break;
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.headings}>
        {Object.values(menuTypes).map((menuType) => (
          <SecondaryButton
            key={menuType}
            label={menuType}
            onClick={() => handleMenuChange(menuType)}
          />
        ))}
      </div>
      <Divider width="80%" style={{ borderTop: "2px solid black" }} />
      <div className={styles.menuItems}>
        {filteredMenu.map((menuItem) => (
          <div className={styles.menuItem} key={Math.random()}>
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
  );
};

export default Menu;
