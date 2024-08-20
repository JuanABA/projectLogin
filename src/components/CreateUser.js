import "../styles/createUser.css";
import { Button, TextField } from "@mui/material";
import { createUser } from "../actions/users";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password, nombre, edad, correo };
    try {
      const response = await createUser(userData);
      console.log("User created succesfully: ", response);
      navigate("/");
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Error al crear el usuario");
    }
  };

  return (
    <div className="User">
      <h1>aqui crearemos el user</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            label="Edad"
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <TextField
            label="Email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
