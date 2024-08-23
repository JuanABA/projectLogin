import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import userImage from "../images/user.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import fondo from "../images/fondoA.jpg";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const signIn = async (data) => {
    const { username, password } = data;
    await login(username, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="main-container">
        <form className="main-form" onSubmit={handleSubmit(signIn)}>
          <img className="image" src={userImage} alt="user" />

          <div className="divIcon">
            <PersonIcon className="icons" />
            <input
              type="text"
              name="username"
              placeholder="  Username"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}

          <div className="divIcon">
            <LockIcon className="icons" />
            <input
              type="password"
              name="password"
              placeholder="  Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <br />
          <Button className="button" variant="contained" type="submit">
            Ingresar
          </Button>
        </form>
        <a style={{ marginTop: "15px", color: "white" }} href="ForgotPassword">
          ¿olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};

export default Login;
