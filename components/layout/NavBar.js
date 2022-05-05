import Link from "next/link";
import { links } from "utilities/links";
import style from "/styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link href="/">
          <a>Webstaurant</a>
        </Link>
      </div>
      <ul className={style.navlinks}>
        <input type="checkbox" className={style.check} id="checkbox-toggle" />
        <label htmlFor="checkbox-toggle" className={style.hamburger}>
          &#9776;
        </label>
        <div className={style.menu}>
          <li>
            <Link href={links.home}>
              <a>Home</a>
            </Link>
          </li>
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
            <Link href={links.contact}>
              <a>Contact</a>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
