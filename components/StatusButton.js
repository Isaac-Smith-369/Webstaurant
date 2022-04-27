import React, { useState } from "react";
import { statusCodes, textColors } from "/utilities/colors";
import styles from "/styles/Button.module.css";

const StatusButton = ({
  label,
  status = "success",
  onClick,
  disabled,
  style,
}) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const statusOptions = {
    success: "success",
    warning: "warning",
    error: "error",
  };

  const getStatusColor = (status) => {
    if (hover) {
      const color =
        status == statusOptions.warning
          ? statusCodes.warning300
          : status == statusOptions.error
          ? statusCodes.error300
          : statusCodes.success300;
      return {
        backgroundColor: color,
        color:
          color === statusCodes.warning300
            ? textColors.text
            : textColors.textInverted,
      };
    } else {
      const color =
        status == statusOptions.warning
          ? statusCodes.warning100
          : status == statusOptions.error
          ? statusCodes.error100
          : statusCodes.success100;
      return {
        backgroundColor: color,
        color:
          color === statusCodes.warning100
            ? textColors.text
            : textColors.textInverted,
      };
    }
  };

  return (
    <button
      style={
        disabled
          ? { ...disabledStyle, ...style }
          : hover
          ? { ...hoverStyle, ...style, ...getStatusColor(status) }
          : { ...style, ...getStatusColor(status) }
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

export default StatusButton;

const hoverStyle = {
  backgroundColor: "black",
  color: "white",
};

const disabledStyle = {
  backgroundColor: "gray",
  cursor: "default",
  opacity: 0.7,
};
