import { atom } from "recoil";

const videoPlayerDialogAtom = atom<{
  videoLink: string;
  showPlayer: boolean;
}>({
  key: "videoPlayerDialogAtom",
  default: {
    videoLink: "",
    showPlayer: false,
  },
});

const whatToLeanAtom = atom<boolean>({
  key: "whatToLeanAtom",
  default: false,
});

export { videoPlayerDialogAtom, whatToLeanAtom };
