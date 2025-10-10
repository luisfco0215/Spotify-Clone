import type { Albums, Songs } from "@/components/Albums";
import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

interface MusicStore {
    songs: Songs[],
    albums: Albums[],
    isLoading: boolean,
    error: string | null,
    fetchAlbums: () => Promise<void>;
}

const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,

    fetchAlbums: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/albums");
            set({ albums: response.data });
        } catch (err: any) {
            set({ error: err.response.data.message })
        } finally {
            set({ isLoading: false });
        }
    }
}));

export default useMusicStore;
