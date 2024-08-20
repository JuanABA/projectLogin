import api from "../api/api";

const token = localStorage.getItem("token");

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
