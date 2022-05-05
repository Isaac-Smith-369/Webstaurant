import styles from "/styles/TextField.module.css";

const TextField = ({ name, value, onChange, style }) => {
  return (
    <input
      className={styles.textfield}
      name={name}
      value={value || ""}
      onChange={onChange}
      style={style}
    />
  );
};

export default TextField;
