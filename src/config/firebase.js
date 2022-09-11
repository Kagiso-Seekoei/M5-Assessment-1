import * as firebase from 'firebase';

const firebaseConfig = {
    REACT_APP_FIREBASE_API_KEY: "AIzaSyCX9piYpnmrFYDFfv4uj54Df6Tz9o0WlgY",
    REACT_APP_FIREBASE_AUTH_DOMAIN: "MTNacademy.firebaseapp.com",
    REACT_APP_FIREBASE_DATABASE_URL: "https://MTNacademy.firebaseio.com",
    REACT_APP_FIREBASE_PROJECT_ID: "337808685872",
    REACT_APP_FIREBASE_STORAGE_BUCKET: "MTNacademy.appspot.com",
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "YOUR-PROJECT-SENDER-ID",
    REACT_APP_FIREBASE_APP_ID: "1:337808685872:android:102f197f94412d2bd9a6f5",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
