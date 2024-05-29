import axios from 'axios';
// src/utils/api.ts
import { Product } from '../types';




export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://127.0.0.1:8000/api/products/'); // Обновите URL на актуальный путь к вашему JSON файлу
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: Product[] = await response.json();
  return data;
};

const API_BASE_URL = 'http://127.0.0.1:8000/';

 
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Включение передачи кук
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFTOKEN': 'zMkv5eD3Wfb8ASRMujM3A2boQ9LEL52cXrEz12RnMXSwXlYKg97wqVMskA9pdkE9', // Добавьте ваш CSRF-токен здесь
  },
});

// Функция для выполнения запросов
export const apiRequest = async (method: string, url: string, data?: any) => {
  try {
    const response = await api.request({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error: any) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
};