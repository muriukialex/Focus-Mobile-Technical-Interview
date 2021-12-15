import React from "react";
import image from "../../assets/404.png";

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <img src={image} alt="error not found" />
    </div>
  );
};

export default NotFound;
