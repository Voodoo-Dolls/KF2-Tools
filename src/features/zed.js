import { createSlice } from "@reduxjs/toolkit";

export const zedSlice = createSlice({
  name: "zed",
  initialState: {
    zedName: null,
    headHealth: 0,
    headModifier: 1,
    bodyHealth: 0,
    bodyModifer: 1,
    zedObject: null,
  },
  reducers: {
    setZedName: (state, action) => {
      state.zedName = action.payload;
    },

    setHeadHealth: (state, action) => {
      state.headHealth = action.payload;
    },
    setBodyHealth: (state, action) => {
      state.bodyHealth = action.payload;
    },
    setZedObject: (state, action) => {
      state.zedObject = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setZedName, setHeadHealth, setBodyHealth, setZedObject } =
  zedSlice.actions;

export default zedSlice.reducer;
