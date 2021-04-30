import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Blocks from 'src/components/blocks';
import Spinner from 'src/components/spinner';
import Story from 'src/components/story';
import Void from 'src/components/void';

import Author from 'src/containers/author';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

function StoryContainer({ storyId }) {
  const story = useSelector((state) => selectEntity(state, 'stories', storyId));

  const control = useSelector((state) =>
    selectControl(state, 'stories', storyId),
  );

  if (
    typeof control === 'undefined' ||
    control.status === summaryControlStatus.PreLoading
  ) {
    return (
      <Void>
        <Spinner />
      </Void>
    );
  }

  if (
    control.status === summaryControlStatus.Upgraded ||
    control.status === summaryControlStatus.Upgrading
  ) {
    return (
      <Story title={story.title} meta={<Author storyId={storyId} />}>
        {control.status === summaryControlStatus.Upgrading && (
          <Void>
            <Spinner />
          </Void>
        )}

        {control.status === summaryControlStatus.Upgraded && (
          <Blocks blocks={story.content} />
        )}
      </Story>
    );
  }

  return null;
}

StoryContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryContainer;
