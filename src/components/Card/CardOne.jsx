import React from "react";

const Card = ({ title, img }) => {
  return (
    <div style={{border: "2px solid black", padding:0, margin:0}}>
      <p>{title}</p>
      <img src={require(`../../assets/imgs/${img}`)} alt="img" />
    </div>
  );
};

export default Card;
