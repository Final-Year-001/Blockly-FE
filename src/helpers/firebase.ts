import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../storage";

async function uploadImage(image: File | Blob): Promise<string[]> { 
    console.log(image, "===================")
    const u =`lesson/${uuidv4()}`;

    const storageRef = ref(storage, u);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef)

    return [u, url];
}


export { uploadImage };