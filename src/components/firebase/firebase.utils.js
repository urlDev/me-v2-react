import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBt6pPqOg_eV87fZOjqwy2Ibl0QhjLihAY",
    authDomain: "reactcontactform-9f778.firebaseapp.com",
    databaseURL: "https://reactcontactform-9f778.firebaseio.com",
    projectId: "reactcontactform-9f778",
    storageBucket: "reactcontactform-9f778.appspot.com",
    messagingSenderId: "397318752674",
    appId: "1:397318752674:web:5dd373f3ed992d054e0afb",
    measurementId: "G-JEC6YD4CDX"
};

firebase.initializeApp(config);

export default firebase;