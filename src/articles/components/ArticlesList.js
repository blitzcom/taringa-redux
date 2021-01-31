import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getStream } from 'articles/Articles.selectors';

import Article from 'article/components/Article';

function ArticlesList({ streamName, entityId }) {
  const stream = useSelector(getStream(streamName, entityId));

  if (stream) {
    return stream.items.map((id) => <Article key={id} articleId={id} />);
  }

  return null;
}

ArticlesList.propTypes = {
  streamName: PropTypes.string.isRequired,
  entityId: PropTypes.string.isRequired,
};

export default ArticlesList;
