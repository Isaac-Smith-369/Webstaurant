import styles from "/styles/Form.module.css";

const Form = ({ children, onSubmit, style }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        {children}
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default Form;
