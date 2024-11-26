import { create } from "zustand";

interface DataState {
  data: any;
  setData: (data: any) => void;
}

const useDataStore = create<DataState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

export default useDataStore;
