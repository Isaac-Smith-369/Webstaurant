import style from "/styles/Divider.module.css";

const Divider = ({ width }) => {
  return (
    <hr
      style={width ? { width: `${width}px` } : {}}
      className={style.divider}
    />
  );
};

export default Divider;
