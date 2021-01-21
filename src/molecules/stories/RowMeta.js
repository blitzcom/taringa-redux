import { useSelector } from 'react-redux';

function RowMeta({ channelId, children, ownerId }) {
  const owner = useSelector((state) => state.entities.users[ownerId]);
  const channel = useSelector((state) => state.entities.channels[channelId]);

  return (
    <div>
      By <a href={`/${owner.username}`}>{owner.username}</a>
      <span>in</span>
      <a href={`/+${channel.name}`}>{channel.title}</a>
      <span>&bull;</span>
      {children}
    </div>
  );
}

export default RowMeta;
