import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUIileXejTwrVPkVmVnv38W2E1Hngs_9Q",
    authDomain: "linkedin-clone-react-96a8c.firebaseapp.com",
    projectId: "linkedin-clone-react-96a8c",
    storageBucket: "linkedin-clone-react-96a8c.appspot.com",
    messagingSenderId: "673986069921",
    appId: "1:673986069921:web:08fbef5b26bf6b3853b7e0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();

export { db, auth, provider }