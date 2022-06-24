import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const githubUser = createSlice({
  name: "apiGithub",
  initialState,

  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    dataFetched: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    },
    dataFetchedWithError: (state, err) => {
      state.loading = false;
      state.data = err;
      state.error = true;
    },
  },
});

// Actions
export const { startLoading, dataFetched, dataFetchedWithError } = githubUser.actions;

// Selector
export const selectRepoGitHub = (state) => state.apiGithub;

// Reducer
export default githubUser.reducer;
