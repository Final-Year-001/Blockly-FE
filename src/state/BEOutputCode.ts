import { atom } from "recoil";

const BEOutAtom = atom<string>({
    key: "BEoutCode",
    default: ""
});


export { BEOutAtom };