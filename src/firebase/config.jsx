import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBX-JUk4vhkzeHb3HT1icpB_xeoZEJm0ow",
  authDomain: "miniblog-9dd03.firebaseapp.com",
  projectId: "miniblog-9dd03",
  storageBucket: "miniblog-9dd03.appspot.com",
  messagingSenderId: "544886216130",
  appId: "1:544886216130:web:dc0d0992adb65e8288725b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}