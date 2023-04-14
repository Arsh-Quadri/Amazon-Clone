import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD1YRxhT-nHTAwMPk8YcNgrRJWsOZ11z6M",
    authDomain: "clone-f0114.firebaseapp.com",
    projectId: "clone-f0114",
    storageBucket: "clone-f0114.appspot.com",
    messagingSenderId: "109138013613",
    appId: "1:109138013613:web:b33263a02d4a99866f4524",
    measurementId: "G-3JJDS14GT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };









// import * as firebase from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";




// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyD1YRxhT-nHTAwMPk8YcNgrRJWsOZ11z6M",
//     authDomain: "clone-f0114.firebaseapp.com",
//     projectId: "clone-f0114",
//     storageBucket: "clone-f0114.appspot.com",
//     messagingSenderId: "109138013613",
//     appId: "1:109138013613:web:b33263a02d4a99866f4524",
//     measurementId: "G-3JJDS14GT0"
// });

// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

// export { db, auth };

