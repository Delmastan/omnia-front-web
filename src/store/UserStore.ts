import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// User interface
interface User {
  name: string;
  email: string;
  password: string;
}

// Users state model
interface UsersStateModel {
  logged: User;
  allUsers: User[];
}

// Zustand store interface
interface UsersState {
  users: UsersStateModel | null;
  setUser: (users: UsersStateModel | null) => void;
}

// Create the Zustand store
const useUsersStore = create<UsersState>()(
  devtools(
    persist(
      (set) => ({
        users: null,
        setUser: (users) => set({ users }),
      }),
      {
        name: "users-storage", // Key for localStorage (or sessionStorage)
      }
    )
  )
);

export default useUsersStore;
