import Markdown from '.';

export default {
  title: 'atoms/Markdown',
  component: Markdown,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink' }}>
    <Markdown {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: `
    <h1>Markdown</h1>

    <p>Rich html content.</p>

    <b>strong</b> <i>italics</i>

    <blockquote>
      Inteligencia Colectiva - Taringa!
    </blockquote>
  `,
};
