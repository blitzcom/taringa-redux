import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChannelAbout from 'src/channel/components/ChannelAbout';

import { getControl } from './AboutContainer.selectors';

import thunk from './AboutContainer.thunk';

function AboutContainer({ channelId }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(channelId));
  }, [dispatch, channelId]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <ChannelAbout channelId={control.channelId} />;
}

AboutContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default AboutContainer;
