import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import store from "../redux";
import { LOGOUT } from "../redux/reducers/userDeducer";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

// register
export const register = async (email, password, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    return user;
  } catch (error) {
    console.log(error);
    navigate("/register");
  }
};

// login
export const login = async (email, password, navigate) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

    return user;
  } catch (error) {
    console(error.mesage);
    navigate("/login");
  }
};

// google login
const provider = new GoogleAuthProvider();
export const googleLogin = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

// logout
export const logout = async (navigate) => {
  await signOut(auth);
  navigate("/login");
  console.log(logout);
  return true;
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(LOGOUT(user));
  } else {
    store.dispatch(LOGOUT());
  }
});

export const addTodo = async (data) => {
  try {
    const result = await addDoc(collection(db, "todos"), data);
    return result.id;
  } catch (error) {
    console.log(error);
  }
};

export default app;
