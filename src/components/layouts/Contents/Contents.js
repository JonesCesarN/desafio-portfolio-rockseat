import React from 'react';
import { ReactComponent as GitBranch } from 'assets/svg/git-branch.svg';
import { ReactComponent as Star } from 'assets/svg/star.svg';
import { ReactComponent as Folder } from 'assets/svg/folder.svg';
import css from './Contents.module.scss';

function Contents() {
  return (
    <section className={css.container}>
      <article className="container">
        <div className="title">
          <h2>My Projects</h2>
          <a href="#algo">Veja todos</a>
        </div>
        <div className="wrapper">
          <div className="card">
            <h3 className="card__title">
              <Folder className="card__svg" />
              my-onix
            </h3>
            <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
            <div className="card__footer">
              <div className="status">
                <div>
                  <Star className="card__svg" /> <span>100</span>
                </div>
                <div>
                  <GitBranch className="card__svg" /> <span>100</span>
                </div>
              </div>
              <div className="circle">JavaScript</div>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">
              <Folder className="card__svg" />
              my-onix
            </h3>
            <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
            <div className="card__footer">
              <div className="status">
                <div>
                  <Star className="card__svg" /> <span>100</span>
                </div>
                <div>
                  <GitBranch className="card__svg" /> <span>100</span>
                </div>
              </div>
              <div className="circle">JavaScript</div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card">
            <h3 className="card__title">
              <Folder className="card__svg" />
              my-onix
            </h3>
            <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
            <div className="card__footer">
              <div className="status">
                <div>
                  <Star className="card__svg" /> <span>100</span>
                </div>
                <div>
                  <GitBranch className="card__svg" /> <span>100</span>
                </div>
              </div>
              <div className="circle">JavaScript</div>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">
              <Folder className="card__svg" />
              my-onix
            </h3>
            <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
            <div className="card__footer">
              <div className="status">
                <div>
                  <Star className="card__svg" /> <span>100</span>
                </div>
                <div>
                  <GitBranch className="card__svg" /> <span>100</span>
                </div>
              </div>
              <div className="circle">JavaScript</div>
            </div>
          </div>
        </div>
      </article>

      <article className="container">
        <div className="title">
          <h2>Recent Posts</h2>
        </div>
        <div className="wrapper">
          <div className="card-photo">
            <img
              src="https://avatars.githubusercontent.com/u/68172438?v=4"
              alt=""
            />
            <div className="content">
              <div>
                <h2>Erro adb devices no Genymotion e Android Studio (React Native)</h2>
                <span>2 anos atrás</span>
              </div>
              <div className="footer">
                <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
                <span>
                  <li>#react-native</li>
                  <li>#genimotion</li>
                  <li>#genimotion</li>
                  <li>#genimotion</li>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="card-photo">
            <img
              src="https://avatars.githubusercontent.com/u/68172438?v=4"
              alt=""
            />
            <div className="content">
              <div>
                <h2>Erro adb devices no Genymotion e Android Studio (React Native)</h2>
                <span>2 anos atrás</span>
              </div>
              <div className="footer">
                <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
                <span>
                  <li>#react-native</li>
                  <li>#genimotion</li>
                  <li>#genimotion</li>
                  <li>#genimotion</li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Contents;
