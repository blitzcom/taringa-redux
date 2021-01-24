import PropTypes from 'prop-types';
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
        <Link href={`/c/${channel.name}/${story.slug}`}>
          <a>{story.title}</a>
        </Link>
      </h2>

      <p>{story.summary?.excerpt}</p>

      <div>
        By <a href={`/${owner.username}`}>{owner.username}</a>
        <span>in</span>
        <Link href={`/c/${channel.name}`}>
          <a> {channel.title}</a>
        </Link>
        <span>•</span>
        {story.created}
      </div>

      <RowStats id={id} />
    </article>
  );
}

Row.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Row;
