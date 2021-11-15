import { language as local } from "../Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { save } from "../../scripts/LocalStorage";

export default function LangSelect() {
  const navigate = useNavigate();
  const [translation, setTranslation] = useRecoilState(local);

  function setLang(e) {
    setTranslation(e.target.value);
    save("language", e.target.value);
    navigate(`/${e.target.value}`);
  }
  return (
    <div className="lang-selector">
      <select value={translation} onChange={(e) => setLang(e)}>
        <option value="en">English</option>
        <option value="sv-en">Svenska</option>
      </select>
    </div>
  );
}
