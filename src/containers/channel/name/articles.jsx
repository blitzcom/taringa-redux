import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';
import selectControl from 'src/selectors/select-control';

import Feed from 'src/organisms/feed';
import Article from 'src/components/article';

function ArticlesContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'feeds', channelId),
  );

  const feed = useSelector((state) => selectEntity(state, 'feeds', channelId));

  return <Feed Component={Article} control={control} feed={feed} />;
}

ArticlesContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ArticlesContainer;
