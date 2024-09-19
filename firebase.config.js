// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKpgUUcREmtARjKyZmaP9ZsLRLq_cd_qQ",
  authDomain: "coffey-store.firebaseapp.com",
  projectId: "coffey-store",
  storageBucket: "coffey-store.appspot.com",
  messagingSenderId: "131116208212",
  appId: "1:131116208212:web:cb7ed1c5ac1e48d29f5dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;