import PropTypes from 'prop-types';

import Text from 'src/components/text';

import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

import style from './style.module.scss';

function Story({ title, meta, children }) {
  return (
    <article className={style.article}>
      {title && (
        <Text
          element={TextElement.Title}
          leading={TextLeading.Snug}
          size={TextSize.ExtraLarge2x}
        >
          {title}
        </Text>
      )}

      <div className={style.meta}>{meta}</div>

      {children}
    </article>
  );
}

Story.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

Story.defaultProps = {
  title: null,
};

export default Story;
