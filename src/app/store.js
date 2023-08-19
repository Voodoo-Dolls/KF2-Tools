import { configureStore } from "@reduxjs/toolkit";
import perkReducer from "../features/perk";

export const store = configureStore({
  reducer: {
    perk: perkReducer,
  },
});
