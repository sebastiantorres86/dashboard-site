import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC_yErDordbO1s3b7Wt0k3bY3HZB7_DBjU',
  authDomain: 'json-to-firestore-demo.firebaseapp.com',
  projectId: 'json-to-firestore-demo',
  storageBucket: 'json-to-firestore-demo.appspot.com',
  messagingSenderId: '239261430428',
  appId: '1:239261430428:web:6f0b7431440b833ab6f359'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
