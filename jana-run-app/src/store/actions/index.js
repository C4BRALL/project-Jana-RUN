export const VERIFY_LOGIN = 'VERIFY_LOGIN';

export const actionSignIn = (username, password) => ({
  type: VERIFY_LOGIN,
  user: {
    username,
    password,
  }
});
