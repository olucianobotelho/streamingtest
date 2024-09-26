// src/components/Dashboard.js

import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <Container>
      <h2>Bem-vindo, {user && user.email}</h2>
      <p>Conteúdo exclusivo para membros.</p>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Sair
      </Button>
    </Container>
  );
}

export default Dashboard;
