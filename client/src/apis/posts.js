import axios from 'axios';

export const fetchPosts = async () => {
  return await axios.get('https://bolt-travel-server.herokuapp.com/posts');
};

export const searchPosts = async (searchTerm) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/posts/?q=${searchTerm}`,
  );
};

export const searchPostsByCatgeory = async (postCategory) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/posts/?categories=${postCategory}`,
  );
};

export const searchPostsByTag = async (postTag) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/posts/?postTags=${postTag}`,
  );
};

export const fetchPost = async (postId) => {
  return await axios.get(
    `https://bolt-travel-server.herokuapp.com/posts/${postId}`,
  );
};
