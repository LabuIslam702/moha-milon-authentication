// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM-Q9S97lwE9PXhagUdVtekYDrXyB62lg",
  authDomain: "auth-moha-milon-a91ca.firebaseapp.com",
  projectId: "auth-moha-milon-a91ca",
  storageBucket: "auth-moha-milon-a91ca.appspot.com",
  messagingSenderId: "352746641677",
  appId: "1:352746641677:web:66e998c49c6c393f48f844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
