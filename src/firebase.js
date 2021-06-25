import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyArq-7zypGYLXOxGzOZOt6Yl_FQILvtfQo",
  authDomain: "oddaj-rzeczy-7848a.firebaseapp.com",
  projectId: "oddaj-rzeczy-7848a",
  storageBucket: "oddaj-rzeczy-7848a.appspot.com",
  messagingSenderId: "407564096309",
  appId: "1:407564096309:web:84098f11e2bb3b8478727c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();


