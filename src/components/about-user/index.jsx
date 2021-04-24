import PropTypes from 'prop-types';

import Emoji from 'src/components/emoji';
import Text from 'src/components/text';
import Margin, { MarginSize } from 'src/components/margin';
import About from 'src/components/about';

import { TextElement } from 'src/helpers/css/text-element';
import { TextSize } from 'src/helpers/css/text-size';

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
    <About background={background} avatar={avatar}>
      <Text element={TextElement.Title} size={TextSize.ExtraLarge}>
        {fullname}
      </Text>
      <Margin top={MarginSize.Tiny} />

      <Text>@{username}</Text>

      <Margin top={MarginSize.Small} />

      <Text>
        <Emoji symbol="🏠" label="Home" />
        <Margin inline left={MarginSize.Tiny} />
        <span>AR</span>

        <Margin inline left={MarginSize.Large} />

        {joinedAt && (
          <>
            <Emoji symbol="📅" label="Calendar" />
            <Margin inline left={MarginSize.Tiny} />
            <span>Se unió en {joinedAt}</span>
          </>
        )}
      </Text>

      <Margin top={MarginSize.Small} />

      {message}

      <Margin top={MarginSize.Small} />

      {children}
    </About>
  );
}

UserAbout.propTypes = {
  avatar: PropTypes.node.isRequired,
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
