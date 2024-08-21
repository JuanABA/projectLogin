import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { createUser } from "../actions/users";
import { useNavigate } from "react-router-dom";
import "../styles/createUser.css";

const CreateUser = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // Trigger validation on blur
  });

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data);
      console.log("User created successfully: ", response);
      navigate("/");
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Error al crear el usuario");
    }
  };

  return (
    <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="User">
        <h1 style={{ textAlign: "center" }}>Aquí crearemos el usuario</h1>
        <form
          onSubmit={handleSubmit(async (data) => await onSubmit(data))}
          className="form"
        >
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("username", { required: "Username is required" })}
            id="standard-basic"
            label="Username"
            variant="outlined"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*\d)/,
                message:
                  "Password must contain at least one uppercase letter and one number",
              },
            })}
            id="standard-basic"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("nombre", { required: "Name is required" })}
            id="standard-basic"
            label="Name"
            variant="outlined"
            fullWidth
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("edad", {
              required: "Age is required",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Age must be at least 1",
              },
              max: {
                value: 120,
                message: "Age must be less than 120",
              },
            })}
            id="standard-basic"
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            error={!!errors.edad}
            helperText={errors.edad?.message}
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("correo", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            id="standard-basic"
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.correo}
            helperText={errors.correo?.message}
          />
          <Box sx={{ width: "50%", margin: "0 auto" }}>
            <Button
              sx={{
                mt: "10%",
                width: "100%",
              }}
              className="button"
              variant="contained"
              type="submit"
            >
              Registrar
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

// import "../styles/createUser.css";
// import { Button, TextField } from "@mui/material";
// import { createUser } from "../actions/users";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateUser = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [nombre, setNombre] = useState("");
//   const [edad, setEdad] = useState("");
//   const [correo, setCorreo] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     const userData = { username, password, nombre, edad, correo };
//     try {
//       const response = await createUser(userData);
//       console.log("User created succesfully: ", response);
//       navigate("/");
//     } catch (error) {
//       console.error("Error creating user: ", error);
//       alert("Error al crear el usuario");
//     }
//   };

//   return (
//     <div className="User">
//       <h1>aqui crearemos el user</h1>
//       <div>
//         <TextField
//           id="standard-basic"
//           label="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           id="standard-basic"
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <TextField
//           id="standard-basic"
//           label="Nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <TextField
//           id="standard-basic"
//           label="Edad"
//           type="number"
//           value={edad}
//           onChange={(e) => setEdad(e.target.value)}
//         />
//         <TextField
//           id="standard-basic"
//           label="Email"
//           value={correo}
//           onChange={(e) => setCorreo(e.target.value)}
//         />
//         <Button
//           className="button"
//           variant="contained"
//           onClick={async () => await handleSubmit()}
//         >
//           Registrar
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;
