import { Navigate } from "react-router";
import en from "../data/HOME-en.json";
import sv from "../data/HOME-sv.json";

import Home from "../views/Home";
import SignUp from "../views/SignUp";
import Login from "../views/Login";
import Browse from "../views/Browse";
import Manage from "../views/Manage";
import Title from "../views/Title";
import Add from "../views/Add";
import PlaySerie from "../components/app/PlaySerie";
import PlayMovie from "../components/app/PlayMovie";

const routes = (isLogged, localUrl, userData) => [
  //HOME

  { path: `/`, element: <Navigate to={`/${localUrl}`} /> },
  {
    path: `/en`,
    element: isLogged ? <Browse language={en} /> : <Home language={en} />,
  },
  {
    path: `/sv-en`,
    element: isLogged ? <Browse language={sv} /> : <Home language={sv} />,
  },

  // SIGN UP
  { path: `/signup`, element: <Navigate to={`/signup-${localUrl}`} /> },
  {
    path: `/signup-en`,
    element: isLogged ? <Browse language={en} /> : <SignUp language={en} />,
  },
  {
    path: `/signup-sv-en`,
    element: isLogged ? <Browse language={sv} /> : <SignUp language={sv} />,
  },
  // SIGN IN

  { path: `/login`, element: <Navigate to={`/login-${localUrl}`} /> },
  {
    path: `/login-en`,
    element: isLogged ? <Browse language={en} /> : <Login language={en} />,
  },
  {
    path: `/login-sv-en`,
    element: isLogged ? <Browse language={sv} /> : <Login language={sv} />,
  },
  // BROWSE
  { path: `/browse`, element: <Navigate to={`/browse-${localUrl}`} /> },
  {
    path: `/browse-en`,
    element: isLogged ? <Browse language={en} /> : <Login language={en} />,
  },
  {
    path: `/browse-sv-en`,
    element: isLogged ? <Browse language={sv} /> : <Login language={sv} />,
  },
  {
    path: `/play-:from-:file`,
    element: isLogged ? <PlayMovie /> : null,
  },
  {
    path: `/:id-:name-:season-:episode`,
    element: isLogged ? <PlaySerie /> : null,
  },
  // MANAGE

  {
    path: `/manage-:category`,
    element: userData.role === "manager" ? <Manage /> : null,
  },
  {
    path: `/manage-:category/:id`,
    element: userData.role === "manager" ? <Title /> : null,
  },
  {
    path: `/add-:category`,
    element: userData.role === "manager" ? <Add /> : null,
  },

  // 404
  {
    path: `*`,
    element: <h1>404</h1>,
  },
];
export default routes;
