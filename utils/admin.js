import admin from 'firebase-admin'
import serviceAccount from '../secrets.json';

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://mybrand-7d0ef.firebaseio.com"
        })
    }
    return admin
    .auth()
    .verifyIdToken(token)
    .catch((error)=> {
        throw error
    })
}