import { createSlice } from "@reduxjs/toolkit";

const initState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

const { reducer, actions } = themeSlice;
export const { changeTheme } = actions;
export default reducer;
