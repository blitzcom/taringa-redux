import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Spinner from 'src/components/spinner';

import RowArticleContainer from 'src/components/row-article';
import Void from 'src/components/void';

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
    <Void>
      <Spinner />
    </Void>
  );
}

FeedStoryContainer.propTypes = {
  feedId: PropTypes.string.isRequired,
};

export default FeedStoryContainer;
