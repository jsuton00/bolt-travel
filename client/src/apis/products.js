import axios from 'axios';

export const fetchProducts = async () => {
  return await axios.get('http://localhost:5000/products');
};

export const searchProducts = async (searchTerm) => {
  return await axios.get(`http://localhost:5000/products/?q=${searchTerm}`);
};

export const fetchProduct = async (productId) => {
  return await axios.get(`http://localhost:5000/products/${productId}`);
};
