import { removeDocument } from "../../scripts/fireStore";
import { removeFile } from "../../scripts/storage";

export default function ButtonDelete({ hook }) {
  const [navigate, category, id, imageRef] = hook;

  async function remove() {
    const prompt = window.confirm("Are you sure you want to remove this?");
    if (prompt) {
      await removeDocument(category, id);
      navigate(-1);
    } else return null;
  }

  return (
    <button onClick={remove} type="reset" className="button-delete">
      Remove
    </button>
  );
}
