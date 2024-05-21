import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/products/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};