// src/components/Login.js

import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/dashboard"))
      .catch((error) => alert(error.message));
  };

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
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
        onClick={handleLogin}
        style={{ marginRight: "10px" }}
      >
        Entrar
      </Button>
      <Button color="secondary" onClick={() => navigate("/registrar")}>
        Registrar-se
      </Button>
    </Container>
  );
}

export default Login;
