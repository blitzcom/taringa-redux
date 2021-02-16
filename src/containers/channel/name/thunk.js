import getAbout from './about/thunk';
import getArticles from './articles/thunk';

import { getControl as getAboutControl } from './about/selectors';
import { getControl as getArticlesControl } from './articles/selectors';

import aboutActions from './about/reducer';
import articlesActions from './articles/reducer';

export function load(channelId) {
  return (dispatch) => {
    return dispatch(getArticles(channelId)).then(() => {
      return dispatch(getAbout(channelId));
    });
  };
}

export function clean() {
  return (dispatch, getState) => {
    const state = getState();
    const aboutControl = getAboutControl()(state);
    const articlesControl = getArticlesControl()(state);

    if (
      aboutControl.status === 'fetched' &&
      articlesControl.status === 'fetched'
    ) {
      dispatch(articlesActions.clean());
      dispatch(aboutActions.clean());
    } else {
      setTimeout(() => {
        dispatch(aboutActions.cancel());
        dispatch(articlesActions.cancel());
      }, 250);
    }

    return Promise.resolve();
  };
}
