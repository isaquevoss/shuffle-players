import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


// 'file' comes from the Blob or File API

export async function uploadFile(file, fileName) {
  const storage = getStorage();
  const storageRef = ref(storage, 'images/' + fileName);

  return await uploadBytes(storageRef, file).then(async (snapshot) => {
    console.log('Uploaded a blob or file!');
    console.log(snapshot);
    return await getDownloadURL(snapshot.ref);
  });

}