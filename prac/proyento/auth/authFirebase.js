import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5hkFG3hVLvsyEQ1zeqrkMze5D7GtgV7c",
    authDomain: "webporky-c34cb.firebaseapp.com",
    projectId: "webporky-c34cb",
    storageBucket: "webporky-c34cb.firebasestorage.app",
    messagingSenderId: "1012910879499",
    appId: "1:1012910879499:web:520914082af18f1adaa80e",
    measurementId: "G-G1J8DS9W17"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Auth
const auth = getAuth(app);

// Exportar `auth` para usarlo en otros scripts
export { auth, signInWithEmailAndPassword, signOut };