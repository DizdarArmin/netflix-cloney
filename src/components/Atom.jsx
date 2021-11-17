import { atom } from "recoil";
import en from "../data/HOME-en.json";

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
