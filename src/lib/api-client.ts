import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, get } from "firebase/database";

// Types for the API
export interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface CreateWishData {
  name: string;
  message: string;
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGSxUx8IDpd3Gk9gMtYl-Q6NO5tab5qGk",
  authDomain: "birthday-wish-d9a40.firebaseapp.com",
  databaseURL: "https://birthday-wish-d9a40-default-rtdb.firebaseio.com",
  projectId: "birthday-wish-d9a40",
  storageBucket: "birthday-wish-d9a40.firebasestorage.app",
  messagingSenderId: "139504918023",
  appId: "1:139504918023:web:1955530492549fab8d14a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const wishesRef = ref(database, 'wishes');

// Query key factory
export const getGetWishesQueryKey = () => ["wishes"] as const;

// Hook to fetch wishes
export function useGetWishes() {
  return useQuery<Wish[]>({
    queryKey: getGetWishesQueryKey(),
    queryFn: async () => {
      try {
        const snapshot = await get(wishesRef);
        if (snapshot.exists()) {
          const wishesData = snapshot.val();
          return Object.values(wishesData) as Wish[];
        }
        return [];
      } catch (error) {
        console.error("Error fetching wishes from Firebase:", error);
        return [];
      }
    },
  });
}

// Hook to create a wish
export function useCreateWish() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { data: CreateWishData }) => {
      try {
        const newWish: Wish = {
          id: Date.now().toString(),
          name: data.data.name,
          message: data.data.message,
          createdAt: new Date().toISOString(),
        };
        
        await push(wishesRef, newWish);
        return newWish;
      } catch (error) {
        console.error("Error creating wish in Firebase:", error);
        throw new Error("Failed to send wish. Please try again.");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getGetWishesQueryKey() });
    },
  });
}
