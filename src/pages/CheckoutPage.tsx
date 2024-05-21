import React from 'react';
import useCart, { CartItem } from '../hooks/useCart';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <Checkout items={cartItems} totalPrice={totalPrice} />
    </div>
  );
};

export default CheckoutPage;