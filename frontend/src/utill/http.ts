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


async function fetchData(collectionName: string): Promise<User[]> {
  const collectionRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(collectionRef);
    const data: User[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.data().email,
      password: doc.data().password
    }));
    return data;
  } catch (error) {
    throw error;
  }
}


type User = {
  id: string;
  email: string;
  password: string;
}

export function fetchElements(): Promise<User[]> {
  return fetchData("users");
}
