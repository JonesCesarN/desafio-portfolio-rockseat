import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const widthPage = createSlice({
  name: "widthPage",
  initialState,

  reducers: {
    setWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Actions
export const { setWidth } = widthPage.actions;

// Selector
export const selectWidthPage = (state) => state.widthPage.value;

// Reducer
export default widthPage.reducer;
