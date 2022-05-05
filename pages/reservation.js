import react, { useState, useReducer } from "react";
import PrimaryButton from "components/PrimaryButton";
import styles from "/styles/Reservation.module.css";
import Divider from "components/Divider";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Reservation = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // console.log(formData.datetime);
    alert("You have submitted the form");
    setFormData({
      reset: true,
    });
    setSubmitting(false);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.headingtitle}>
        <h3>Reservation</h3>
        <Divider width={200} style={{ borderTop: "3px solid black" }} />
      </div>
      <div className={styles.heading}>
        <p>Reserve a table at our fine establishment</p>
      </div>
      <div className={styles.formcontainer}>
        <form id="reservation-form">
          <input
            className={styles.textfield}
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="NAME *"
            required="required"
          />
          <input
            className={styles.textfield}
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="PHONE NUMBER *"
            required="required"
          />
          <input
            className={styles.textfield}
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="EMAIL *"
            required="required"
          />
          <input
            className={styles.textfield}
            type="number"
            name="count"
            value={formData.count || ""}
            step="1"
            onChange={handleChange}
            placeholder="NUMBER OF GUESTS *"
            required="required"
          />
          <p>Reservation date and time</p>
          <input
            className={styles.textfield}
            type="datetime-local"
            name="datetime"
            onChange={handleChange}
            required="required"
          />
        </form>
        <PrimaryButton
          label="BOOK NOW"
          onClick={handleSubmit}
          style={{
            width: 200,
            marginTop: 20,
            backgroundColor: "black",
            color: "white",
          }}
          disabled={submitting}
        />
      </div>
      <div className={styles.footer}>
        <p>
          * In case of cancellation 7 days before the booked date, we will
          refund the entire advance payment.
        </p>
        <p>
          ** In case of cancellation 2 days before the date, we will refund 50%
          of the advance payment.
        </p>
        <p>
          *** In case of cancellation less than 2 days before the date, the
          advance payment will not be refunded.
        </p>
      </div>
    </div>
  );
};

export default Reservation;
