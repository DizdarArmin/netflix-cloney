import "./style/base.scss";
import { useRecoilState } from "recoil";
import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";

import { language } from "./components/Atom";
import { load } from "./scripts/LocalStorage";
import { useAuth } from "./state/AuthContext";
import useDocument from "./hooks/useDocument";
import routes from "./routes/Routes";

export default function App() {
  const { currentUser, userData, setUserData } = useAuth();
  const [id, setId] = useState(null);
  const [, setTranslation] = useRecoilState(language);
  const [localUrl, setLocalUrl] = useState("en");
  const local = load("language");

  const routing = useRoutes(routes(currentUser, localUrl, userData));
  const { document } = useDocument("users", id);

  useEffect(() => {
    if (currentUser) {
      setId(currentUser.uid);
    }
  }, [currentUser]);

  useEffect(() => {
    setUserData(document);
  }, [document]);

  useEffect(() => {
    if (local) {
      setTranslation(local);
      setLocalUrl(local);
    }
  }, [local]);

  return <div>{routing}</div>;
}
