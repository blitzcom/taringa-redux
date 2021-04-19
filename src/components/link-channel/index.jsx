import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

function LinkChannel({ name }) {
  const channel = useSelector((state) => selectEntity(state, 'channels', name));

  return (
    <Link href={`/c/${channel.name}`}>
      <a>
        <b>{channel.title}</b>
      </a>
    </Link>
  );
}

LinkChannel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LinkChannel;
