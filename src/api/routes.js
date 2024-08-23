const apiUrl = process.env.REACT_APP_API_URL;

const apiRoutes = {
  list: `${apiUrl}/users`,
  listById: (id) => `${apiUrl}/users/${id}`,
  create: `${apiUrl}/users/create`,
  forgotPassword: `${apiUrl}/forgot-password`,
  resetPassword: (id, token) => `${apiUrl}/reset-password/${id}/${token}`,
  login: `${apiUrl}/login`,
  update: (id) => `${apiUrl}/users/update/${id}`,
  delete: (id) => `${apiUrl}/users/delete/${id}`,
};

export default apiRoutes;
