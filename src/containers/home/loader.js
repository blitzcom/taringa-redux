import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Loader() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_HOME_PAGE' });

    return () => dispatch({ type: 'CANCEL_HOME_PAGE' });
  }, [dispatch]);

  return null;
}

export default Loader;
