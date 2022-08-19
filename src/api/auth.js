import {
  ACCESS_KEY,
  API_URL_AUTH,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from './consts';


const urlAuth = new URL(API_URL_AUTH);
urlAuth.searchParams.append('client_id', ACCESS_KEY);
urlAuth.searchParams.append('redirect_uri', REDIRECT_URI);
urlAuth.searchParams.append('response_type', RESPONSE_TYPE);
urlAuth.searchParams.append('scope', SCOPE);

export default urlAuth;
