import * as firebase from 'firebase'
import "firebase/firestore"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQp0rn15Ll9SImfJFhj8CjXGGQqVKZQLE",
    authDomain: "santry-chat.firebaseapp.com",
    projectId: "santry-chat",
    storageBucket: "santry-chat.appspot.com",
    messagingSenderId: "764333447492",
    appId: "1:764333447492:web:ef9f3df659f090b48b9f11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

  export default firestore