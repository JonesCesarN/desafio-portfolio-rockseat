import axios from "axios";
import { githubKey, githubUser } from "../config";
import { LangColorGithub } from "./languagesColorGithub";

let axiosOpts = {
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${githubKey}`,
  }
}

export const apiGithub = axios.create(axiosOpts);

export const getRepos = async (user) => {
  try {
    const result = await apiGithub.get(`/users/${!user ? githubUser : user}/repos`);
    return result.data;
  } catch (e) {
    return { error: true, description: e };
  }
};

export const getBranches = async (repo, user) => {
  try {
    const result = await apiGithub.get(`/repos/${!user ? githubUser : user}/${repo}/branches`);
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
  let _githubdata = [];
  let _id = 1;

  for await (const data of repo) {
    let { name, language, stargazers_count, description, updated_at, html_url } = data;
    if (language != null && _id < 6) {
      let repoInfo = {
        _id,
        name,
        language,
        stargazers_count,
        description,
        updated_at, html_url
      };

      let response = await getBranches(name);
      if (response.error) return response;

      repoInfo.color = LangColorGithub(language);

      repoInfo.branches = response;
      _githubdata.push(repoInfo);
      _id++;
    }
  }

  const _userInfo = await getUser();
  if (_userInfo.error) return _userInfo;

  const userInfo = {
    avatar_url: _userInfo.avatar_url,
    public_repos: _userInfo.public_repos,
    repos_url: _userInfo.html_url + '?tab=repositories'
  }
  _githubdata.sort(function (a, b) {
    var c = new Date(a.updated_at);
    var d = new Date(b.updated_at);
    return d - c;
  });

  let githubdata = []
  _githubdata.forEach((iten, idx) => {
    if (idx < 2) githubdata.push(iten)
  })

  const data = { userInfo, githubdata };
  return data;
};
