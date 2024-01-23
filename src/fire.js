import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClEmpJE814siyfF05Jb-x7ma0LLKiAdAw",
  authDomain: "task-management-8720f.firebaseapp.com",
  projectId: "task-management-8720f",
  storageBucket: "task-management-8720f.appspot.com",
  messagingSenderId: "73409692005",
  appId: "1:73409692005:web:ba6308c1c548b0df6d618c",
  measurementId: "G-FP9D887JGV"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire; 
