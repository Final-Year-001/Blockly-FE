import { atom } from "recoil";

const codeAtom = atom<string>({
    key: "code",
    default: ""
});


export { codeAtom };