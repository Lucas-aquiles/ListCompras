import {create} from 'zustand';

interface IdiomaState {
  lenguage: boolean;
  setLenguage: (newLenguage: boolean) => void;
}
export const useIdiomaStore = create<IdiomaState>(set => ({
  lenguage: true,
  setLenguage: (newBears: boolean) => set({lenguage: newBears}),
}));
