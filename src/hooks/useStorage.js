import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";
import { firebaseInstance } from "../scripts/firebase";

export default function useStorage(file, name) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [reference, setReference] = useState(null);

  const storage = getStorage(firebaseInstance);
  useEffect(async () => {
    if (file) {
      const storageRef = ref(storage, name + "-" + file.name);
      setReference(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(progress));
          if (snapshot.bytesTransferred === snapshot.totalBytes) {
            setProgress(0);
          }
        },
        (err) => {
          setError(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    }
  }, [file]);

  return { url, progress, error, reference };
}
