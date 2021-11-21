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

/**
 * Function length -1, abstraction -5
 *
 * This component is too long but must importantly you aren't taking the Big O Notation into consideration. (https://www.youtube.com/watch?v=g2o22C3CRfU)
 * What happens if we need to add another language say Danish, this compoment will be 33% longer, then another language and so on.
 *
 * The solution is to have language as a global state that handles that.
 * The -5 does not mean literally 5 points of the possible 100 point we grade. It means a error that is quite important when i go back and decide the grading.
 *
 *
 * Also, you should not create a folder for a single file. If you consider Router equally important as App, you put it next to it, otherwise inside the components folder.
 */
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
