// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1SlgRVnDMYuR73EQtqKlbxv3jpIsgq30",
    authDomain: "streaming-001luciano.firebaseapp.com",
    projectId: "streaming-001luciano",
    storageBucket: "streaming-001luciano.appspot.com",
    messagingSenderId: "879004210938",
    appId: "1:879004210938:web:549ba5d246bb2be3081b43"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
