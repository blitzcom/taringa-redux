import PropTypes from 'prop-types';

import Text from 'src/components/text';

import { TextElement } from 'src/helpers/css/text-element';

import style from './stats.module.scss';

function Stats({ stats }) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <div className={style.stats}>
      {stats.map((stat) =>
        stat.value ? (
          <Text
            className={style.stat}
            element={TextElement.Inline}
            key={stat.label}
          >
            <b>{stat.value}</b>

            <span className={style.label}>{stat.label}</span>
          </Text>
        ) : null,
      )}
    </div>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    }),
  ),
};

Stats.defaultProps = {
  stats: [],
};

export default Stats;
