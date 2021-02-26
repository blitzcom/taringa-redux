import controlsCreator from './controls-creator';

describe('reducers/controls', () => {
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

  def('control', () => controlsCreator($.options));
  def('actions', () => $.control.actions);
  def('subject', () => $.control.reducer($.state, $.action));

  it('creates control for entities', () => {
    expect($.subject).toEqual({
      foo: { status: 'loaded', error: null },
      bar: { status: 'loaded', error: null },
    });
  });

  it('generates actions', () => {
    expect($.actions.load.type).toEqual('controls/users/load');
    expect($.actions.load('1a').error).toBeUndefined();
    expect($.actions.load('1a')).toEqual({
      type: 'controls/users/load',
      payload: '1a',
    });

    expect($.actions.success.type).toEqual('controls/users/success');
    expect($.actions.success('2c').error).toBeUndefined();
    expect($.actions.success('2c')).toEqual({
      type: 'controls/users/success',
      payload: '2c',
    });

    expect($.actions.failure.type).toEqual('controls/users/failure');
    expect($.actions.failure('4d', 'timeout')).toEqual({
      type: 'controls/users/failure',
      payload: '4d',
      error: 'timeout',
    });
  });

  context('when action does not contains entities', () => {
    def('action', () => ({
      type: 'unknown',
    }));

    def('state', () => ({
      foo: { status: 'loaded', error: null },
    }));

    it('returns previous state', () => {
      expect($.subject).toEqual({
        foo: { status: 'loaded', error: null },
      });
    });
  });

  context('when state contains entity', () => {
    def('entities', () => ({
      channels: {
        foo: { name: 'foo' },
        bar: { name: 'bar' },
        zap: { name: 'zap' },
      },
    }));

    def('state', () => ({
      foo: { status: 'loading', error: null },
      faz: { status: 'error', error: 'timeout' },
    }));

    def('options', () => ({
      name: 'channels',
    }));

    it('merges new only', () => {
      expect($.subject).toEqual({
        foo: { status: 'loading', error: null },
        faz: { status: 'error', error: 'timeout' },
        bar: { status: 'loaded', error: null },
        zap: { status: 'loaded', error: null },
      });
    });
  });

  context('when action is load', () => {
    def('action', () => ({
      type: 'controls/users/load',
      payload: 'bar',
    }));

    def('state', () => ({
      foo: { status: 'loaded', error: null },
      faz: { status: 'loading', error: null },
      bar: { status: 'error', error: 'timeout' },
    }));

    it('changes to loading state', () => {
      expect($.subject).toEqual({
        foo: { status: 'loaded', error: null },
        faz: { status: 'loading', error: null },
        bar: { status: 'loading', error: null },
      });
    });

    context('when control does not exists', () => {
      def('action', () => ({
        type: 'controls/users/load',
        payload: 'bar',
      }));

      def('state', () => undefined);

      it('returns loading state', () => {
        expect($.subject).toEqual({
          bar: { status: 'loading', error: null },
        });
      });
    });
  });

  context('when action is success', () => {
    def('action', () => ({
      type: 'controls/channels/success',
      payload: 'foo',
    }));

    def('options', () => ({
      name: 'channels',
    }));

    def('state', () => ({
      foo: { status: 'loading', error: null },
      faz: { status: 'loaded', error: null },
      bar: { status: 'error', error: 'timeout' },
    }));

    it('changes to loading state', () => {
      expect($.subject).toEqual({
        foo: { status: 'loaded', error: null },
        faz: { status: 'loaded', error: null },
        bar: { status: 'error', error: 'timeout' },
      });
    });
  });

  context('when action is failure', () => {
    def('action', () => ({
      type: 'controls/stories/failure',
      payload: 'bar',
      error: 'forbidden',
    }));

    def('options', () => ({
      name: 'stories',
    }));

    def('state', () => ({
      foo: { status: 'error', error: 'timeout' },
      faz: { status: 'loaded', error: null },
      bar: { status: 'loading', error: null },
    }));

    it('changes to loading state', () => {
      expect($.subject).toEqual({
        foo: { status: 'error', error: 'timeout' },
        faz: { status: 'loaded', error: null },
        bar: { status: 'failure', error: 'forbidden' },
      });
    });
  });
});
