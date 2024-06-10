import React from 'react';
import { CartItem } from '../utils/cart';

interface CartItemProps {
  item: CartItem;
  handleQuantityChange: (itemId: number, newQuantity: number) => void;
  removeCartItem: (cartItemId: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, handleQuantityChange, removeCartItem }) => {
  const { product, quantity, id } = item;
  const imageURL = `http://localhost:8000${product.image}`;

  const decrementQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };

  const incrementQuantity = () => {
    handleQuantityChange(id, quantity + 1);
  };

  return (
    <li className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src={imageURL} alt={product.name} className="w-16 h-16 mr-4" />
        <div>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none"
          onClick={decrementQuantity}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="px-4 text-lg">{quantity}</span>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
          onClick={incrementQuantity}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none"
          onClick={() => removeCartItem(id)}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};

export default CartItemComponent;

