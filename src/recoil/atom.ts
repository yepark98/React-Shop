import { atom } from "recoil";
import { Cart } from "./../type/Cart";

export const modalState = atom({
  key: "modalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const cartsState = atom<Cart[]>({
  key: "cartsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
