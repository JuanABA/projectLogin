import React, { useState } from "react";
import "../styles/Login.css";
import userImage from "../images/user.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import fondo from "../images/fondoA.jpg";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const signIn = async () => {
    await login(username, password);
  };

  return (
    <>
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
          <div className="main-form">
            <img className="image" src={userImage} alt="user" />
            <div className="divIcon">
              <PersonIcon className="icons" />
              <input
                type="text"
                name="username"
                placeholder="  Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="divIcon">
              <LockIcon className="icons" />
              <input
                type="text"
                name="password"
                placeholder="  Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <br />
            <Button
              className="button"
              variant="contained"
              onClick={async () => await signIn()}
            >
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
