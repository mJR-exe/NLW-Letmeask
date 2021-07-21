import firebase from 'firebase/app';
import { variables } from '../variables';

import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: variables.REACT_APP_API_KEY,
    authDomain: variables.REACT_APP_AUTH_DOMAIN,
    databaseURL: variables.REACT_APP_DATABASE_URL,
    projectId: variables.REACT_APP_PROJECT_ID,
    storageBucket: variables.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: variables.REACT_APP_MESSAGING_SENDER_ID,
    appId: variables.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export { firebase, auth, database }