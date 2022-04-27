import React, { useState } from "react";
import styles from "/styles/Button.module.css";

const PrimaryButton = ({ label, onClick, disabled, style }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <button
      style={
        disabled
          ? { ...disabledStyle, ...style }
          : hover
          ? { ...hoverStyle, ...style }
          : { ...style }
      }
      className={styles.button}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={!disabled ? onClick : () => {}}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;

const hoverStyle = {
  backgroundColor: "black",
  color: "white",
};

const disabledStyle = {
  backgroundColor: "gray",
  cursor: "default",
  opacity: 0.7,
};
