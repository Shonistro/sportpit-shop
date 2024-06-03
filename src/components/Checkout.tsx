import React, { useState } from 'react';
import { CartItem } from '../hooks/useCart';
import useCart from '../hooks/useCart';

interface CheckoutProps {
  items: CartItem[];
  totalPrice: number;
}

const Checkout: React.FC<CheckoutProps> = ({ items, totalPrice }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь можно отправить данные формы и информацию о заказе на сервер
    console.log('Отправка заказа:', formData, items);
    clearCart();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Оформлення замовлення</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
          Ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-1">
          Адреса
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Товары в корзине</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <div>{item.name}</div>
                <div>
                  {item.quantity} x ${item.price.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">
            Итого: ${totalPrice.toFixed(2)}
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
};

export default Checkout;