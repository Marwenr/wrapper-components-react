import React from "react";
import styles from "./styles.module.css";

const GridList = ({ children, items }) => {
  const { grid } = styles;
  const fetchData = items.map((el) =>
    React.cloneElement(children, { key: el.id, ...el })
  );
  return <div className={grid}>{fetchData}</div>;
};

export default GridList;
