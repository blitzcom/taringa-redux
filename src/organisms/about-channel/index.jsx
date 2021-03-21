import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Spinner from 'src/atoms/spinner';
import Paper from 'src/atoms/paper';

import Stats from 'src/molecules/stats-channel';

import style from './style.module.css';

function AboutChannel({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  if (control?.status === 'loaded') {
    return (
      <Paper flat>
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
          <p>{channel.description}</p>
        </div>
      </Paper>
    );
  }

  return <Spinner />;
}

AboutChannel.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default AboutChannel;
