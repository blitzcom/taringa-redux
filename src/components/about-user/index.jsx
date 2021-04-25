import PropTypes from 'prop-types';

import About from 'src/components/about';
import Avatar from 'src/components/avatar';
import Emoji from 'src/components/emoji';
import Text from 'src/components/text';

import { AvatarSize } from 'src/helpers/css/avatar-size';
import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

import style from './about-user.module.scss';

export function UserAbout({
  avatar,
  background,
  fullname,
  joinedAt,
  message,
  username,
  children,
}) {
  return (
    <About
      background={background}
      avatar={
        <Avatar src={avatar} size={AvatarSize.ExtraLarge} rounded shadow />
      }
    >
      <Text element={TextElement.Title} size={TextSize.ExtraLarge}>
        {fullname}
      </Text>
      <div className={style.details}>
        <Text>@{username}</Text>

        <div className={style.information}>
          <Emoji symbol="🏠" label="Home" />
          <Text element={TextElement.Inline} className={style.display}>
            AR
          </Text>

          {joinedAt && (
            <>
              <Emoji symbol="📅" label="Calendar" className={style.label} />
              <Text element={TextElement.Inline} className={style.display}>
                Se unió en {joinedAt}
              </Text>
            </>
          )}
        </div>
      </div>

      {message && (
        <Text leading={TextLeading.Snug} className={style.message}>
          {message}
        </Text>
      )}

      {children}
    </About>
  );
}

UserAbout.propTypes = {
  avatar: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.node,
  fullname: PropTypes.string,
  joinedAt: PropTypes.string.isRequired,
  message: PropTypes.string,
  username: PropTypes.string.isRequired,
};

UserAbout.defaultProps = {
  children: null,
  fullname: '',
  message: '',
};

export default UserAbout;
