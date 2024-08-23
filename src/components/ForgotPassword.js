import React, { useState } from "react";
import { forgotPassword } from "../actions/users";
import { Alert, Button, Snackbar, TextField } from "@mui/material";

const ForgotPassword = () => {
  const [correo, setCorreo] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleSubmit = async () => {
    const userData = { correo };
    try {
      const response = await forgotPassword(userData);
      if (response) {
        console.log("done successfully: ", response);
        setAlertMessage("Correo enviado correctamente.");
        setAlertSeverity("success");
        setOpen(true);
      } else {
        setAlertMessage("No se encontró un usuario con ese correo.");
        setAlertSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      console.error("Error: ", error);
      setAlertMessage("Error al enviar el correo.");
      setAlertSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Ocupa toda la altura de la ventana
        width: "70vh",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "80%",
          maxWidth: "400px", // Máximo ancho para evitar que se estire demasiado en pantallas grandes
          padding: "20px",
          boxSizing: "border-box", // Incluye padding en el ancho total
        }}
      >
        <h1>Recuperar contraseña</h1>
        <p>Ingrese su email para recuperar su contraseña</p>
        <TextField
          type="email"
          placeholder="Email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          fullWidth
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="button"
          style={{ width: "100%" }}
        >
          Enviar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={alertSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default ForgotPassword;
