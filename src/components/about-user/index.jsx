import PropTypes from 'prop-types';

import { TitleSize } from 'src/components/atoms/title/constants';

import Emoji from 'src/components/atoms/emoji';
import Title from 'src/components/atoms/title';
import Text from 'src/components/atoms/text';
import Margin, { MarginSize } from 'src/atoms/margin';

import About from 'src/components/about';

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
      <Title size={TitleSize.Large}>{fullname}</Title>
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
