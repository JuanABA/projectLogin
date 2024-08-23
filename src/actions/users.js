import axios from "axios";
import apiRoutes from "../api/routes";

export const Login = async (username, password) => {
  try {
    const response = await axios.post(
      apiRoutes.login,
      { username: username, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const fetchUsers = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(apiRoutes.list, {
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
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(apiRoutes.create, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(apiRoutes.forgotPassword, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting email:", error);
  }
};

export const fetchUserById = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(apiRoutes.listById(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const updateUser = async (userId, updateData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(apiRoutes.update(userId), updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const DeleteUser = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(apiRoutes.delete(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
