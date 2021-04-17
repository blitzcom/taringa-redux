import Avatar from 'src/atoms/avatar';
import Link from 'src/atoms/link';

import { Comment } from '.';

export default {
  title: 'molecules/Comment',
  component: Comment,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink', maxWidth: 550, margin: '0 auto' }}>
    <Comment {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  avatar: (
    <Avatar
      rounded
      src="https://media.taringa.net/knn/crop:90x90/aHR0cHM6Ly9hMTEudDI2Lm5ldC90YXJpbmdhL2F2YXRhcmVzLzMvNy85L0IvOS9FL2hlcm44NC8xMjB4MTIwX0I4MC5qcGc"
    />
  ),
  user: (
    <Link href="/u/taringa">
      <b>taringa</b>
    </Link>
  ),
  body:
    'Nullam enim sem, tincidunt a magna vel, vestibulum molestie risus. Nam  arcu purus, elementum vitae tortor et, commodo rhoncus nisi.',
};
