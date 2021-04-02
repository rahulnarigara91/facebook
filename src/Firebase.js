// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFe_nOVzRltHf_vePgzypqN26E2dthRTY",
    authDomain: "facebook-clone-f882f.firebaseapp.com",
    projectId: "facebook-clone-f882f",
    storageBucket: "facebook-clone-f882f.appspot.com",
    messagingSenderId: "249756675196",
    appId: "1:249756675196:web:f917a1a3419cb9683badf9",
    measurementId: "G-D9VMZP5EN2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;