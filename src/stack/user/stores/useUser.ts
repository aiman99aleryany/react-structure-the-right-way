import { create } from 'zustand';

const useUser = create((set) => ({
    user: null,
}));

export default useUser;
