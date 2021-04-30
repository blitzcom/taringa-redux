import PropTypes from 'prop-types';
import Link from 'next/link';

import Avatar from 'src/components/avatar';
import Text from 'src/components/text';

import { AvatarSize } from 'src/helpers/css/avatar-size';
import { TextElement } from 'src/helpers/css/text-element';

import style from './author.module.scss';

function Author({ avatar, fullname, username, meta, href }) {
  return (
    <div className={style.author}>
      <Avatar src={avatar} rounded size={AvatarSize.Large} shadow />

      <div className={style.information}>
        <Text element={TextElement.Inline}>
          {fullname}

          <span> · </span>

          <Link href={href}>
            <a>@{username}</a>
          </Link>
        </Text>

        {meta && <div className={style.meta}>{meta}</div>}
      </div>
    </div>
  );
}

Author.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullname: PropTypes.string,
  href: PropTypes.string.isRequired,
  meta: PropTypes.node,
  username: PropTypes.string.isRequired,
};

Author.defaultProps = {
  fullname: null,
  meta: null,
};

export default Author;
