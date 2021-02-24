import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyARxeXD1DVCHrruGiul4UKy23tgEfSH_rU",
    authDomain: "e-learning-react.firebaseapp.com",
    projectId: "e-learning-react",
    storageBucket: "e-learning-react.appspot.com",
    messagingSenderId: "366242974318",
    appId: "1:366242974318:web:860310e18ce9b7de58f47f",
    measurementId: "G-4EDBMDEQ1R"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
