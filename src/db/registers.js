// import { auth } from './index'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { FacebookAuthProvider} from 'firebase/auth'
// import { AuthProvider } from 'firebase/auth'

// // registro
// export const singUp = (email, fullName, password) => 
//     createUserWithEmailAndPassword(auth, email, fullName, password) + console.log("user add")


// // registro google
// export const singGoogle = async () => {
//     const provider = new GoogleAuthProvider()

//     try {
//         const credentials =  await signInWithPopup(auth, provider)
//         alert("bienvendio" + " " + credentials.user.displayName)
        
//     } catch (error) {
//         console.log(error.message)
        
//     }
// }

// // registro facebook
// export const singFacebook = async () => {
//    const providerF = new FacebookAuthProvider()
   
//    try {
//     const credentials =  await signInWithPopup(auth, providerF)
//     alert("bienvendio" + " " + credentials.user.email)
    
// } catch (error) {
//     console.log(error.message)
    
// }


// }

// //Login
// export const login = async (email, password) => {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password)
//     alert("bienvenido a su cuenta" + " " + userCredential.user)
    


// }


    
