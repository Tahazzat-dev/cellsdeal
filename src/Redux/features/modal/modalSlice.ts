// store/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalKey: string | null; // Optional for tracking different modal keys
}

const initialState: ModalState = {
  isOpen: false,
  modalKey: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string | null>) => {
      state.isOpen = true;
      state.modalKey = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalKey = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
