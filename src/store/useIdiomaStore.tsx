import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IdiomaState {
  lenguage: boolean;
  setLenguage: (newLenguage: boolean) => void;
}

const storage = {
  getItem: async (key: string) => {
    const item = await AsyncStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  },
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};

export const useIdiomaStore = create<IdiomaState>()(
  persist(
    set => ({
      lenguage: true,
      setLenguage: (newLenguage: boolean) => set({lenguage: newLenguage}),
    }),
    {
      name: 'idioma-storage',
      storage,
    },
  ),
);
