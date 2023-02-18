import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
//const cors = require('cors')({origin:true})
//const streamChat = require('stream-chat').StreamChat
//const serverStreamClient = streamChat.getInstance(functions.config().stream.key,functions.config().stream.secret);
admin.initializeApp();   

export const Register = functions.auth.user().onCreate(user=>{
    const customClaims = {
        "https://hasura.io/jwt/claims":{
            'x-hasura-default-role': 'user',
            'x-hasura-allowed-roles': ['user'],
            'x-hasura-user-id': user.uid
        }
    }
    return admin.auth().setCustomUserClaims(user.uid, customClaims).then(()=>{
        const metaDataRef = admin.database().ref(`metadata/${user.uid}`)
        return metaDataRef.set({refreshTime: new Date().getTime()})
    });
})

// export const streamUsers = functions.https.onRequest((request, response) => {
//     cors(request,response,async()=> {
//         const {user} = request.body;
//         if(!user){
//             throw new functions.https.HttpsError('failed-precondition', 'Bad request');
//         }else{
//             try{
//                 await serverStreamClient.upsertUsers([{
//                     id: user.uid,
//                     name: user.displayName,
//                     email:user.email
//                 }])
//                 response.status(200).send({message:"user created"})

//             }catch(e){
//                 throw new functions.https.HttpsError('aborted','could not create stream user');
//             }
//         }
//     })
// });
