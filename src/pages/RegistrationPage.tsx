import React, { useState } from 'react';
import { apiRequest } from '../utils/api';



const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '', // Изменено с confirmPassword на password2
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      setError('Пароли не совпадают');
      return;
    }
  
    console.log('Sending data:', { 
      username: formData.username,
      email: formData.email,
      password1: formData.password1,
      password2: formData.password2,
    });
  
    try {
      const data = await apiRequest('POST', '/api/register/', {
        username: formData.username,
        email: formData.email,
        password1: formData.password1,
        password2: formData.password2,
      });
  
      setSuccess('Регистрация успешна!');
      setError('');
      console.log('Успешная регистрация:', data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка регистрации');
      console.error('Ошибка:', err.response?.data || err.message);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Регистрация</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Имя
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password1" className="block text-gray-700 font-bold mb-2">
            Пароль
          </label>
          <input
            type="password"
            id="password1"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
            <div className="mb-6">
            <label htmlFor="password2" className="block text-gray-700 font-bold mb-2">
              Подтвердите Пароль
            </label>
            <input
              type="password"
              id="password2" // Изменено с confirmPassword на password2
              name="password2" // Изменено с confirmPassword на password2
              value={formData.password2} // Изменено с confirmPassword на password2
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
    </div> 
            {error && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-green-500 text-sm text-center">
            {success}
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
