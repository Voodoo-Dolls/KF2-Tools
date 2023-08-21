import { createSlice } from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
  name: "weapon",
  initialState: {
    weaponName: null,
    weaponDamage: 0,
    weaponUpgrade: "Base",
    weaponType: null,
    weaponList: null
  },
  reducers: {
    setWeaponName: (state, action) => {
      state.weaponName = action.payload;
    },
    setWeaponDamage: (state, action) => {
      state.weaponDamage = action.payload;
    },
    setWeaponUpgrade: (state, action) => {
      state.weaponUpgrade = action.payload;
    },
    setWeaponType: (state, action) => {
      state.weaponType = action.payload;
    },
    setWeaponList: (state, action) =>{
      state.weaponList = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setWeaponName,
  setWeaponDamage,
  setWeaponUpgrade,
  setWeaponType,
  setWeaponList
} = weaponSlice.actions;

export default weaponSlice.reducer;
