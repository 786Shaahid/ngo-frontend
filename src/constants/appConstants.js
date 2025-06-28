export const BASE_API_PATH =
  process.env.NODE_ENV === 'production' ? 'https://vastrika.net/api/' : 'http://localhost:2001/';

export const ERROR_MESSAGES = {
  ACCOUNT_NOT_ACTIVATED: 'Your account is not activated yet, please check your email.'
};