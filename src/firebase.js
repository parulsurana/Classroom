import firebase from "firebase"




const firebaseConfig = {
    apiKey: "AIzaSyBB2Xb9ufs8Ev08c_lz_n2JGPM2AcY5xfA",
    authDomain: "classroom-ff5af.firebaseapp.com",
    projectId: "classroom-ff5af",
    storageBucket: "classroom-ff5af.appspot.com",
    messagingSenderId: "811762767050",
    appId: "1:811762767050:web:56859bb552a7c9b4fd9033",
    measurementId: "G-KQTWRP7745"
  };


  const firebaseAp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const auth = firebase.auth();
  export{db, auth};