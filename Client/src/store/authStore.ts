import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

interface UserProps {
  email: string;
  firstname: string;
  lastname: string;
  user_image: string;
}

interface AuthState {
  user: UserProps | null; // user can be null initially
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Initialize user as null
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = axios.get(`/api/v1/api/user`, { withCredentials: true });
      set({
        user: (await response).data,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
      toast.success("User is authenticated!");
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },
}));
