import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCMZo2UTDRWBfzbTWSrAeexie4lgOTRFl0",
  authDomain: "distribution-site-eec4f.firebaseapp.com",
  databaseURL: "https://distribution-site-eec4f.firebaseio.com",
  projectId: "distribution-site-eec4f",
  storageBucket: "distribution-site-eec4f.appspot.com",
  messagingSenderId: "853804619693",
  appId: "1:853804619693:web:db69647f4a3e1372b93324",
  measurementId: "G-KYV7TQ76HW"
};

firebase.initializeApp(firebaseConfig);

export default firebase