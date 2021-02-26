import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function StorySlug({ storyId, children }) {
  const slug = useSelector((state) => {
    const story = selectEntity(state, 'stories', storyId);
    const channel = selectEntity(state, 'channels', story.channel);

    return `/c/${channel.name}/${story.slug}`;
  });

  return (
    <Link href={slug}>
      <a>{children}</a>
    </Link>
  );
}

StorySlug.propTypes = {
  storyId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StorySlug;
