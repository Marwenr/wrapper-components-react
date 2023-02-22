import React from "react";

const Card = ({ title, img }) => {
  return (
    <div>
      <img src={require(`../../assets/imgs/${img}`)} alt="img" style={{borderRadius:"50%"}}/>
      <p>{title}</p>
    </div>
  );
};

export default Card;
