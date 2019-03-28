import firebase from 'firebase';

export const loginUserRequest = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
