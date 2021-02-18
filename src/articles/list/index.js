import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getStream } from 'src/articles/Articles.selectors';
import Article from 'src/article/components/article';

import ArticlesList from './component';

function ArticlesListContainer({ streamName, entityId }) {
  const stream = useSelector(getStream(streamName, entityId));

  if (stream) {
    return <ArticlesList component={Article} items={stream.items} />;
  }

  return null;
}

ArticlesListContainer.propTypes = {
  entityId: PropTypes.string.isRequired,
  streamName: PropTypes.string.isRequired,
};

export default ArticlesListContainer;
