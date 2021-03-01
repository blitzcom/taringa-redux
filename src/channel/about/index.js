import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Card from 'src/common/card';
import Paper from 'src/common/card/paper';

import Description from 'src/channel/description';
import Stats from 'src/channel/stats';

import style from './style.module.css';

function ChannelAbout({ channelId }) {
  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  return (
    <Card>
      <Paper>
        <img
          className={style.background}
          src={channel.background}
          alt={channel.title}
        />

        <div className={style.about}>
          <img
            className={style.thumbnail}
            src={channel.thumbnail}
            alt={channel.title}
            width={60}
            height={60}
          />
          <div className={style.meta}>
            <div>
              <h1 className={style.title}>{channel.title}</h1>
              <p className={style.category}>{channel.category}</p>
              <Stats channelId={channelId} />
            </div>

            <div className={style.actions}>
              <button className={style.join} type="button">
                Join
              </button>
            </div>
          </div>
          <Description value={channel.description} />
        </div>
      </Paper>
    </Card>
  );
}

ChannelAbout.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ChannelAbout;
