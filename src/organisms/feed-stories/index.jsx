import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Spinner from 'src/atoms/spinner';

import RowArticleContainer from 'src/molecules/row-article';
import Void from 'src/atoms/void';

function FeedStory({ items, component: Component }) {
  return items.map((id) => <Component key={id} itemId={id} />);
}

FeedStory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.elementType,
};

FeedStory.defaultProps = {
  component: RowArticleContainer,
};

function FeedStoryContainer({ feedId }) {
  const control = useSelector((state) => selectControl(state, 'feeds', feedId));
  const feed = useSelector((state) => selectEntity(state, 'feeds', feedId));

  if (control?.status === 'loaded') {
    return <FeedStory items={feed.items} />;
  }

  return (
    <Void display="flex" justify="center">
      <Spinner />
    </Void>
  );
}

FeedStoryContainer.propTypes = {
  feedId: PropTypes.string.isRequired,
};

export default FeedStoryContainer;
