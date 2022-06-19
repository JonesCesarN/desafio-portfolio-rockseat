// import instagram from "./assets/svg/instagram.svg";
import { ReactComponent as GitBranch } from './assets/svg/git-branch.svg';
import { ReactComponent as Star } from './assets/svg/star.svg';
import { ReactComponent as Folder } from './assets/svg/folder.svg';
import { ReactComponent as Mail } from './assets/svg/mail.svg';
import { ReactComponent as Globe } from './assets/svg/globe.svg';
import { ReactComponent as Twitter } from './assets/svg/twitter.svg';
import { ReactComponent as Briefcase } from './assets/svg/briefcase.svg';
import { ReactComponent as Github } from './assets/svg/github.svg';
import { ReactComponent as Linkedin } from './assets/svg/linkedin.svg';
import { ReactComponent as MapPin } from './assets/svg/map-pin.svg';
import './App.scss';

function App() {
  return (
    <>
      <div className="Container">
        <section className="info">
          <div className="info__user">
            <img
              src="https://avatars.githubusercontent.com/u/68172438?v=4"
              alt=""
            />
            <div>
              <h3 className="user__name">Jones Cesar N</h3>
              <span className="user__area">Full Stack Developer</span>
            </div>
          </div>
          <div className="info__details">
            <ul>
              <li>
                <MapPin />
                <p>Brasil</p>
              </li>
              <li>
                <Briefcase />
                <p>Rocketseat</p>
              </li>
              <li>
                <Github />
                <p>JonesCesarN</p>
              </li>
              <li>
                <Linkedin />
                <p>jonescesarn</p>
              </li>
              <li>
                <Twitter />
                <p>jonescesarn</p>
              </li>
              <li>
                <Globe />
                <p>https://jonescesarn.dev</p>
              </li>
              <li>
                <Mail />
                <p>jonescesarn.dev@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="info__techs">
            <h3>Tecnologias</h3>
            <ul className="techs">
              <li className="techs__item">javascript</li>
              <li className="techs__item">reactjs</li>
              <li className="techs__item">nodejs</li>
              <li className="techs__item">git</li>
              <li className="techs__item">github</li>
              <li className="techs__item">html</li>
              <li className="techs__item">css</li>
              <li className="techs__item">sass</li>
              <li className="techs__item">express</li>
            </ul>
          </div>
          <div className="info__experience">
            <h3>Experiências</h3>
            <ul>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - Atualmente</p>
                <p className="regular">Community Experience</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - Atualmente</p>
                <p className="regular">Community Experience</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - Atualmente</p>
                <p className="regular">Community Experience</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - Atualmente</p>
                <p className="regular">Community Experience</p>
              </li>
            </ul>
          </div>
          <div className="info__experience">
            <h3>Educação</h3>
            <ul>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - 2019</p>
                <p className="regular">GoStack</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - 2019</p>
                <p className="regular">Ignite</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - 2019</p>
                <p className="regular">Ignite Pro</p>
              </li>
              <li>
                <h4>Rocketseat</h4>
                <p className="light">2019 - 2019</p>
                <p className="regular">Ignite Pro</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="main">
          <article className="container">
            <div className="title">
              <h2>My Projects</h2>
              <a href="#">Veja todos</a>
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
      </div>
      <footer>Feito com 💜 por jonescesarn</footer>
    </>
  );
}

export default App;
