const ENTITY_NAME = 'items';

export function getArticle(articleId) {
  return (state) => state.objects[ENTITY_NAME].entities[articleId];
}
