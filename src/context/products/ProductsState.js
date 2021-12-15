import productsReducer from "./productsReducer";
import ProductsContext from "./productsContext";
import React from "react";

import {
  ADD_TO_DETAILS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../types.js";

const ProductsState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Cellphone",
        description:
          "Dare to be exceptional. Now you can because you've never had this much power and beauty at your fingertips. This phone has all the premium features without the premium price tag in a device that is smart, sleek and beautiful.",
        image_url:
          "https://drive.google.com/uc?export=view&id=1VPxx0re6KnvY6JBZJlq7K-IwLFVNUrix",
        rating: 0,
        available_quantity: 10,
        prices: [
          {
            currency: "EUR",
            price: 90,
          },
          {
            currency: "KES",
            price: 11000,
          },
          {
            currency: "NGN",
            price: 37500,
          },
          {
            currency: "USD",
            price: 100,
          },
        ],
      },
      {
        id: 2,
        name: "Laptop",
        description:
          "Do more of what you love. All-day long. Designed to keep you productive and entertained from anywhere, this laptop combines up to 15 hours of mixed usage battery life with a sleek and portable, micro-edge bezel design.",
        image_url:
          "https://drive.google.com/uc?export=view&id=15-_5teBP5HPM35z75pNfxuEdoPlpZo3x",
        rating: 0,
        available_quantity: 7,
        prices: [
          {
            currency: "EUR",
            price: 480,
          },
          {
            currency: "KES",
            price: 55000,
          },
          {
            currency: "NGN",
            price: 200000,
          },
          {
            currency: "USD",
            price: 525.99,
          },
        ],
      },
      {
        id: 3,
        name: "Pants",
        description:
          "Enjoy classic style and exceptional comfort by adding these pants to your wardrobe. Not only are they classy, but they also feature moisture-wicking technology to help you remain comfortable throughout the day. The technology featured in this pant is designed to keep you cool, dry and fashionable while you work, play and even after hours. These stylish pants also feature an adjustable waist to help ensure a snug fit every time you wear them. These pants are machine washable and available in a variety of sizes and colors so you can easily find a pair that fits your body and style.",
        image_url:
          "https://drive.google.com/uc?export=view&id=1IecoDryko_5mUGgz2xn7KSZRPHwWw72g",
        rating: 0,
        available_quantity: 5,
        prices: [
          {
            currency: "EUR",
            price: 31.83,
          },
          {
            currency: "KES",
            price: 3700,
          },
          {
            currency: "NGN",
            price: 13000,
          },
          {
            currency: "USD",
            price: 34.99,
          },
        ],
      },
      {
        id: 4,
        name: "Shirt",
        description:
          "This long sleeve shirt will make a smart and handsome addition to your wardrobe. It's made from soft, lightweight fabric to keep you comfortable, and features a stylish allover print. The buttoned chest pocket helps keep your sunglasses and other small items secure when you're on the move, while roll tab sleeves make this shirt a versatile option you can't go wrong with.",
        image_url:
          "https://drive.google.com/uc?export=view&id=1E34-t-P_e55lhOuc0oZa5Y3hrwx2hN2R",
        rating: 0,
        available_quantity: 0,
        prices: [
          {
            currency: "EUR",
            price: 19.1,
          },
          {
            currency: "KES",
            price: 2200,
          },
          {
            currency: "NGN",
            price: 7500,
          },
          {
            currency: "USD",
            price: 21,
          },
        ],
      },
      {
        id: 5,
        name: "Shoes",
        description:
          "The coolest kicks. This super comfortable and trend-right sneaker hits all the right notes. Features a full wrap canvas print and elastic stretch V for easy on-and-off use. Soft textile lining with lightweight construction for maximum comfort. High quality canvas construction for everyday use and durable EVA outsole for exceptional traction.",
        image_url:
          "https://drive.google.com/uc?export=view&id=1_cZr3AcqOOLlA0mavlFWLSsN40xSTGmt",
        rating: 0,
        available_quantity: 10,
        prices: [
          {
            currency: "EUR",
            price: 42.99,
          },
          {
            currency: "KES",
            price: 5000,
          },
          {
            currency: "NGN",
            price: 17000,
          },
          {
            currency: "USD",
            price: 47.25,
          },
        ],
      },
    ],
    cart: [], //carts we add items which have been seleted to be in the cart to this cart-Array
    itemOnView: null, //add a product to view an item
    number_of_items_in_cart: 0,
  };
  const [state, dispatch] = React.useReducer(productsReducer, initialState);

  //getting product selected to view in product details page
  const getProduct = (id) => {
    let products = [...state.products];
    const itemDetails = products.filter((item) => item.id === id);

    dispatch({ type: ADD_TO_DETAILS, payload: itemDetails });
  };

  //add items to cart array
  const addToCart = (item, randomNumber) => {
    let itemToAdd = { ...item, randomNumber: randomNumber };
    dispatch({ type: ADD_ITEM_TO_CART, payload: itemToAdd });
  };

  //delete item from cart based on the identifier passed
  const deleteFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        itemOnView: state.itemOnView,
        number_of_items_in_cart: state.cart.length,

        getProduct,
        addToCart,
        deleteFromCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
