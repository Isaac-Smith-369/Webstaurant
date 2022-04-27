import style from "/styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Webstaurant</div>
      <ul className={style.navlinks}>
        <input type="checkbox" className={style.check} id="checkbox-toggle" />
        <label htmlFor="checkbox-toggle" className={style.hamburger}>
          &#9776;
        </label>
        <div className={style.menu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
