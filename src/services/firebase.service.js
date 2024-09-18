import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyBlxfl6JMweUHGpLFOEX38hInWhzQix3vY",
    authDomain: "dmlf-edc52.firebaseapp.com",
    projectId: "dmlf-edc52",
    storageBucket: "dmlf-edc52.appspot.com",
    messagingSenderId: "968651455726",
    appId: "1:968651455726:web:58763f84180a08595107ff",
    measurementId: "G-7G635B4PVZ"
  }; NONO bad */
  
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

// Initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Signup funktion
export const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  
};

// Login funktion (hvis du vil bruge den)
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error during signup:", error.message); // Log the error
    throw new Error("Signup failed, please try again.");  // Throw a custom error
    // not enough to simply throw error, you need to add value to the error message

  }
};

