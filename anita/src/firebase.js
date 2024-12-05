import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Modular import for Database
import { getStorage } from "firebase/storage";   // Modular import for Storage

const firebaseConfig = {
  apiKey: "AIzaSyAKWfy_CssQJrrwKMWpwe8Rk8rpeQJv4JE",
  authDomain: "anita-9b8b6.firebaseapp.com",
  projectId: "anita-9b8b6",
  storageBucket: "anita-9b8b6.firebasestorage.app",
  messagingSenderId: "418842380483",
  appId: "1:418842380483:web:88b477898daf9e261dfa76",
  measurementId: "G-BMDJRNCRPR"
};


const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };