import {
  ACCESS_KEY,
  API_URL_TOKEN,
  REDIRECT_URI,
  SECRET_KEY,
} from './consts';


export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  const authUrl = new URL(location.href);
  const code = authUrl.searchParams.get('code');

  let token = '';

  const url = new URL(API_URL_TOKEN);
  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', 'authorization_code');

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
  } else if (location.pathname.includes('/auth')) {
    fetch(url, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        token = data.access_token;
        console.log('token: ', token);
        setToken(token);
      });
  }
  return token;
};
