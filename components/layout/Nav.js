import React from "react";
import Link from "next/link";
import Divider from "components/Divider";
import styles from "/styles/Nav.module.css";
import { links } from "utilities/links";
import PrimaryButton from "components/PrimaryButton";

const Nav = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.topNav}>
        <div className={styles.navAddress}>
          <Link href={links.contact}>
            <a>
              <p>1024 Norton st, Accra</p>
              <p>Ghana</p>
              <p>+233 55 63 421</p>
            </a>
          </Link>
        </div>
        <div className={styles.bars}>
          <input
            type="checkbox"
            className={styles.check}
            id="checkbox-toggle"
          />
          <label htmlFor="checkbox-toggle" className={styles.hamburger}>
            <i className="fa fa-bars"></i>
          </label>
        </div>
        <div className={styles.logo}>
          <Link href={links.home}>
            <a>Webstaurant</a>
          </Link>
        </div>
        <div className={styles.navButton}>
          <PrimaryButton label="RESERVE A TABLE" />
        </div>
        <div className={styles.navCalendar}>
          <Link href={links.reservation}>
            <a>
              <i className="fa fa-calendar-o"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.navbarContainer}>
        <Divider width="100%" style={{ borderTop: "1px solid gray" }} />
        <div className={styles.navbar}>
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
