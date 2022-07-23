import { atom } from "recoil";

export const postsListState = atom({
  key: "postsListState", // unique ID (with respect to other atoms/selectors)
  default: [], // valeur par défaut (alias valeur initials)
});
