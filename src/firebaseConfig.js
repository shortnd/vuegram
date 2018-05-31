import firebase, { firestore } from 'firebase'
import 'firebase/firestore'

// Firebase init goes here
var config = {
  apiKey: "AIzaSyC5jTfLblzpRSFg6TDNJw96nKYh3xq1QRI",
  authDomain: "vuegram-c3b68.firebaseapp.com",
  databaseURL: "https://vuegram-c3b68.firebaseio.com",
  projectId: "vuegram-c3b68",
  storageBucket: "",
  messagingSenderId: "821861871623"
};
firebase.initializeApp(config);

// firebase utils
const database = firebase.firestore()
const authentication = firebase.auth()
const currentUser = authentication.currentUser

// date issue fix according to firebase
const settings = { timestampsInSnapshots: true }
database.settings(settings)

//firebase collections
const usersCollection = database.collection('users')
const postsCollection = database.collection('posts')
const commentsCollection = database.collection('comments')
const likesCollection = database.collection('likes')

export {
  database,
  authentication,
  currentUser,
  usersCollection,
  commentsCollection,
  likesCollection
}
