// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXLdz_9EK_fy91QXdBVXstsg-Sx3LE7E",
  authDomain: "instafood-2f7f6.firebaseapp.com",
  projectId: "instafood-2f7f6",
  storageBucket: "instafood-2f7f6.appspot.com",
  messagingSenderId: "476571541163",
  appId: "1:476571541163:web:66ec29edf38663cbc9a1ee",
  // measurementId: "G-LR41GBPQ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

