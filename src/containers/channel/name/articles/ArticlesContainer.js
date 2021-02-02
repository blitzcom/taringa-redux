import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArticlesList from 'src/articles/components/ArticlesList';

import { getControl } from './ArticlesContainer.selectors';

import thunk from './ArticlesContainer.thunk';

function ArticlesContainer({ channelId }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(channelId));
  }, [dispatch, channelId]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <ArticlesList streamName="containers" entityId="channel-articles" />;
}

ArticlesContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ArticlesContainer;
