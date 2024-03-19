import { getApp, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5KbDwolXrxkO87Sie_LrU0H3HaSXYEvw",
  authDomain: "blockly-research-47018.firebaseapp.com",
  projectId: "blockly-research-47018",
  storageBucket: "blockly-research-47018.appspot.com",
  messagingSenderId: "155344941116",
  appId: "1:155344941116:web:54d80cacaefde44fba1339",
  measurementId: "G-77V6QG5FMV",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(
  app,
  "gs://blockly-research-47018.appspot.com"
);

export { storage };
