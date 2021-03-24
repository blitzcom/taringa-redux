import { AboutChannel } from '.';

export default {
  title: 'organisms/AboutChannel',
  component: AboutChannel,
};

const Template = (args) => (
  <div style={{ width: 548 }}>
    <AboutChannel {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  background:
    'https://media.taringa.net/knn/identity/aHR0cHM6Ly9rNjAua24zLm5ldC90YXJpbmdhL0MvQi9CLzMvQy9BL0RGRC5qcGc',
  category: 'entertainment/taringa',
  description: 'Bienvenidos a Offtopic!',
  thumbnail:
    'https://media.taringa.net/knn/crop:90x90/aHR0cHM6Ly9rNjIua24zLm5ldC90YXJpbmdhL0YvRi85LzgvMy8wL05hY2hvbmUvQUIwLnBuZw',
  title: 'Offtopic',
};
