import Paper from '.';

export default {
  title: 'atoms/Paper',
  component: Paper,
};

const Template = (args) => <Paper {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <h1>Paper</h1>

      <p>Extra content</p>
    </>
  ),
};
