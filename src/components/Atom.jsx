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
