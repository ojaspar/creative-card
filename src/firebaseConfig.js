import Firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgg7eNcqJ41tTCJe2CU_HQez4z4zz4ILQ",
    authDomain: "creative-card-app.firebaseapp.com",
    databaseURL: "https://creative-card-app.firebaseio.com",
    projectId: "creative-card-app",
    storageBucket: "creative-card-app.appspot.com",
    messagingSenderId: "838734721452"
  };
  Firebase.initializeApp(config);