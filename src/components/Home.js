import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteUser, fetchUsers } from "../actions/users";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(-1);
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
    { field: "nombre", headerName: "Name", width: 200 },
    { field: "edad", headerName: "Age", width: 200 },
    { field: "correo", headerName: "Email", width: 200 },
    {
      field: "acciones", // Campo para las acciones
      headerName: "Actions", // Nombre de la columna
      width: 150,
      renderCell: (
        params // Función para renderizar las acciones
      ) => (
        <div style={{ marginTop: "5%" }}>
          <EditIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/updateUser/${params.row.id}`)}
          ></EditIcon>
          <DeleteIcon
            sx={{ marginLeft: "40px", cursor: "pointer" }}
            onClick={() => {
              setOpen(true);
              setRowToDelete(params.row.id);
            }}
          ></DeleteIcon>
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", fontSize: "32px" }}>User List</h1>
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
          Register
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={() => setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              ¿Estas seguro de eliminar este usuario?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>No</Button>
            <Button
              onClick={async () => {
                const response = await DeleteUser(rowToDelete);
                if (response.message) {
                  setOpen(false);
                  getUsers();
                }
              }}
            >
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default UsersList;
