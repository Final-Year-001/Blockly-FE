import { atom } from "recoil";

interface Sandbox {
    name: string;
}

const sandboxAtom = atom<Sandbox>({
    key: "sandbox",
    default: {
        name: ""
    }
});


export { sandboxAtom };
export type { Sandbox };