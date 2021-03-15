import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';
import selectControl from 'src/selectors/select-control';

import Feed from 'src/organisms/feed';
import Article from 'src/components/article';

function Articles({ username }) {
  const control = useSelector((state) =>
    selectControl(state, 'feeds', username),
  );

  const feed = useSelector((state) => selectEntity(state, 'feeds', username));

  return <Feed Component={Article} control={control} feed={feed} />;
}

Articles.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Articles;
