import axios from 'axios';

export const fetchProducts = async () => {
  return await axios.get('https://bolt-travel-server.herokuapp.com/products');
};

export const searchProducts = async (searchTerm) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/products/?q=${searchTerm}`,
  );
};

export const fetchProduct = async (productId) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/products/${productId}`,
  );
};
