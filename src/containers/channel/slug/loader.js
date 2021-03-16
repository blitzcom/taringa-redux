import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Loader({ payload }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_CHANNEL_SLUG_PAGE', payload });

    return () => dispatch({ type: 'CANCEL_CHANNEL_SLUG_PAGE' });
  }, [dispatch, payload]);

  return null;
}

export default Loader;
