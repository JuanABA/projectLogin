import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchUsers } from "../actions/users";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "edad", headerName: "Edad", width: 200 },
    { field: "correo", headerName: "Correo", width: 200 },
    {
      field: "acciones", // Campo para las acciones
      headerName: "Acciones", // Nombre de la columna
      width: 150,
      // renderCell: (params) => ( // Función para renderizar las acciones
      //   // <div>
      //   //   <Button size="small" color="primary" onClick={() => handleEdit(params.row.id)}>Editar</Button>
      //   //   <Button size="small" color="secondary" onClick={() => handleDelete(params.row.id)}>Eliminar</Button>
      //   // </div>
      // ),
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Hola {user.username}</h1>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={users} columns={columns} pageSize={5} />
        </div>
        <Button
          className="button"
          variant="contained"
          onClick={() => {
            navigate("/createUser");
          }}
        >
          Ingresar
        </Button>
      </div>
    </>
  );
};

export default UsersList;
