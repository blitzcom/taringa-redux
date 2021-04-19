import Blocks from '.';

export default {
  title: 'molecules/Blocks',
  component: Blocks,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink', maxWidth: 550, margin: '0 auto' }}>
    <Blocks {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  blocks: [
    {
      id: 1,
      type: 'markdown',
      body: `
          <h2>Markdown block</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui
            augue. Aliquam auctor nunc mi, sed ornare urna euismod vitae. Proin
            venenatis tortor nibh, et euismod tellus scelerisque ut. Vestibulum ac
            imperdiet libero. Pellentesque at libero justo. Praesent cursus eros at
            tortor ornare tincidunt. Cras malesuada nisl diam, in eleifend lectus
            fermentum ac. Pellentesque dignissim ut leo sed interdum. Nam vehicula,
            dui id malesuada laoreet, odio sapien varius lectus, placerat volutpat
            nisi erat quis nisi. Cras sagittis nunc ac mauris ullamcorper
            vestibulum.
          </p>
      `,
    },
    {
      id: 2,
      type: 'image',
      url:
        'https://media.taringa.net/knn/fit:550/aHR0cHM6Ly9rNDYua24zLm5ldC90YXJpbmdhLzEvOS84LzUvNi83LzY4L2Rhc2hhcmNvaXJpcy9CMzIuanBn',
      width: 329,
      height: 447,
      widthStyle: { maxWidth: 329 },
      paddingStyle: { paddingBottom: `${(447 / 329) * 100}%` },
    },
    {
      id: 3,
      type: 'markdown',
      body: `
        <p>
          Nullam enim sem, tincidunt a magna vel, vestibulum molestie risus. Nam
          arcu purus, elementum vitae tortor et, commodo rhoncus nisi. Donec a
          viverra lacus. Sed laoreet tellus interdum mauris efficitur, sed porta
          felis cursus. Donec accumsan massa pulvinar urna venenatis pellentesque.
          Nunc aliquam, diam vitae eleifend laoreet, nisi erat convallis quam, sed
          ultrices erat ipsum eu est. Pellentesque luctus nunc sed dictum blandit.
          Sed nec mauris risus. Donec ut velit rhoncus, sagittis nibh in,
          fringilla erat. Nullam nisl leo, tempus ut venenatis sed, scelerisque
          vel risus. Nulla lacinia augue eget lacus volutpat, sit amet venenatis
          ligula malesuada. Sed varius nec lacus vehicula iaculis.
        </p>
        <p>
          Sed nec mauris risus. Donec ut velit rhoncus, sagittis nibh in,
          fringilla erat. Nullam nisl leo, tempus ut venenatis sed, scelerisque
          vel risus. Nulla lacinia augue eget lacus volutpat, sit amet venenatis
          ligula malesuada. Sed varius nec lacus vehicula iaculis.
        </p>

    `,
    },
  ],
};
