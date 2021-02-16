import { useSelector } from 'react-redux';

import ChannelAbout from 'src/channel/components/ChannelAbout';

import { getControl } from './selectors';

function AboutContainer() {
  const control = useSelector(getControl());

  if (control.status === 'fetching' || control.status === 'cancel') {
    return <p>Loading...</p>;
  }

  return <ChannelAbout channelId={control.channelId} />;
}

export default AboutContainer;
