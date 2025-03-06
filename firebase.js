const firebaseConfig = {
    apiKey: "AIzaSyC_Xw8FWG04xpxQXyrYDkQK5u82_yCYp0w",
    authDomain: "eduadapt-8e62e.firebaseapp.com",
    projectId: "eduadapt-8e62e",
    storageBucket: "eduadapt-8e62e.firebasestorage.app",
    messagingSenderId: "1002156798282",
    appId: "1:1002156798282:web:c51e9231ae08d268c8d1b3",
    measurementId: "G-74W748KTRP"
  };
  //export const firebaseConfig; // Ensure this is exported if using modules

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();