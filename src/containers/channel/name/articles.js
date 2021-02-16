import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ArticlesList from 'src/articles/components/articles-list';

import selectControl from 'src/util/selectors/selectControl';

function ArticlesContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channel/articles', channelId),
  );

  if (control?.status === 'fetched') {
    return <ArticlesList streamName="containers" entityId={channelId} />;
  }

  return <p>Loading...</p>;
}

ArticlesContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ArticlesContainer;
