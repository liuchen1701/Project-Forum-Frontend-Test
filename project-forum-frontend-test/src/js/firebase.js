import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5MlXrsCvzce3Qum3H-jALMDcYX8mHEcw",
    authDomain: "project-forum-test.firebaseapp.com",
    databaseURL: "https://project-forum-test.firebaseio.com",
    projectId: "project-forum-test",
    storageBucket: "project-forum-test.appspot.com",
    messagingSenderId: "727817481404"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;