import { collection, getDocs, addDoc, type DocumentData } from "firebase/firestore";
import { db } from "./firebase";
import { type WithFieldValue } from "firebase/firestore/lite";

// import { QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient();


export async function Adduser(recordData: WithFieldValue<DocumentData>) {
  try {
    const collectionRef = collection(db, 'users');

    await addDoc(collectionRef, recordData);

  } catch (error) {
    throw error;
  }
}


async function fetchData(collectionName: string) {
  const collectionRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    throw error;
  }
}

export function fetchElements() {
  return fetchData("users");
}
