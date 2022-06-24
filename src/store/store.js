import githubReducer from "./github/gitHubSlice";
import widthPage from "./widthPage/widthPage";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    apiGithub: githubReducer,
    widthPage,
  },
});
