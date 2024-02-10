import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBmnojtGaQHyCgostoCIbcq4inev10vMyY",
  authDomain: "alice-ddf78.firebaseapp.com",
  projectId: "alice-ddf78",
  storageBucket: "alice-ddf78.appspot.com",
  messagingSenderId: "232493897318",
  appId: "1:232493897318:web:3d8705d002f344ba7dffa7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };