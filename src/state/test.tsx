import { atom } from "recoil";


const counterTest = atom<number>({
    key: "counter",
    default: 0
});


export { counterTest };