import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIwvuxr0Tt3MhYe4m4H7rH0iRebY0jPrA",
  authDomain: "travelpack-c2d9e.firebaseapp.com",
  projectId: "travelpack-c2d9e",
  storageBucket: "travelpack-c2d9e.appspot.com",
  messagingSenderId: "1018371128632",
  appId: "1:1018371128632:web:9c50d1cc368f3901bb55cd"
};

/* const analytics = getAnalytics(app); */
/* const auth = getAuth(app); */
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getTravellers() {
  const miTravellers = collection(firestore, "Travellers");
  let snapshotDB = await getDocs(miTravellers);
  let dataDocs = snapshotDB.docs.map((documento) => {
    return { ...documento.data(), id: documento.id }
  });
  return dataDocs
}

export default firestore;