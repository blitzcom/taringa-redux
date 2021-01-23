import Link from 'next/link';
import { useSelector } from 'react-redux';

import RowStats from './RowStats';

function Row({ id }) {
  const story = useSelector((state) => state.objects.items.entities[id]);

  const owner = useSelector(
    (state) => state.objects.users.entities[story.owner],
  );

  const channel = useSelector(
    (state) => state.objects.channels.entities[story.channel],
  );

  return (
    <article>
      <h2>
        <Link href={`/+${channel.name}/${story.slug}`}>{story.title}</Link>
      </h2>

      <p>{story.summary?.excerpt}</p>

      <div>
        By <a href={`/${owner.username}`}>{owner.username}</a>
        <span>in</span>
        <a href={`/+${channel.name}`}>{channel.title}</a>
        <span>•</span>
        {story.created}
      </div>

      <RowStats id={id} />
    </article>
  );
}

export default Row;
