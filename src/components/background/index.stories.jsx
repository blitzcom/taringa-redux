import Background from '.';

export default {
  title: 'atoms/Background',
  component: Background,
};

const Template = (args) => <Background {...args} />;

export const Default = Template.bind({});

Default.args = {
  src:
    'https://media.taringa.net/knn/identity/aHR0cHM6Ly9rNjAua24zLm5ldC90YXJpbmdhL0UvMS80LzkvMS8zLzkwNi5qcGc',
};
