import { collection, where, deleteDoc } from "@firebase/firestore/lite";
import { addDoc, setDoc, updateDoc, getDoc } from "@firebase/firestore/lite";
import { doc, getDocs, query, serverTimestamp } from "@firebase/firestore/lite";

import { fireStoreInstance } from "./firebase";

export async function createDocumentWithId(path, id, data) {
  const documentReference = doc(fireStoreInstance, path, id);
  await setDoc(documentReference, { id: id, ...data });
  return id;
}

export async function createDocument(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const withTimestamp = { createdAt: serverTimestamp(), ...data };
  const documentReference = await addDoc(collectionReference, withTimestamp);
  return documentReference.id;
}

export async function updateDocument(path, id, data) {
  const documentReference = doc(fireStoreInstance, path, id);
  const updated = await updateDoc(documentReference, data);
  return updated;
}

export async function removeDocument(path, id) {
  await deleteDoc(doc(fireStoreInstance, path, id));
}
export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

export async function getQueryCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const q = query(collectionReference, where("published", "==", true));
  const snapshot = await getDocs(q);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

export async function getDocument(path, id) {
  const documentReference = doc(fireStoreInstance, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}
