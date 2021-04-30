import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import selectEntity from 'src/selectors/select-entity';

function LinkChannelContainer({ name }) {
  const channel = useSelector((state) => selectEntity(state, 'channels', name));

  return (
    <Link href={channel.url}>
      <a>{channel.title}</a>
    </Link>
  );
}

LinkChannelContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LinkChannelContainer;
