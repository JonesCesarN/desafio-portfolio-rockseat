import axios from "axios";
import { LangColorGithub } from "helpers/languagesColorGithub";
const githubUser = process.env.REACT_APP_GITHUB_USER;
const githubKey = process.env.REACT_APP_GITHUB_KEY;

export const apiGithub = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${githubKey}`,
  },
});

export const getRepos = async (user) => {
  // => ENDPOINT /users/${user}/repos
  // => RETURN USE {name,language, stargazers_count, description }
  try {
    const result = await apiGithub.get(
      `/users/${!user ? githubUser : user}/repos`
    );
    return result.data;
  } catch (e) {
    return { error: true, description: e };
  }
};

export const getBranches = async (repo, user) => {
  try {
    const result = await apiGithub.get(
      `/repos/${!user ? githubUser : user}/${repo}/branches`
    );
    const data = result.data;
    return data.length;
  } catch (e) {
    return { error: true, description: e };
  }
};

export const getUser = async (user) => {
  try {
    const result = await apiGithub.get(`/users/${!user ? githubUser : user}`);
    return result.data;
  } catch (e) {
    return { error: true, description: e };
  }
};

export const gitHubUserRepos = async () => {
  const repo = await getRepos();
  if (repo.error) return repo;
  let githubdata = [];
  let _id = 1;

  for await (const data of repo) {
    let { name, language, stargazers_count, description } = data;
    if (language != null && _id < 6) {
      let repoInfo = {
        _id,
        name,
        language,
        stargazers_count,
        description,
      };

      let response = await getBranches(name);
      if (response.error) return response;

      repoInfo.color = LangColorGithub(language);

      repoInfo.branches = response;
      githubdata.push(repoInfo);
      _id++;
    }
  }

  const userInfo = await getUser();
  if (userInfo.error) return userInfo;

  const data = { userInfo, githubdata };
  return data;
};

// export default apiGithub;
