import React, { Fragment } from "react";
import "../../App.css";

import ProductsContext from "../../context/products/productsContext";

const CartsPage = () => {
  const productsContext = React.useContext(ProductsContext);

  //total price of items in the cart array
  const [total, setTotal] = React.useState(0);

  const totalCalculation = (cartArray) => {
    let totalValue = 0;
    cartArray.map((item) => {
      totalValue += item.prices[1].price;
    });
    setTotal(totalValue);
  };

  const handleRemove = (item) => {
    productsContext.deleteFromCart(item.randomNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    totalCalculation(productsContext.cart);
  }, [productsContext.cart]);
  //make page scroll to top on viewing this page
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <div className="cartContainer">
        {productsContext.number_of_items_in_cart > 0 ? (
          productsContext.cart.map((item, index) => (
            <div className="cartSection" key={index}>
              <div style={{ textDecoration: "underline" }}>{item.name}</div>
              <div>{item.description}</div>
              <img src={item.image_url} alt={item.name} />
              <div className="cartPageSectionPrice">
                KES: {new Intl.NumberFormat().format(item.prices[1].price)}
              </div>
              <div>
                <i
                  className="far fa-trash-alt"
                  onClick={() => handleRemove(item)}
                ></i>
                &nbsp; Remove from cart
              </div>
            </div>
          ))
        ) : (
          <div>cart is empty</div>
        )}
        <div>
          {/*new Intl.NumberFormat().format()  formats numbers eg. 1000 to 1,000*/}
          <div style={totalPriceSection}>
            Total: KES {new Intl.NumberFormat().format(total)}
          </div>
          <div style={{ cursor: "pointer" }}>
            <i className="fas fa-check"></i>Confirm Purchase:{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const totalPriceSection = {
  backgroundColor: "#0074D9",
  color: "#fff",
  width: "20%",
  padding: "1rem",
};

export default CartsPage;
