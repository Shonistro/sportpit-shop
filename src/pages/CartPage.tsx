import React, { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../utils/api';
import Cart from '../components/Cart';
import { CartItem } from '../utils/cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartData = await apiRequest('get', '/api/cart/');
        setCartItems(cartData.items);
        setTotalPrice(cartData.items.reduce((total: number, item: CartItem) => total + item.price_sum, 0));
      } catch (error) {
        console.error('Ошибка при получении данных корзины:', error);
      }
    };

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
  
        if (response.ok) {
          const updatedCartItems = cartItems.map((item) =>
            item.id === cartItemId ? { ...item, quantity: newQuantity } : item
          );
  
          const updatedCartData = await apiRequest('get', '/api/cart/');
  
          setCartItems(updatedCartData.items);
          setTotalPrice(
            updatedCartData.items.reduce((total: number, item: CartItem) => total + item.price_sum, 0)
          );
        }
      } catch (error) {
        console.error('Ошибка при обновлении количества товара:', error);
      }
    },
    [] // Зависимости для мемоизации
  );
  
  
  
  
  const removeCartItem = async (cartItemId: number) => {
    try {
      // Отправляем запрос на удаление товара из корзины
      await apiRequest('delete', `/api/cart/remove-from-cart/${cartItemId}/`);

      // Обновляем локальное состояние
      const updatedCartItems = cartItems.filter((item) => item.id !== cartItemId);
      setCartItems(updatedCartItems);
      setTotalPrice(updatedCartItems.reduce((total, item) => total + item.price_sum, 0));
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
        removeCartItem={removeCartItem} // Передаем removeCartItem
      />
    </div>

  );
};

export default CartPage;
