import React from "react";
import ProductsContext from "../../context/products/productsContext";

const ProductDetails = ({ match }) => {
  const [currency, setCurrency] = React.useState("");

  const productsContext = React.useContext(ProductsContext);
  //we can catch the match.params.id and use it to display some info to the user
  // console.log(`This is the page id: ${match.params.id}`);

  //listens to any change in the params id and changes to the product id clicked
  React.useEffect(() => {
    productsContext.getProduct(Number(match.params.id));
  }, [Number(match.params.id)]);

  //make page scroll to top on viewing this page
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  let randomNumber,
    name,
    description,
    image_url,
    available_quantity,
    prices = null;

  //check if the item to be in the product details has been selected
  //if it has pull out the information from the product details and show in details page
  if (productsContext.itemOnView !== null) {
    productsContext.itemOnView.map((item) => {
      randomNumber = item.randomNumber;
      name = item.name;
      description = item.description;
      image_url = item.image_url;
      available_quantity = item.available_quantity;
      prices = item.prices;
    });
  } else {
    name = "No items to show!";
  }

  //function to add a snackbar that disappears after 1 second
  const myFunction = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  };

  //adding items to cart array
  const handleAdd = () => {
    productsContext.itemOnView.map((item) => {
      name = item.name;
      description = item.description;
      image_url = item.image_url;
      available_quantity = item.available_quantity;
      prices = item.prices;
    });
    let itemToAdd = {
      name: name,
      description: description,
      image_url: image_url,
      available_quantity: available_quantity,
      prices: prices,
    };

    const randomNumber = Math.floor(Math.random() * 100 + 1);
    productsContext.addToCart(itemToAdd, randomNumber);
    myFunction();
  };

  //set the state of currency to the value selected
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="largeDetailsContainer">
      <div className="detailsContainer">
        <h1>{name}</h1>
        <img
          style={imageStyle}
          className="product-details-image"
          src={image_url}
          alt={name}
        />
        <div>{description}</div>
        <div className="itemPriceDetails">
          {prices !== null ? (
            <div>
              <select onChange={handleChange} style={{ padding: "0.5rem" }}>
                {prices.map((option) => (
                  <option key={option.currency} value={option.price}>
                    {option.currency}
                  </option>
                ))}
              </select>
              &nbsp;
              <span
                style={{
                  backgroundColor: "#F0F2EB",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  fontWeight: "900",
                }}
              >
                {currency === "" ? (
                  <span style={{ fontWeight: "900" }}>
                    EUR: {prices[0].price}
                  </span>
                ) : (
                  //format numbers which are in thousands eg. 1000 to 1,000
                  new Intl.NumberFormat().format(currency)
                )}
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="item-quantity">
            <strong style={{ fontWeight: 700 }}>Available Items:</strong>{" "}
            {available_quantity}
          </div>

          {available_quantity === 0 ? (
            <div>No {name} available</div>
          ) : (
            <div>
              Add to cart:{" "}
              <i
                className="fas fa-cart-plus"
                onClick={handleAdd}
                data-cy={name}
              ></i>
            </div>
          )}
        </div>
        <div id="snackbar">Item has been added to cart</div>
      </div>
    </div>
  );
};

const imageStyle = {
  width: "25% !important",
  height: "60% !important",
};

export default ProductDetails;
