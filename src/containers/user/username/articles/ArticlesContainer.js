import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArticlesList from 'src/articles/components/ArticlesList';

import { getControl } from './ArticlesContainer.selectors';

import thunk from './ArticlesContainer.thunk';

function ArticlesContainer({ username }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(username));
  }, [dispatch, username]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <ArticlesList streamName="users" entityId={username} />;
}

ArticlesContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ArticlesContainer;
