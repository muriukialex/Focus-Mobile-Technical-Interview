import React from "react";
import logo from "../../assets/shop.png";

const About = () => {
  //make page scroll to top on viewing this page
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="aboutSection">
      <h1>Amazin'</h1>
      <img src={logo} style={{ width: "8%", height: "8%" }} alt="amazin logo" />
      <p style={{ letterSpacing: "0.05em" }}>
        We are a young startup in the heart of Kenya's capital, Nairobi very
        hungry and passioante about creating software that impacts people's
        lives meaningfully and substantially. Founded in 2021, our aim is to
        revolutionize trade in the continent. Our Foundation of growth has been
        strong customer support, delivering of quality products to consumers,
        highly skilled employees and referrals from{" "}
        <strong>loyal customers</strong>. We are always dediacted to supporting
        our <em>customers</em>, <em>employees</em> and
        <em>shareholders</em>, to maintain growth of the company and in the long
        run deliver massive value for our customers.
      </p>
    </div>
  );
};

export default About;
