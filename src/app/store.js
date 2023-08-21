import { configureStore } from "@reduxjs/toolkit";
import perkReducer from "../features/perk";
import zedReducer from "../features/zed";
import weaponReducer from "../features/weapon";

export const store = configureStore({
  reducer: {
    perk: perkReducer,
    zed: zedReducer,
    weapon: weaponReducer,
  },
});
