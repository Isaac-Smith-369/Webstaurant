import React from "react";
import Link from "next/link";
import Divider from "components/Divider";
import styles from "/styles/Nav.module.css";
import { links } from "utilities/links";
import PrimaryButton from "components/PrimaryButton";

const Nav = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navbarContainer}>
        <Divider width="100%" style={{ borderTop: "1px solid gray" }} />
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href={links.home}>
              <a>Webstaurant</a>
            </Link>
          </div>
          <ul>
            <div className={styles.menu}>
              <li>
                <Link href={links.reservation}>
                  <a>Reservation</a>
                </Link>
              </li>
              <li>
                <Link href={links.menu}>
                  <a>Menu</a>
                </Link>
              </li>
              <li>
                <Link href={links.about}>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={links.contact}>
                  <a>Contact</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <Divider width="100%" style={{ borderTop: "1px solid gray" }} />
      </div>
    </header>
  );
};

export default Nav;
