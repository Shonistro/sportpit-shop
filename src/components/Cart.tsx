import React from 'react';
import { CartItem as CartItemType } from '../hooks/useCart';
import CartItemComponent from './CartItem';

interface CartProps {
  items: CartItemType[];
  totalPrice: number;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ items, totalPrice, clearCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      {items.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
         <ul>
        {items.map((item) => (
            <CartItemComponent key={item.id} item={item} />
         ))}
            </ul>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Очистить корзину
            </button>
            <p className="text-2xl font-bold">
              Итого: <span>${totalPrice.toFixed(2)}</span>
            </p>
            <a
              href="/checkout"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Оформить заказ
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;