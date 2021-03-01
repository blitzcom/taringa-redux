import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Article from 'src/components/story/article';

import ArticlesList from './component';

function ArticlesListContainer({ entityId }) {
  const feed = useSelector((state) => selectEntity(state, 'feeds', entityId));

  return <ArticlesList component={Article} items={feed.items} />;
}

ArticlesListContainer.propTypes = {
  entityId: PropTypes.string.isRequired,
};

export default ArticlesListContainer;
