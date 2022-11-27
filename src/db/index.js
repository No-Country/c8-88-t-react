
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, query, where } from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth'


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



// registro google
export const singGoogle = async () => {
  const provider = new GoogleAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    alert("bienvendio" + " " + credentials.user.displayName)
  } catch (error) {
    console.log(error.message)
  }
}

// registro facebook
export const singFacebook = async () => {
  const providerF = new FacebookAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, providerF)
    alert("bienvendio" + " " + credentials.user.email)
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

// export async function orderDetail(id) {
//   const docRef = doc(firestore, "orders", id)
//   const docSnapshot = await getDocs(docRef);
//   return console.log({ ...docSnapshot.data(), id: docSnapshot.id })
// }



export default firestore;