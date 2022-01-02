import React, { Fragment } from "react"
import LazyLoad from "react-lazyload"

import PropTypes from "prop-types"
import "../../App.css"
import { Link } from "react-router-dom"

import Spinner from "../layout/Spinner"

import ProductsContext from "../../context/products/productsContext"

const ProductItem = ({
  product: { id, name, description, image_url, available_quantity, prices },
}) => {
  const productsContext = React.useContext(ProductsContext)

  const myFunction = () => {
    var x = document.getElementById("snackbar")
    x.className = "show"
    setTimeout(function () {
      x.className = x.className.replace("show", "")
    }, 3000)
  }

  let product = {
    id: id,
    description: description,
    name: name,
    image_url: image_url,
    available_quantity: available_quantity,
    prices: prices,
  }
  //we use our add to cart function here
  const handleAdd = () => {
    // generate a random number here ****************************
    const randomNumber = Math.floor(Math.random() * 100 + 1)

    //pass in the object clicked into the addToCart function
    productsContext.addToCart(product, randomNumber)
    console.log(product)
    myFunction()
  }

  //currency to display --> KES
  const price = prices[1].price

  return (
    <div
      style={{
        border: "1px solid #eee",
        textAlign: "center",
        padding: "25%",
      }}
    >
      <LazyLoad once={true} placeholder={<Spinner />}>
        <img className="productImage" src={image_url} title={name} alt="item" />
      </LazyLoad>
      <h3>{name}</h3>
      {/*new Int..NumberFormat().format()  formats numbers eg. 1000 to 1,000*/}
      <div>KES: {new Intl.NumberFormat().format(price)}</div>
      <Link to={`/product/${id}`}>See product details</Link>
      {available_quantity === 0 ? (
        <div>No {name} available</div>
      ) : (
        <Fragment>
          <div>
            Add to cart:{" "}
            <i
              className="fas fa-cart-plus"
              onClick={handleAdd}
              data-cy={name}
            ></i>
          </div>
        </Fragment>
      )}
      <div id="snackbar">Item has been added to cart</div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
}
export default ProductItem
