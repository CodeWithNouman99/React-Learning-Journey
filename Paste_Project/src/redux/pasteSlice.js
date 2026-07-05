import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("✅ Paste Created Successfully");
    },

    updateToPaste: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (item) => item._id === updatedPaste._id
      );

      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("✏️ Paste Updated Successfully");
      }
    },

    removeFromPaste: (state, action) => {
      const pasteId = action.payload;

      state.pastes = state.pastes.filter(
        (paste) => paste._id !== pasteId
      );

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("🗑️ Paste Deleted");
    },

    resetAllPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("🔥 All Pastes Removed");
    },
  },
});

export const {
  addToPaste,
  updateToPaste,
  removeFromPaste,
  resetAllPaste,
} = pasteSlice.actions;

export default pasteSlice.reducer;