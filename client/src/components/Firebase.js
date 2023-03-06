import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDRtthwkDX38Eto9gsa1wDDLIdmg1u-Neo",
    authDomain: "woodworking-d9a7e.firebaseapp.com",
    databaseURL: "https://woodworking-d9a7e-default-rtdb.firebaseio.com",
    projectId: "woodworking-d9a7e",
    storageBucket: "woodworking-d9a7e.appspot.com",
    messagingSenderId: "260796999866",
    appId: "1:260796999866:web:fca716eec1a4795d89ba83"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth }