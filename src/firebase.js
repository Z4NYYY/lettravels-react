import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtUrlt31uDA38HNYIO_A1j7KTMEiTasSY",
    authDomain: "login-1f81a.firebaseapp.com",
    projectId: "login-1f81a",
    storageBucket: "login-1f81a.firebasestorage.app",
    messagingSenderId: "990971254009",
    appId: "1:990971254009:web:c08fb34a0f704f4ec5be28",
    measurementId: "G-YE4K7NXZ92"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
