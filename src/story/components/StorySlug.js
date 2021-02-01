import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getSlug } from 'src/story/Story.selectors';

function StorySlug({ storyId, children }) {
  const slug = useSelector(getSlug(storyId));

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
