import githubReducer from "./slices/gitHubSlice";
const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    repoGithub: githubReducer,
  },
});
