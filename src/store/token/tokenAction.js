import { tokenSlice } from './tokenSlice';
import {
  ACCESS_KEY,
  API_URL_TOKEN,
  HOME_URL,
  REDIRECT_URI,
  SECRET_KEY,
} from '../../api/consts';


export const tokenClearAsync = () => (dispatch) => {
  dispatch(tokenSlice.actions.tokenDelete());
  console.log('сработал tokenClearAsync из tokenAction');
};

export const tokenAsync = () => (dispatch) => {
  const authUrl = new URL(location.href);
  const code = authUrl.searchParams.get('code');
  // console.log('сработал tokenAsync из tokenAction');
  let token = '';

  const url = new URL(API_URL_TOKEN);
  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', 'authorization_code');

  if (localStorage.getItem('bearer') &&
    localStorage.getItem('bearer') !== 'undefined') {
    token = localStorage.getItem('bearer');
    console.log('token_FROM_LOCAL_STORAGE: ', token);

    dispatch(tokenSlice.actions.tokenUpdate({ token }));
  } else if (location.pathname.includes('/auth')) {
    console.log('в адресной строке содержится "/auth" и мы получаем token по "fetch" запросу!!!');
    history.pushState(null, null, HOME_URL);

    fetch(url, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        token = data.access_token;
        localStorage.setItem('bearer', token);
        // console.log('token_from_fetch_response: ', token);

        dispatch(tokenSlice.actions.tokenUpdate({ token }));
      })
      .catch((error) => {
        console.error('ошибка в tokenAsync (tokenAction.js)!!!', error);

        dispatch(tokenSlice.actions.tokenUpdateError({ error }));
      });
  }
};
