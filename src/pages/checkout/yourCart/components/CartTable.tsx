import React, { useContext, useState } from 'react';
import { checkoutContext } from '../../../../@globalState/checkoutContext';
import { deleteCartAction, updateCartAction } from '../../../../@globalState/checkoutAction';

import { CloseButton, Flex, Table, Title } from '@mantine/core';
import { Image, Grid } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';

const CartTable: React.FC = () => {
  const { state, dispatch } = useContext(checkoutContext);

  const format_money = (money: number): string => {
    return money.toLocaleString('vi', {
      style: 'currency',
      currency: 'VND',
    });
  };

  const [cartState, setCartState] = useState(state);

  const handle_count_inc = (index: number) => {
    const newDataList = [...cartState.listCart];
    newDataList[index].quantity += 1;
    setCartState({ ...cartState, listCart: newDataList });
    dispatch(updateCartAction(newDataList[index]));
  };

  const handle_count_des = (index: number) => {
    const newDataList = [...cartState.listCart];
    newDataList[index].quantity -= 1;
    setCartState({ ...cartState, listCart: newDataList });
    dispatch(updateCartAction(newDataList[index]));
  };

  const handle_delete = (index: number) => {
    const newDataList = [...cartState.listCart];
    newDataList.splice(index, 1);
    setCartState({ ...cartState, listCart: newDataList });
    dispatch(deleteCartAction(index));
  };

  const rows = cartState.listCart.map((cart, index) => (
    <tr key={index}>
      <td>
        <Image src={cart.variant.imageId} height={100} radius="md" />
      </td>
      <td>{cart.variant.variantName}</td>
      <td>{format_money(cart.variant.price)}</td>
      <td>
        <Grid gutter="xs" justify="center" style={{ borderRadius: '8px', border: '1px solid gray' }}>
          <Grid.Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconPlus onClick={() => handle_count_inc(index)} cursor={'pointer'} />
          </Grid.Col>
          <Grid.Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>
            {cart.quantity}
          </Grid.Col>
          <Grid.Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconMinus onClick={() => handle_count_des(index)} cursor={'pointer'} />
          </Grid.Col>
        </Grid>
      </td>
      <td>
        <Flex mih={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
          {format_money(cart.variant.price * cart.quantity)}
          <CloseButton title="Xóa sản phẩm" size="xl" iconSize={20}  onClick={()=>handle_delete(index)}/>
        </Flex>
      </td>
    </tr>
  ));

  return (
    <Flex gap="xl" justify="center" align="center" direction="column">
      <Title>Giỏ Hàng của bạn</Title>

      <Table>
        <thead>
          <tr>
            <th>Sản Phẩm</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Flex>
  );
};

export default CartTable;
