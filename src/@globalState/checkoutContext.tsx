import * as React from 'react';
import cartReducer from './checkoutReducer';
import { initState, yourCartState } from './checkoutProps';
import { Action } from './checkoutAction';

interface Props {
    children: React.ReactNode;
  }

  interface CheckoutContextType {
    state: yourCartState;
    dispatch: React.Dispatch<Action>;
  }

export const checkoutContext = React.createContext<CheckoutContextType>({
    state: initState,
    dispatch: () => {},
  });


const Provider: React.FC<Props> = ({ children}) => {
    const [state, dispatch] = React.useReducer(cartReducer, initState)
    console.log('context')

    return(
        <checkoutContext.Provider value={{ state, dispatch }}>
            {children}
        </checkoutContext.Provider>
    )
}

export default Provider;