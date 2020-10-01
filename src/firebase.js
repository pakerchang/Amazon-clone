import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBpdj8Kae0RE8zy73edV5-qE8N6LG8T240",
	authDomain: "clone-8001b.firebaseapp.com",
	databaseURL: "https://clone-8001b.firebaseio.com",
	projectId: "clone-8001b",
	storageBucket: "clone-8001b.appspot.com",
	messagingSenderId: "4009608190",
	appId: "1:4009608190:web:bbbb4a7e897e912e09b6af",
	measurementId: "G-25WM8TGBYV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
