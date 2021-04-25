import PropTypes from 'prop-types';

import Text from 'src/components/text';
import Emoji from 'src/components/emoji';

import { TextElement } from 'src/helpers/css/text-element';

import style from './stats-emoji.module.scss';

function StatsEmoji({ stats }) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <div className={style.stats}>
      {stats.map((stat) => (
        <div className={style.stat} key={stat.label}>
          <Emoji symbol={stat.symbol} label={stat.label} />
          <Text className={style.label} element={TextElement.Inline}>
            {stat.value}
          </Text>
        </div>
      ))}
    </div>
  );
}

StatsEmoji.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    }),
  ),
};

StatsEmoji.defaultProps = {
  stats: [],
};

export default StatsEmoji;
