// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB68g99YuWKkIaXMAQQHQdbY1Ce5oIJSz4",
  authDomain: "microblogging-eitan.firebaseapp.com",
  projectId: "microblogging-eitan",
  storageBucket: "microblogging-eitan.appspot.com",
  messagingSenderId: "138521218442",
  appId: "1:138521218442:web:559d15227224c9b447cc73",
  measurementId: "G-81DCPNXDKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, auth, storage }
