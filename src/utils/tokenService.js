export const tokenService = {
  getAccessToken: () => localStorage.getItem('access_token'),

  setTokens: (access) => {
    localStorage.setItem('access_token', access);
  },

  clearTokens: () => {
    localStorage.removeItem('access_token');
  },
};