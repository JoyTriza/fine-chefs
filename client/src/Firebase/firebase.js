import firebase from "firebase/compat/app"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUefQwL4ZQicIoYJ1GFQSv43bzIXykp8I",
  authDomain: "b-green-3ccb3.firebaseapp.com",
  projectId: "b-green-3ccb3",
  storageBucket: "b-green-3ccb3.appspot.com",
  messagingSenderId: "523000924133",
  appId: "1:523000924133:web:62135107d1fc2f3602d10c",
  measurementId: "G-NT6R0WNK0W"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }