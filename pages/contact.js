import Hours from "components/Hours";
import Link from "next/link";
import { links } from "utilities/links";
import styles from "/styles/Contact.module.css";
const Contact = () => {
  return (
    <div>
      <Hours />
      <div className={styles.contact}>
        <div className={styles.heading}>
          <h2>Contact Us</h2>
        </div>
        <p>
          For reservations, please
          <Link href={links.reservation}>
            <a style={{ color: "black" }}> book online here. </a>
          </Link>
          For larger tables please call a memeber of our reservations team on
          0558973526
        </p>
        <h4>Directions</h4>
        <p>
          The nearest tube station is Leicester Square. Leave by Exit 3 and turn
          right. Walk up Charing Cross Road and take the 2nd turning on your
          right into Litchfield Street. The entrance to the restaurant is around
          the left hand corner on West Street, opposite St Martins Theatre.
        </p>
      </div>
    </div>
  );
};

export default Contact;
