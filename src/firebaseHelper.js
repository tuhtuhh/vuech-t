import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDKTde3J45rIQ0irtzYe6pmAiE54e9uhY8',
  authDomain: 'vuechatter.firebaseapp.com',
  databaseURL: 'https://vuechatter.firebaseio.com',
  projectId: 'vuechatter',
  storageBucket: 'vuechatter.appspot.com',
  messagingSenderId: '557487976049',
};
Firebase.initializeApp(config);

export default Firebase;
