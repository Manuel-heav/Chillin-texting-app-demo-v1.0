import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyA45MEiH1IATHO_18fPI47BACq33oiR49k",
        authDomain: "facebook-messenger-clone-cd66b.firebaseapp.com",
        projectId: "facebook-messenger-clone-cd66b",
        storageBucket: "facebook-messenger-clone-cd66b.appspot.com",
        messagingSenderId: "372562017387",
        appId: "1:372562017387:web:8f3b0d81f301edc106852e",
        measurementId: "G-RL9Q4MYL4F"
    })
const db = firebaseApp.firestore();
export default db;