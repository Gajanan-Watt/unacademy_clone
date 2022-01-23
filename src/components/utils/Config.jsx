
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCWDXXmfG2WxRMLBTcCcc5G7dM8E7wxmF4",
//   authDomain: "unacademy-clone.vercel.app",
//   projectId: "fir-auth-58d47",
//   storageBucket: "fir-auth-58d47.appspot.com",
//   messagingSenderId: "582035892169",
//   appId: "1:582035892169:web:5c1d8561b67cfc6f39ea18",
//   measurementId: "G-DPZBG1VD5N",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAjybY4pev4zMhbDRioGMETj_8I70h4gNQ",
  authDomain: "unacademy-clone-11a11.firebaseapp.com",
  projectId: "unacademy-clone-11a11",
  storageBucket: "unacademy-clone-11a11.appspot.com",
  messagingSenderId: "830572030637",
  appId: "1:830572030637:web:4ff4622053ed0b15927424",
  measurementId: "G-8Q27YGG4TR"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };