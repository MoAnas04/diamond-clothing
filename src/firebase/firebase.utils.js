import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDbLfXFPcvecbb9kiSQBJA0W3bSeQ_q4Lw',
  authDomain: 'diamond-db-a56ff.firebaseapp.com',
  projectId: 'diamond-db-a56ff',
  storageBucket: 'diamond-db-a56ff.appspot.com',
  messagingSenderId: '531451986280',
  appId: '1:531451986280:web:8140c06a8f2934b75d96dd',
  measurementId: 'G-7S3MPV1ZMJ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const userAuthObj = {
      displayName: userAuth.displayName,
      email: userAuth.email,
      createdAt: new Date(),
      additionalData,
    };

    try {
      await userRef.set(userAuthObj);
    } catch (e) {
      console.log('Error creating user: ' + e.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
