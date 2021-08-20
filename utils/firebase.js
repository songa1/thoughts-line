import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyD2VpqKlzYjEZ12tET3roqOiSRoeMTIVEg",
    authDomain: "mybrand-7d0ef.firebaseapp.com",
    databaseURL: "https://mybrand-7d0ef.firebaseio.com",
    projectId: "mybrand-7d0ef",
    storageBucket: "mybrand-7d0ef.appspot.com",
    messagingSenderId: "577345070417",
    appId: "1:577345070417:web:ac596825573afb19ae9f70",
    measurementId: "G-JM89H9RRWJ"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}