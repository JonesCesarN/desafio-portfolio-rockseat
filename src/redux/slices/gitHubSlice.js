import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const githubUser = createSlice({
  name: "repoGithub",
  initialState,

  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    dataFetched: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    dataFetchedWithError: (state) => {
      state.loading = false;
      state.data = [];
      state.error = true;
    },
  },
});

// Actions
export const { startLoading, dataFetched, dataFetchedWithError } =
  githubUser.actions;

// Selector
export const selectRepoGitHub = (state) => state.repoGithub;

// Reducer
export default githubUser.reducer;
