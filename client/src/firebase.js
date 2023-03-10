

//import firebase from "firebase";

import * as firebase from "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";


// import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBeS-DTjHTdkTThggh1ZGBwsI5tj-Rl4tw",
    authDomain: "woodworkingproduct.firebaseapp.com",
    projectId: "woodworkingproduct",
    storageBucket: "woodworkingproduct.appspot.com",
    messagingSenderId: "588405437242",
    appId: "1:588405437242:web:f996336decda3289f85603"
});

export default app;
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);


// const auth = getAuth(firebaseApp);

// // const db = getFirestore(firebaseApp);
// // db.collection('products').getDocs();
// // const productCol = collection(db, 'products');
// // const snapshot = await getDocs(productCol);

// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const db = firebaseApp.firestore();
// // const auth = firebase.auth();
// // export { db, auth }


// onAuthStateChanged(auth, user => {
//     if (user !== null) {
//         console.log('Logged in!')
//     } else {
//         console.log('No user')
//     }
// })