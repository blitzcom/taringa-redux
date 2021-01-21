import { useSelector } from 'react-redux';

import RowMeta from './RowMeta';
import RowStats from './RowStats';

function Row({ id }) {
  const story = useSelector((state) => state.entities.items[id]);

  return (
    <article>
      <h2>{story.title}</h2>
      <p>{story.summary?.excerpt}</p>

      <RowMeta ownerId={story.owner} channelId={story.channel}>
        {story.created}
      </RowMeta>

      <RowStats id={id} />
    </article>
  );
}

export default Row;
