import Title from '.';

export default {
  title: 'atoms/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Inteligencia Colectiva',
};
