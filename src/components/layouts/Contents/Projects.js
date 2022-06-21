import React from "react";
import css from "./Projects.module.scss";
import { ReactComponent as GitBranch } from "assets/svg/git-branch.svg";
import { ReactComponent as Star } from "assets/svg/star.svg";
import { ReactComponent as Folder } from "assets/svg/folder.svg";
import { ReactComponent as Loading } from "assets/svg/loading.svg";

import Card from "components/Card/Card";
import { useSelector } from "react-redux";
import { selectRepoGitHub } from "redux/slices/gitHubSlice";

function eventClick(e) {
  if (!e.target.onclick) return;
  console.log(e.target);
}

function Projects() {
  const dataStatus = useSelector(selectRepoGitHub);
  const { data, loading } = dataStatus;
  return (
    <article className={css.projects}>
      <Card className={css.projects__title}>
        <h2>My Projects</h2>

        <a
          href={`https://github.com/${process.env.REACT_APP_GITHUB_USER}?tab=repositories`}
          rel="noopener"
        >
          Veja todos
        </a>
      </Card>
      <div className={css.projects__wrapper}>
        {loading ? (
          <Loading className={css.loading} />
        ) : (
          data.githubdata?.map((repo) => {
            return (
              <Card key={repo._id} className={css.project} onClick={eventClick}>
                <h3 className={css.project__title}>
                  <Folder className={css.project__svg} />
                  {repo.name}
                </h3>
                <p className={css.project__description}>{repo.description}</p>
                <div className={css.project__footer}>
                  <div className={css.project__status}>
                    <div>
                      <Star /> <span>{repo.stargazers_count}</span>
                    </div>
                    <div>
                      <GitBranch /> <span>{repo.branches}</span>
                    </div>
                  </div>
                  <div
                    className={css.project__circle}
                    style={{ "--my-color-var": repo.color }}
                  >
                    {repo.language}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </article>
  );
}

export default Projects;
