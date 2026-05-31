import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

// Local storage key
const WISHES_STORAGE_KEY = "birthday-wishes";

// Helper functions for localStorage
function getWishesFromStorage(): Wish[] {
  try {
    const stored = localStorage.getItem(WISHES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveWishToStorage(wish: Wish): void {
  const wishes = getWishesFromStorage();
  wishes.push(wish);
  localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes));
}

// API base URL - can be configured via environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// Helper function for API calls
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

// Query key factory
export const getGetWishesQueryKey = () => ["wishes"] as const;

// Hook to fetch wishes
export function useGetWishes() {
  return useQuery<Wish[]>({
    queryKey: getGetWishesQueryKey(),
    queryFn: async () => {
      try {
        // Try to fetch from API first
        return await apiRequest<Wish[]>("/wishes");
      } catch (error) {
        // Fallback to localStorage if API fails
        console.log("API not available, using localStorage fallback");
        return getWishesFromStorage();
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
        // Try to post to API first
        return await apiRequest<Wish>("/wishes", {
          method: "POST",
          body: JSON.stringify(data.data),
        });
      } catch (error) {
        // Fallback to localStorage if API fails
        console.log("API not available, using localStorage fallback");
        const newWish: Wish = {
          id: Date.now().toString(),
          name: data.data.name,
          message: data.data.message,
          createdAt: new Date().toISOString(),
        };
        saveWishToStorage(newWish);
        return newWish;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getGetWishesQueryKey() });
    },
  });
}
