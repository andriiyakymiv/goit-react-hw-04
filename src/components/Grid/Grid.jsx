import style from "./Grid.module.css";
const Grid = ({ children, ref }) => {
  return (
    <ul ref={ref} className={style.gridContainer}>
      {children}
    </ul>
  );
};

export default Grid;