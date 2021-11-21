import { atom } from "recoil";
import en from "../data/HOME-en.json";

/**
 * Full disclosure, i do prefer Recoil over Context API for small projects.
 * But for bigger projects like this one, having the Context API is preferable, because even if the reducer forces us to write a lot of "burocracy code" that feels like we could skip (boilerplate)
 * Its actually usefull to set up security measures against passing the wrong type of data to the state, soemthing that becomes more probable as  the app becomes bigger.
 */

export const language = atom({
  key: "language",
  default: "en",
  dangerouslyAllowMutability: true,
});

export const home = atom({
  key: "home",
  default: en,
  dangerouslyAllowMutability: true,
});

export const email = atom({
  key: "email",
  default: null,
  dangerouslyAllowMutability: true,
});

export const coursesReload = atom({
  key: "coursesReload",
  default: false,
  dangerouslyAllowMutability: true,
});

export const coursesDelete = atom({
  key: "coursesDelete",
  default: false,
  dangerouslyAllowMutability: true,
});

export const filesReload = atom({
  key: "filesReload",
  default: false,
  dangerouslyAllowMutability: true,
});

export const filesDelete = atom({
  key: "filesDelete",
  default: false,
  dangerouslyAllowMutability: true,
});
