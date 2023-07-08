
import { Action, ADD_CART, DELETE_CART, UPDATE_CART } from "./checkoutAction";
import { yourCartState } from "./checkoutProps";

const cartReducer = (state:yourCartState, action:Action): yourCartState=>{
    // console.log("action: ", action)
    // console.log("updateCartAction")

    switch(action.type){

        case ADD_CART:
            return {
                ...state,
                listCart: [...state.listCart, action.payload]
            }
        case UPDATE_CART:
            // write code
            const updatedListCart = state.listCart.map((item) => {
                if (item.variantId === action.payload.variantId) {
                  return action.payload;
                }
                return item;
              });
        
              return {
                ...state,
                listCart: updatedListCart,
              };
        case DELETE_CART:
            // const oldState = [...state.listCart]
            // console.log("old_state",oldState)
            const newState = state.listCart.filter(
                (_, index) => index !== action.payload);

            // console.log("new_state", newState)
            return {
            ...state,
            listCart: newState,
            };
            
            return state
        default:
            return state;
    }
}
    
export default cartReducer;