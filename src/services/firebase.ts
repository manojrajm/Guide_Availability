import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0BIFb5_Pum-Y54_JsEheaNGy1B2ckywI",
    authDomain: "guide-3c7b0.firebaseapp.com",
    databaseURL: "https://guide-3c7b0-default-rtdb.firebaseio.com",
    projectId: "guide-3c7b0",
    storageBucket: "guide-3c7b0.appspot.com",
    messagingSenderId: "559808006921",
    appId: "1:559808006921:web:b17954d1c865139f1221d8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore for use in other parts of the application
export const firestore = getFirestore(app);
