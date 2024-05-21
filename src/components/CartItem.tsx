import React from 'react';
import { CartItem as CartItemType } from '../hooks/useCart';
import useCart from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <li key={item.id} className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded ml-2"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;