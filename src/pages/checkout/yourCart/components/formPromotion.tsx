import React, { useState } from 'react';
import { TextInput, Textarea, Button, Flex } from '@mantine/core';

function FormPromotion() {
  const [promoCode, setPromoCode] = useState('');
  const [orderNote, setOrderNote] = useState('');

  const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(event.currentTarget.value);
  };

  const handleOrderNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOrderNote(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}  style={{ width: '100%'}}>
        <Flex direction="column"  style={{ width: '100%'}}>
            <Flex align="flex-end"  style={{ width: '100%'}}>
                <TextInput  style={{ width: '100%'}}
                label="Promo Code"
                placeholder="Enter your promo code"
                value={promoCode}
                onChange={handlePromoCodeChange}
                />
                <Button color="gray" radius="xs" ml={10}>
                APPLY
                </Button>
            </Flex>

            <Textarea
                label="Add a note to your orderDTO"
                placeholder="Enter your note here"
                value={orderNote}
                onChange={handleOrderNoteChange}
                rows={4}
                style={{ marginTop: '1rem'}}
            />
        </Flex>
    </form>
  );
}

export default FormPromotion;
