import Text from '.';

export default {
  title: 'atoms/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Inteligencia Colectiva',
};
