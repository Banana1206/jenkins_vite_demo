import { Card, Table, Button, Flex } from '@mantine/core';

import React, { useContext } from 'react';
import { checkoutContext } from '../../../../@globalState/checkoutContext';

// type StepperProps = {
//   activeStep: number;
//   onStepChange: (nextStep: number) => void;
// };

const OrderSummary: React.FC = () =>{

    const { state } = useContext(checkoutContext);
    // const [cartState, setCartState] = useState(state)
    const TotalItem = state.listCart.reduce((total, cart)=>total+cart.quantity,0)
    const totalPrice = state.listCart.reduce(
        (total, cart) => total + cart.variant.price * cart.quantity,
        0
      );
    
    const totalPriceAfter = state.listCart.reduce(
        (total, cart) => total + cart.variant.price * cart.quantity,
        0
      );

    // useEffect({
    //     TotalItem = state.listCart.reduce((total, cart)=>total+cart.quantity,0)

    // },[state])

    

    const format_money = (money: number): string => {
        return money.toLocaleString('vi', {
          style: 'currency',
          currency: 'VND',
        });
      };

  return (
    <Card shadow="xs" padding="lg" style={{ maxWidth: 400, backgroundColor: "#f2f3f5" }}>
     <h2>Order Summary</h2>
      <Table>
        <tbody>
          <tr>
            <td>Total:</td>
            <td>{TotalItem} item</td>
          </tr>
          <tr>
            <td>Total weight:</td>
            <td>{format_money(totalPrice)}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 700 }}>TOTAL PRICE:</td>
            <td style={{ fontWeight: 700 }}>{format_money(totalPriceAfter)}</td>
          </tr>
        </tbody>
      </Table>
        <Flex  gap="sm"
      justify="center"
      align="center"
      direction="column">

        <Button variant="outline" style={{ width: '100%'}}>Update</Button>
        <Button color="gray"style={{ width: '100%'}} >Go to Checkout</Button>
        </Flex>
      
    </Card>
  );
}

export default OrderSummary;
