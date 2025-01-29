// Redux/features/dropDown/dropDownSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownState {
  [key: string]: {
    isOpen: boolean;
    selectedOption: { value: string; label: string } | null;
  };
}

const initialState: DropdownState = {};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      // Close all dropdowns except the current one
      Object.keys(state).forEach((key) => {
        if (key !== id) state[key].isOpen = false;
      });

      state[id] = {
        ...state[id],
        isOpen: !state[id]?.isOpen,
      };
    },
    selectOption: (state, action: PayloadAction<{ id: string; option: { value: string; label: string } }>) => {
      const { id, option } = action.payload;
      state[id] = {
        isOpen: false,
        selectedOption: option,
      };
    },
  },
});

export const { toggleDropdown, selectOption } = dropdownSlice.actions;
export default dropdownSlice.reducer;
