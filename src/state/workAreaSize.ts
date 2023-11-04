import { atom } from "recoil";

const codeAtom = atom<string>({
    key: "workAreaSize",
    default: "small"
});


export { codeAtom };