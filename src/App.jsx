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
  const [translation, setTranslation] = useRecoilState(language);
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

  return (
    <div>
      {routing}
      {/*   <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to={localUrl} />} />
          <Route path="/en" element={<Home language={en} />} />
          <Route path="/sv-en" element={<Home language={sv} />} />

          <Route path="/signup" element={<Navigate replace to={signUp} />} />
          <Route path="/signup-sv-en" element={<SignUp language={sv} />} />
          <Route path="/signup-en" element={<SignUp language={en} />} />

          <Route path="/login" element={<Navigate replace to={login} />} />
          <Route path="/login-sv-en" element={<Login language={sv} />} />
          <Route path="/login-en" element={<Login language={en} />} />

          <Route path="/browse" element={<Navigate replace to={browse} />} />

          <Route path="/browse-sv-en" element={<Private />}>
            <Route element={<Browse language={sv} />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
