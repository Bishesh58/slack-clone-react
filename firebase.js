// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD12udz2fvDosgVzPREWNh_DnrtcdLyZXU",
    authDomain: "slack-clone-6003c.firebaseapp.com",
    projectId: "slack-clone-6003c",
    storageBucket: "slack-clone-6003c.appspot.com",
    messagingSenderId: "374591219785",
    appId: "1:374591219785:web:14d0ffca16d1866d11f798",
    measurementId: "G-HH3XQDTF4V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  //  export {  db, auth , provider}; In this case we need to destructure on import
  export default db;
  // This case we can import like --> Import db from './firebase'


