import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC-XkKAZirFgzcl__XTZr-q9C72YK2374Q",
  authDomain: "fine-chef.firebaseapp.com",
  projectId: "fine-chef",
  storageBucket: "fine-chef.appspot.com",
  messagingSenderId: "847564609823",
  appId: "1:847564609823:web:6ccf22a1686354e56db82a"

};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }
