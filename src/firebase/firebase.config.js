import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCayhBtEDUkiIxPh7RI0woysUfAhainykI",
  authDomain: "just-mechanic-355021.firebaseapp.com",
  projectId: "just-mechanic-355021",
  storageBucket: "just-mechanic-355021.appspot.com",
  messagingSenderId: "598047085080",
  appId: "1:598047085080:web:663f84b988e70a992fa96d"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)