import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAlD7Z3JLcyqkQnBWZB48i8Zn46L4mtI-k",
  authDomain: "test-marioplan-e83c8.firebaseapp.com",
  databaseURL: "https://test-marioplan-e83c8.firebaseio.com",
  projectId: "test-marioplan-e83c8",
  storageBucket: "test-marioplan-e83c8.appspot.com",
  messagingSenderId: "797317943899"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;