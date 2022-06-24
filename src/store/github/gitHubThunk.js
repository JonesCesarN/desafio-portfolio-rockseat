import { createAsyncThunk } from "@reduxjs/toolkit";
import { gitHubUserRepos } from "../../lib/api";
import { dataFetched, dataFetchedWithError, startLoading } from "./gitHubSlice";

export const fetchUserRepoThunk = createAsyncThunk("projectData/get", async (_, thunkApi) => {
  thunkApi.dispatch(startLoading());
  try {
    const response = await gitHubUserRepos();
    const { error } = response;
    if (!error) {
      thunkApi.dispatch(dataFetched(response));
    } else {
      throw new Error("Failed to load data.");
    }
  } catch (error) {
    console.log(error);
    thunkApi.dispatch(dataFetchedWithError());
  }
});
