import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Article from 'src/article/components/article';

import ArticlesList from './component';

function ArticlesListContainer({ streamName, entityId }) {
  const control = useSelector((state) =>
    selectControl(state, 'feeds', 'articles'),
  );

  const feed = useSelector((state) => selectEntity(state, 'feeds', 'articles'));

  if (control) {
    return <ArticlesList component={Article} items={feed.items} />;
  }

  return null;
}

ArticlesListContainer.propTypes = {
  entityId: PropTypes.string.isRequired,
  streamName: PropTypes.string.isRequired,
};

export default ArticlesListContainer;
