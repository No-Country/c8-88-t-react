
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, setDoc } from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FacebookAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCIwvuxr0Tt3MhYe4m4H7rH0iRebY0jPrA",
  authDomain: "travelpack-c2d9e.firebaseapp.com",
  projectId: "travelpack-c2d9e",
  storageBucket: "travelpack-c2d9e.appspot.com",
  messagingSenderId: "1018371128632",
  appId: "1:1018371128632:web:9c50d1cc368f3901bb55cd"
};


/* const analytics = getAnalytics(app); */
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app)

export async function getTravellers() {
  const miTravellers = collection(firestore, "Travellers");
  let snapshotDB = await getDocs(miTravellers);
  let dataDocs = snapshotDB.docs.map((documento) => {
    return { ...documento.data(), id: documento.id }
  });
  return dataDocs
}


// registro google
export const singGoogle = async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials =  await signInWithPopup(auth, provider)
        alert("bienvendio" + " " + credentials.user.displayName)
        
    } catch (error) {
        console.log(error.message)
        
    }
}

// registro facebook
export const singFacebook = async () => {
   const providerF = new FacebookAuthProvider()
   
   try {
    const credentials =  await signInWithPopup(auth, providerF)
    alert("bienvendio" + " " + credentials.user.email)
    
} catch (error) {
    console.log(error.message)
    
}


}



export default firestore;