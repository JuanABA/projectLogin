import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "../context/AuthContext";
import axios from "axios";
import jwtDecode from "jwt-decode";

// Mock Axios
jest.mock("axios");
const mockedAxios = axios;

// Mock jwtDecode
jest.mock("jwt-decode");
const mockedJwtDecode = jwtDecode;

// Mock alert
global.alert = jest.fn();

const mockLogin = jest.fn();

const MockAuthProvider = ({ children }) => {
  const auth = {
    user: "testuser",
    login: mockLogin,
    logout: jest.fn(),
    loading: false,
    token: "mockToken",
  };

  return <AuthProvider value={auth}>{children}</AuthProvider>;
};

const renderLogin = () => {
  return render(
    <MemoryRouter>
      <MockAuthProvider>
        <Login />
      </MockAuthProvider>
    </MemoryRouter>
  );
};

test("displays an alert on login failure", async () => {
  // Mock a failed login response
  mockedAxios.post.mockRejectedValue(new Error("Network Error"));

  renderLogin();

  // Fill in the login form and submit
  fireEvent.change(screen.getByPlaceholderText(/username/i), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "password123" },
  });
  fireEvent.click(screen.getByText(/ingresar/i));

  // Assert that the alert function was called
  await waitFor(() => {
    expect(global.alert).toHaveBeenCalledWith("Invalid credentials");
  });
});
