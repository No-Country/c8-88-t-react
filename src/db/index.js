
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, query, where, doc, setDoc } from "firebase/firestore"
import {
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  signInWithRedirect,
  createUserWithEmailAndPassword } from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth'
import { useSelector } from "react-redux";




const firebaseConfig = {
  apiKey: "AIzaSyCIwvuxr0Tt3MhYe4m4H7rH0iRebY0jPrA",
  authDomain: "travelpack-c2d9e.firebaseapp.com",
  projectId: "travelpack-c2d9e",
  storageBucket: "travelpack-c2d9e.appspot.com",
  messagingSenderId: "1018371128632",
  appId: "1:1018371128632:web:9c50d1cc368f3901bb55cd"
};



export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app)







//registro email
export const regisEmail = async (email, fullName, password) => {
  const info = await createUserWithEmailAndPassword(auth, email, fullName, password)
  const docuRef = doc(firestore,`usuarios/${info.user.uid}`);
  setDoc(docuRef, {correo: email, fullName: fullName, password: password})
    
}
export const login = async (email, fullName, password) => {
  const data = await signInWithEmailAndPassword(auth, email, fullName, password)
} 

// registro google
export const singGoogle = async () => {
  
  const provider = new GoogleAuthProvider()

  try {
    const credentials = await signInWithRedirect(auth, provider)
    console.log(credentials)
  } catch (error) {
    console.log(error)
  }
}



// registro facebook
export const singFacebook = async () => {
  const provider = new FacebookAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    alert("bienvendio" + credentials.user.email)
  } catch (error) {
    console.log(error.message)
  }
}


export async function orderTravellers(orderTravel) {
  const collectionRef = collection(firestore, "orders");
  let rta = await addDoc(collectionRef, orderTravel)
  return rta.id;
};

export async function getTravellerss(destino, origen) {
  const miCollection = collection(firestore, "Travellers");
  const destiny = query(miCollection, where("destino", "==", destino));
  const source = query(miCollection, where("origen", "==", origen));
  const rta = await getDocs(destiny, source);
  let dataDocs = rta.docs.map((documento) => {
    return { ...documento.data(), id: documento.id }
  });
  return dataDocs;
}


export default firestore;