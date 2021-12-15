import {
  ADD_TO_DETAILS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_TO_DETAILS:
      return {
        ...state,
        itemOnView: action.payload,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        number_of_items_in_cart: state.number_of_items_in_cart + 1,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        number_of_items_in_cart: state.number_of_items_in_cart - 1,
        cart: state.cart.filter((item) => item.randomNumber !== action.payload),
      };
    default:
      return state;
  }
};
