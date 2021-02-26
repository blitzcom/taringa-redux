import entitiesCreator from './entities-creator';

describe('reducers/entities', () => {
  def('entities', () => ({
    users: {
      foo: { username: 'foo' },
      bar: { username: 'bar' },
    },
  }));

  def('payload', () => ({
    entities: $.entities,
  }));

  def('action', () => ({
    type: 'unknown',
    payload: $.payload,
  }));

  def('state', () => undefined);

  def('options', () => ({
    name: 'users',
  }));

  def('creator', () => entitiesCreator($.options));
  def('subject', () => $.creator($.state, $.action));

  it('merges entities', () => {
    expect($.subject).toEqual({
      foo: { username: 'foo' },
      bar: { username: 'bar' },
    });
  });

  context('when action does not contains related entities', () => {
    def('entities', () => ({}));

    it('returns default state', () => {
      expect($.subject).toEqual({});
    });
  });

  context('when action does not contains entities key', () => {
    def('action', () => ({
      type: 'unknown',
    }));

    it('returns default state', () => {
      expect($.subject).toEqual({});
    });
  });

  context('when action contains multiple entities', () => {
    def('options', () => ({ name: 'channels' }));

    def('entities', () => ({
      users: {
        foo: { username: 'foo' },
      },
      channels: {
        offtopic: { name: 'offtopic' },
      },
    }));

    it('cherry picks related entities and merges', () => {
      expect($.subject).toEqual({
        offtopic: { name: 'offtopic' },
      });
    });

    context('when action does not contains related entities', () => {
      def('entities', () => ({}));

      it('returns last state', () => {
        expect($.subject).toEqual({});
      });
    });
  });

  context('when state contains entities', () => {
    def('options', () => ({ name: 'comments' }));

    def('entities', () => ({
      comments: {
        '1a': { message: 'foo...' },
        '3b': { message: 'update...' },
      },
    }));

    def('state', () => ({
      '3b': { message: 'bar...' },
      '4c': { message: 'faz...' },
    }));

    it('merges with previous entities in the state', () => {
      expect($.subject).toEqual({
        '1a': { message: 'foo...' },
        '3b': { message: 'update...' },
        '4c': { message: 'faz...' },
      });
    });
  });
});
