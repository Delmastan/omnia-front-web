import { create } from "zustand";

interface User {
  // faux model
  name: string;
  email: string;
  password: string;
}

interface UsersStateModel {
  // faux model
  logged: User;
  allUsers: User[];
}

interface UsersState {
  users: UsersStateModel | null;
  setUser: (users: UsersStateModel | null) => void;
}

const useUsersStore = create<UsersState>((set) => ({
  users: null,
  setUser: (users) => set({ users }),
}));

export default useUsersStore;
