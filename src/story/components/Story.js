import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Blocks from 'molecules/Blocks';

import { getStory } from 'story/Story.selectors';

function Story({ storyId }) {
  const story = useSelector(getStory(storyId));

  return (
    <article>
      <h1>{story.title}</h1>
      <Blocks blocks={story.content} />
    </article>
  );
}

Story.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default Story;
