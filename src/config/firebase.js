import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6TSYfrgR76kO0MHzKiyMaai9JNnDEYsc",
    authDomain: "pethelp-cf322.firebaseapp.com",
    databaseURL: "https://pethelp-cf322.firebaseio.com",
    projectId: "pethelp-cf322",
    storageBucket: "pethelp-cf322.appspot.com",
    messagingSenderId: "545358057241",
    appId: "1:545358057241:web:ae39a79e642d55cc0cbf88"
  };
export default firebase.initializeApp(firebaseConfig);
