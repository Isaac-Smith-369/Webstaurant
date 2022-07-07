import react, { useState, useReducer } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "/styles/NewsLetter.module.css";

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

const NewsLetter = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const result = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    alert("Thank you for subscribing to our newsletter.");
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
    <div className={styles.newsletter}>
      <div className={styles.info}>
        <h3>Sign up today</h3>
        <p>
          For the latest updates, events, and menus from Ghanas favourite
          restaurant.
        </p>
      </div>
      <div className={styles.form}>
        <form id="newsletter-form">
          <input
            className={styles.textfield}
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            placeholder="First Name *"
            required="required"
          />
          <input
            className={styles.textfield}
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            placeholder="Last Name *"
            required="required"
          />
          <input
            className={styles.textfield}
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Email *"
            required="required"
          />
        </form>
      </div>
      <div>
        <PrimaryButton
          label="SUBMIT"
          onClick={handleSubmit}
          style={{
            width: 260,
            height: 60,
            marginTop: 15,
          }}
          disabled={submitting}
        />
      </div>
      <div className={styles.footer}>
        <p>
          Wed like to keep in touch with you about all our restaurants with
          exclusive news and advance booking opportunities.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
