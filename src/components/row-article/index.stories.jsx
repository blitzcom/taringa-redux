import { RowArticle } from '.';

export default {
  title: 'molecules/RowArticle',
  component: RowArticle,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink', maxWidth: 550, margin: '0 auto' }}>
    <RowArticle {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  articleSubtitle:
    'Cras sit amet odio eu eros fermentum vestibulum quis quis risus. Phasellus condimentum posuere tortor, non imperdiet sapien tristique id. Pellentesque turpis ipsum, bibendum in nibh in, facilisis bibendum est. Fusce fermentum, orci vel tempus molestie, orci lorem tincidunt elit, quis malesuada mi ligula et orci. Cras rutrum justo lorem, sit amet consectetur risus dictum sit amet.',
  articleThumbnail:
    'https://media.taringa.net/knn/crop:150x115/Z3M6Ly9rbjMvNWUwZTI1MzA4YjI5ZWZkZGI0Y2NjMDVlNTYxYWUwNGQuanBn',
  articleTitle:
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci',
  articleUrl: '/c/offtopic/post',
  channelName: 'Offtopic',
  channelUrl: '/c/offtopic',
  ownerUrl: '/u/taringa',
  ownerUsername: 'taringa',
};
