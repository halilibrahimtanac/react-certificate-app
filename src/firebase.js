import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
