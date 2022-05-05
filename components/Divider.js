import styles from "/styles/Divider.module.css";

const Divider = ({ width, align, style }) => {
  return (
    <hr
      align={align}
      style={width ? { width: width, ...style } : {}}
      className={styles.divider}
    />
  );
};

export default Divider;
