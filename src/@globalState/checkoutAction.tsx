import { Cart } from "./checkoutProps";


export const ADD_CART = 'add_cart';
export const UPDATE_CART = 'update_cart';
export const DELETE_CART = 'delete_cart';

interface addCartAction {
    type: typeof ADD_CART;
    payload: Cart;
  };
  
interface updateCartAction {
    type: typeof UPDATE_CART;
    payload: Cart;
};

interface deleteCartAction {
    type: typeof DELETE_CART;
    payload: number;
};

export type Action = addCartAction | updateCartAction | deleteCartAction;

export const addCartAction = (payload: Cart): addCartAction => {
    return {
      type: ADD_CART,
      payload,
    };
  };
  
export const updateCartAction = (payload: Cart): updateCartAction => {
    return {
      type: UPDATE_CART,
      payload,
    };
  };
  
export const deleteCartAction = (payload: number): deleteCartAction => {
    return {
      type: DELETE_CART,
      payload,
    };
  };
  