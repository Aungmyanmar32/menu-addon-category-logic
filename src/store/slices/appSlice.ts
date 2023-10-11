import { Data } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: Data = {
  menu: [],
  addonCategory: [],
  menuAddonCategory: [],
  addon: [],
};

export const fetchData = createAsyncThunk("fetchData", async (_, thunkAPI) => {
  const response = await fetch("http://localhost:3001/api/appData");
  const data = await response.json();
  thunkAPI.dispatch(setData(data));
});
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      const { menu, addonCategory, menuAddonCategory, addon } = action.payload;
      state.menu = menu;
      state.addonCategory = addonCategory;
      state.menuAddonCategory = menuAddonCategory;
      state.addon = addon;
    },
  },
});

export const { setData } = appSlice.actions;
export default appSlice.reducer;
