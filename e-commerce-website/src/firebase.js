import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByxtolvE2DDVCyLy7kTWm8AaGCw4I_yNQ",
    authDomain: "interiordesignauth-57e10.firebaseapp.com",
    projectId: "interiordesignauth-57e10",
    storageBucket: "interiordesignauth-57e10.firebasestorage.app",
    messagingSenderId: "98634954391",
    appId: "1:98634954391:web:98e078734fbb695f80dbd2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };