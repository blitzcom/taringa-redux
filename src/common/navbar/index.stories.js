import Nav from '.';

export default {
  title: 'Common',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Navbar = Template.bind({});
