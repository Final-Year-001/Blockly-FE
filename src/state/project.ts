import { atom } from "recoil";

interface Project {
    id: string
}

const projectAtom = atom<Project>({
    key: "code",
    default: {
        id: ""
    }
});


export { projectAtom };