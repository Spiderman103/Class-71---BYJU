import firebase from 'firebase';
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBR87rtvMlASMHbSn5Eszs2LryEFFp64M8",
    authDomain: "e-library-897a8.firebaseapp.com",
    projectId: "e-library-897a8",
    storageBucket: "e-library-897a8.appspot.com",
    messagingSenderId: "852503664227",
    appId: "1:852503664227:web:2674dac89e19c22b20ca56"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebase.firestore();