import axios from 'axios';

export const fetchPosts = async () => {
  return await axios.get('http://localhost:5000/posts');
};

export const searchPosts = async (searchTerm) => {
  return await axios.get(`http://localhost:5000/posts/?q=${searchTerm}`);
};

export const searchPostsByCatgeory = async (postCategory) => {
  return await axios.get(
    `http://localhost:5000/posts/?categories=${postCategory}`,
  );
};

export const searchPostsByTag = async (postTag) => {
  return await axios.get(`http://localhost:5000/posts/?postTags=${postTag}`);
};

export const fetchPost = async (postId) => {
  return await axios.get(`http://localhost:5000/posts/${postId}`);
};
