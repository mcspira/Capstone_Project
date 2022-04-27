import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyCKs-hXbwCcrV8SiNIFRxTX0J63h9PJ0Rs",
  
    authDomain: "crwn-clothing-db-f2731.firebaseapp.com",
  
    projectId: "crwn-clothing-db-f2731",
  
    storageBucket: "crwn-clothing-db-f2731.appspot.com",
  
    messagingSenderId: "155263109348",
  
    appId: "1:155263109348:web:87a2491fbebc5d243e04f1"
  
  };
  
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInGoogleWithPopup = () => signInWithPopup(auth, provider)