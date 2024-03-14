import { atom } from "recoil";

const FEOutAtom = atom<string>({
    key: "FEoutCode",
    default: ""
});


export { FEOutAtom };