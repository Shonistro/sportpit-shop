import React from 'react';
import useCart, { CartItem } from '../hooks/useCart';
import Cart from '../components/Cart';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <Cart items={cartItems} totalPrice={totalPrice} clearCart={clearCart} />
    </div>
  );
};

export default CartPage;