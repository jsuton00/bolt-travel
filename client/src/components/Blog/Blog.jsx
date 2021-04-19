import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/storeConfig/actions';

export const useBlogs = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.posts.filteredPosts);

  useEffect(() => {
    const timer = setTimeout(() => {
      return dispatch(actions.fetchPosts());
    });
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return [blogPosts];
};
