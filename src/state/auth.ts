import { atom } from "recoil";
import localStorageEffect from "./sessionStorageEffect";

export type Tokens = {
    access_token: string
}

const tokenAtom = atom<Tokens>({
    key: "tokens",
    default: {
        access_token: ""
    },
    effects: [
        localStorageEffect("tokens")
    ]
});
  
export { tokenAtom };