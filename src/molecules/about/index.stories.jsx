import Avatar from 'src/atoms/avatar';

import About from '.';

export default {
  title: 'molecules/About',
  component: About,
};

const Template = (args) => (
  <div style={{ width: 548 }}>
    <About {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  avatar: (
    <Avatar src="https://media.taringa.net/knn/crop:90x90/aHR0cHM6Ly9rNjIua24zLm5ldC90YXJpbmdhL0YvRi85LzgvMy8wL05hY2hvbmUvQUIwLnBuZw" />
  ),
  background:
    'https://media.taringa.net/knn/identity/aHR0cHM6Ly9rNjAua24zLm5ldC90YXJpbmdhL0MvQi9CLzMvQy9BL0RGRC5qcGc',
  children: <p>Extra content</p>,
};
