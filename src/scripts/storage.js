import { getStorage, ref, deleteObject } from "@firebase/storage";
import { firebaseInstance } from "./firebase";
const storage = getStorage(firebaseInstance);

export async function removeFile(file) {
  const fileRef = ref(storage, file);
  await deleteObject(file);
}

export async function getReference(file) {
  const fileRef = ref(storage, file);
  return fileRef;
}
