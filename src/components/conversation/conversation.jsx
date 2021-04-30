import PropTypes from 'prop-types';

import Text from 'src/components/text';
import { TextColor } from 'src/helpers/css/text-color';
import { TextSize } from 'src/helpers/css/text-size';

import style from './conversation.module.scss';

function Conversation({ children, count }) {
  return (
    <section className={style.section}>
      <div className={style.header}>
        <Text
          className={style.title}
          size={TextSize.Base}
          color={TextColor.Secondary}
        >
          <b>
            {count} {count === 1 ? 'Comentario' : 'Comentarios'}
          </b>
        </Text>
      </div>

      <ul className={style.list}>{children}</ul>
    </section>
  );
}

Conversation.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Conversation.defaultProps = {
  count: 0,
};

export default Conversation;
