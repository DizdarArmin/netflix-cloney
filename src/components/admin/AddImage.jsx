import { useEffect, useState } from "react";
import useStorage from "../../hooks/useStorage";
import { removeFile } from "../../scripts/storage";

export default function AddImage({ hook }) {
  const [name, image, setImage, setImageRef] = hook;
  const [file, setFile] = useState(null);
  const { url, progress, reference } = useStorage(file, name);

  useEffect(() => {
    if (url) {
      setImage(url);
    }
  }, [url]);

  useEffect(() => {
    if (reference) {
      setImageRef(reference);
    }
  }, [reference]);

  function addFile(e) {
    if (reference) {
      removeFile(reference);
    }
    setFile(e.target.files[0]);
    setImageRef(reference);
  }
  return (
    <div>
      <label>
        Thumbnail image
        <input
          type="file"
          onChange={(e) => addFile(e)}
          accept="image/png, image/jpeg"
        />
      </label>

      <progress max="100" value={progress} />
    </div>
  );
}
