import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function useFeed(trigger) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trigger());
  }, []);
}

export default useFeed;
