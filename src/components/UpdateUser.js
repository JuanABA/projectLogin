import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/updateUser.css";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserById, updateUser } from "../actions/users";

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserById(id);
      if (userData) {
        Object.keys(userData).forEach((key) => {
          setValue(key, userData[key]);
        });
      }
    };
    getUserData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    await updateUser(id, data);
    navigate("/");
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
        <h1 style={{ textAlign: "center" }}>Edit user</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="username"
            name="username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            id="nombre"
            name="nombre"
            {...register("nombre", { required: "Name is required" })}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            id="edad"
            type="number"
            name="edad"
            {...register("edad", {
              required: "Age is required",
              min: { value: 1, message: "Age must be greater than 0" },
            })}
            error={!!errors.edad}
            helperText={errors.edad?.message}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            id="correo"
            name="correo"
            {...register("correo", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            error={!!errors.correo}
            helperText={errors.correo?.message}
            fullWidth
            margin="normal"
            required
          />

          <Button className="button" variant="contained" type="submit">
            Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

// import { useEffect, useState } from "react";
// import "../styles/updateUser.css";
// import { Button, TextField } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchUserById, updateUser } from "../actions/users";

// const UpdateUser = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     nombre: "",
//     edad: "",
//     correo: "",
//   });
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const getUserData = async () => {
//       const userData = await fetchUserById(id);
//       if (userData) {
//         setUserData(userData);
//       }
//     };
//     getUserData();
//   }, [id]);
//   // Dependencias: El array [id] como segundo argumento del useEffect asegura que useEffect se ejecute cada vez que el id cambie.
//   //  Esto es útil si el componente se renderiza con diferentes IDs (por ejemplo, al navegar entre diferentes usuarios para editar).

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateUser(id, userData);
//     navigate("/");
//   };

//   return (
//     <div
//       style={{
//         width: "50%",
//         marginLeft: "auto",
//         marginRight: "auto",
//       }}
//     >
//       <div className="User">
//         <h1 style={{ textAlign: "center" }}>Edit user</h1>
//         <div>
//           <TextField
//             id="username"
//             label="Username"
//             name="username"
//             value={userData.username}
//             onChange={handleChange}
//             required
//           />
//           {/* <TextField
//           id="contraseña"
//           label="Contraseña"
//           type="password"
//           name="contraseña"
//           onChange={handleChange}
//         /> */}
//           <TextField
//             id="nombre"
//             label="Name"
//             name="nombre"
//             value={userData.nombre}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             id="edad"
//             label="Age"
//             type="number"
//             name="edad"
//             value={userData.edad}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             id="correo"
//             label="Email"
//             name="correo"
//             value={userData.correo}
//             onChange={handleChange}
//             required
//           />
//           <Button className="button" variant="contained" onClick={handleSubmit}>
//             Edit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateUser;
