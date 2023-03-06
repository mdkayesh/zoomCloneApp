import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOWb3UVWM0JxrHjIz5-dNk3N7dkDdmoQU",
  authDomain: "zoom-ecommerce-clone.firebaseapp.com",
  projectId: "zoom-ecommerce-clone",
  storageBucket: "zoom-ecommerce-clone.appspot.com",
  messagingSenderId: "943443578349",
  appId: "1:943443578349:web:fdb79bce0fd4fcc79debe4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);

const productsRef = collection(db, "products");
const blogRef = collection(db, "blogPost");

export { productsRef, storage, db, blogRef };
