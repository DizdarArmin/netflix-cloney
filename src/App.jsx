import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./style/base.scss";
import Home from "./views/Home";
import { useRecoilState } from "recoil";
import { language } from "./components/Atom";
import { useEffect, useState } from "react";
import { load } from "./scripts/LocalStorage";
import en from "./data/HOME-en.json";
import sv from "./data/HOME-sv.json";
import SignUp from "./views/SignUp";

export default function App() {
  const [translation, setTranslation] = useRecoilState(language);
  const [localUrl, setLocalUrl] = useState("en");
  const local = load("language");
  const signUpURL = `/signup-${localUrl}`;
  const signUpEn = "/signup-en";
  const signUpSv = "/signup-sv-en";

  useEffect(() => {
    if (local) {
      setTranslation(local);
      setLocalUrl(local);
    }
  }, [local]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to={localUrl} />} />
          <Route path="/en" element={<Home language={en} />} />
          <Route path="/sv-en" element={<Home language={sv} />} />
          <Route path="/signup" element={<Navigate replace to={signUpURL} />} />
          <Route path="/signup-sv-en" element={<SignUp language={sv} />} />
          <Route path="/signup-en" element={<SignUp language={en} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
