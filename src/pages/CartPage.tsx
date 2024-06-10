import React, { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../utils/api';
import Cart from '../components/Cart';
import { CartItem } from '../utils/cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchCartData = async () => {
    try {
      const cartData = await apiRequest('get', '/api/cart/');
      setCartItems(cartData.items);
      setTotalPrice(cartData.items.reduce((total: number, item: CartItem) => total + item.price_sum, 0));
    } catch (error) {
      console.error('Ошибка при получении данных корзины:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const clearCart = async () => {
    try {
      await apiRequest('delete', '/api/cart/clear/');
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error('Ошибка при очистке корзины:', error);
    }
  };

  const handleQuantityChange = useCallback(
    async (cartItemId: number, newQuantity: number) => {
      try {
        const response = await apiRequest(
          'put',
          `/api/cart/update-cart-item/${cartItemId}/${newQuantity}/`
        );

        if (response) {
          const updatedCartItems = cartItems.map((item) =>
            item.id === cartItemId ? { ...item, quantity: newQuantity } : item
          );

          const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

          setCartItems(updatedCartItems);
          setTotalPrice(updatedTotalPrice);
        }
      } catch (error) {
        console.error('Ошибка при обновлении количества товара:', error);
      }
    },
    [cartItems] // Зависимость для мемоизации
  );

  const removeCartItem = async (cartItemId: number) => {
    try {
      await apiRequest('delete', `/api/cart/remove-from-cart/${cartItemId}/`);
      const updatedCartItems = cartItems.filter((item) => item.id !== cartItemId);
      const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

      setCartItems(updatedCartItems);
      setTotalPrice(updatedTotalPrice);
    } catch (error) {
      console.error('Ошибка при удалении товара из корзины:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Cart
        items={cartItems}
        totalPrice={totalPrice}
        clearCart={clearCart}
        handleQuantityChange={handleQuantityChange}
        removeCartItem={removeCartItem}
      />
    </div>
  );
};

export default CartPage;
