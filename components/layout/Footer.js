import Divider from "components/Divider";
import style from "/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Divider width="90%" style={{ borderTop: "2px solid black" }} />
      <div className={style.content}>
        <h4>Webstaurant &copy; {new Date().getFullYear()}</h4>
        <p>1024 Norton st, Accra</p>
        <p>Ghana</p>
        <p>+233 55 63 421</p>
        <p>info@webstaurant.com</p>
      </div>
    </footer>
  );
};

export default Footer;
