// src/components/Register.js

import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/dashboard"))
      .catch((error) => alert(error.message));
  };

  return (
    <Container maxWidth="sm">
      <h2>Registrar-se</h2>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        style={{ marginRight: "10px" }}
      >
        Registrar
      </Button>
      <Button color="secondary" onClick={() => navigate("/")}>
        Já tem uma conta? Entrar
      </Button>
    </Container>
  );
}

export default Register;
