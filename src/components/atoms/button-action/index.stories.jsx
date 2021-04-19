import ButtonAction from '.';

export default {
  title: 'atoms/ButtonAction',
  component: ButtonAction,
};

const Template = (args) => <ButtonAction {...args} />;

export const Default = Template.bind({});

Default.args = {
  count: 0,
  singular: 'Comentario',
  plural: 'Comentarios',
};
