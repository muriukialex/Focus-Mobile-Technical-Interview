import React from "react";
import { Link } from "react-router-dom";

import ProductsContext from "../../context/products/productsContext";

import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const productsContext = React.useContext(ProductsContext);

  const { number_of_items_in_cart } = productsContext;
  return (
    <div>
      <header className="top-nav">
        Amazin'<i className="fas fa-check"></i> |{" "}
        <FormattedMessage
          id="amazin.header"
          defaultMessage="The easiest way to shop online"
        />
      </header>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <span style={{ color: "#000" }} data-cy="cartItems">
            Items in cart: {number_of_items_in_cart}
          </span>
          {/*place something to show how many items are in the cart here*/}
          <div title="items in cart">
            {/*condition to show this arrow when the cart has something*/}
            {number_of_items_in_cart > 0 ? (
              <Link to="/secure/checkout">
                Checkout &nbsp;<i className="fas fa-arrow-right"></i>
              </Link>
            ) : (
              ""
            )}
            <i className="fas fa-shopping-cart" style={{ color: "green" }}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
