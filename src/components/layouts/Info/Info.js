import React from 'react';
import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import { ReactComponent as Globe } from 'assets/svg/globe.svg';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Briefcase } from 'assets/svg/briefcase.svg';
import { ReactComponent as Github } from 'assets/svg/github.svg';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg';
import { ReactComponent as MapPin } from 'assets/svg/map-pin.svg';
import css from './Info.module.scss';
import Card from 'components/Card/Card';

function Info() {
  return (
    <section className={css.container}>
      <Card className={css.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/68172438?v=4"
          alt="photo-profile"
          className={css.profile__photo}
        />

        <div>
          <h3 className={css.profile__name}>Jones Cesar N</h3>
          <p className={css.profile__area}>Full Stack Developer</p>
        </div>
      </Card>
      <Card className={css.info}>
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
      </Card>
      <Card className={css.techs}>
        {/* <div className="info__techs"></div> */}
        <h3>Tecnologias</h3>
        <ul>
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
      </Card>
      <Card className={css.experience}>
        <h3>Experiências</h3>
        <ul>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - Atualmente</p>
            <h5 className="regular">Community Experience</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - Atualmente</p>
            <h5 className="regular">Community Experience</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - Atualmente</p>
            <h5 className="regular">Community Experience</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - Atualmente</p>
            <h5 className="regular">Community Experience</h5>
          </li>
        </ul>
      </Card>
      <Card className={css.experience}>
        <h3>Educação</h3>
        <ul>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - 2019</p>
            <h5>GoStack</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - 2019</p>
            <h5>Ignite</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - 2019</p>
            <h5>Ignite Pro</h5>
          </li>
          <li>
            <h4>Rocketseat</h4>
            <p>2019 - 2019</p>
            <h5>Ignite Pro</h5>
          </li>
        </ul>
      </Card>
    </section>
  );
}

export default Info;
