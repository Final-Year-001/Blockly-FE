import { atom } from "recoil";

interface FEOutData {
    html: string;
    css: string;
    js: string;
    otherValue: number;
    // Add more properties as needed
}

const splitCodeAtom = atom<FEOutData>({
    key: "splitCodesAtom",
    default: {
        html: "",
        css: "",
        js: "",
        otherValue: 0,
        // Initialize other properties as needed
    }
});

export { splitCodeAtom };