import React from 'react';
import css from './Projects.module.scss';
import { ReactComponent as GitBranch } from 'assets/svg/git-branch.svg';
import { ReactComponent as Star } from 'assets/svg/star.svg';
import { ReactComponent as Folder } from 'assets/svg/folder.svg';
import Card from 'components/Card/Card';

function Projects() {
  return (
    <article className={css.projects}>
      <Card className={css.projects__title}>
        <h2>My Projects</h2>
        <a href="#algo">Veja todos</a>
      </Card>
      <div className={css.projects__wrapper}>
        <Card className={css.project}>
          <h3 className={css.project__title}>
            <Folder className={css.project__svg} />
            my-onix
          </h3>
          <p className={css.project__description}>
            Consulte os códigos de erro que aparecem no painel do veículo Onix.
          </p>
          <div className={css.project__footer}>
            <div className={css.project__status}>
              <div>
                <Star /> <span>100</span>
              </div>
              <div>
                <GitBranch /> <span>100</span>
              </div>
            </div>
            <div className={css.project__circle}>JavaScript</div>
          </div>
        </Card>
        <Card className={css.project}>
          <h3 className={css.project__title}>
            <Folder className={css.project__svg} />
            my-onix
          </h3>
          <p className={css.project__description}>
            Consulte os códigos de erro que aparecem no painel do veículo Onix.
          </p>
          <div className={css.project__footer}>
            <div className={css.project__status}>
              <div>
                <Star /> <span>100</span>
              </div>
              <div>
                <GitBranch /> <span>100</span>
              </div>
            </div>
            <div className={css.project__circle}>JavaScript</div>
          </div>
        </Card>
        <Card className={css.project}>
          <h3 className={css.project__title}>
            <Folder className={css.project__svg} />
            my-onix
          </h3>
          <p className={css.project__description}>
            Consulte os códigos de erro que aparecem no painel do veículo Onix.
          </p>
          <div className={css.project__footer}>
            <div className={css.project__status}>
              <div>
                <Star /> <span>100</span>
              </div>
              <div>
                <GitBranch /> <span>100</span>
              </div>
            </div>
            <div className={css.project__circle}>JavaScript</div>
          </div>
        </Card>
      </div>
    </article>
  );
}

export default Projects;
