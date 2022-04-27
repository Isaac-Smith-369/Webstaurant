import React, { useState } from "react";
import styles from "/styles/Button.module.css";

const SecondaryButton = ({ label, onClick, disabled, style }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const getSecondaryStyle = () => {
    return hover && !disabled
      ? {
          backgroundColor: "black",
          border: "none",
        }
      : {
          backgroundColor: "transparent",
          border: "none",
        };
  };

  return (
    <button
      style={
        disabled
          ? { ...disabledStyle, ...getSecondaryStyle(), ...style }
          : hover
          ? { ...hoverStyle, ...getSecondaryStyle(), ...style }
          : { ...getSecondaryStyle(), ...style }
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

export default SecondaryButton;

const hoverStyle = {
  backgroundColor: "black",
  color: "white",
};

const disabledStyle = {
  backgroundColor: "gray",
  cursor: "default",
  opacity: 0.7,
};
