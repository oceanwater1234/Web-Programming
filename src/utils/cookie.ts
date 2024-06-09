export const REFRESH_TOKEN_KEY = 'Refresh';

export const REFRESH_TOKEN_OPTION = () => ({
  httpOnly: true,
  secure: true,
  maxAge: 2592000000,
});