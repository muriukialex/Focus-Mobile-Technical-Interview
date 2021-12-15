import React from "react";
import Products from "../products/Products";
import "../../App.css";

const Home = () => {
  //make page scroll to top on viewing this page
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="homeSection">
      <h2 style={{ fontWeight: "300", fontSize: "2rem", textAlign: "center" }}>
        Featured products
      </h2>
      <Products />
    </div>
  );
};

export default Home;
