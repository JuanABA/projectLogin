const apiUrl = process.env.REACT_APP_API_URL;

const apiRoutes = {
  list: `${apiUrl}/users`,
  listById: (id) => `${apiUrl}/users/${id}`,
  create: `${apiUrl}/users/create`,
  login: `${apiUrl}/login`,
  update: (id) => `${apiUrl}/users/update/${id}`,
  delete: (id) => `${apiUrl}/users/delete/${id}`,
};

export default apiRoutes;
