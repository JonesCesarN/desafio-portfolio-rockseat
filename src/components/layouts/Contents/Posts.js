import Card from 'components/Card/Card';
import React from 'react';
import css from './Posts.module.scss';

function Posts() {
  return (
    <article className={css.posts}>
      <Card className={css.posts__title}>
        <h2>Recent Posts</h2>
      </Card>
      <div className={css.posts__wrapper}>
        <Card className={css.post}>
          <img
            src="https://avatars.githubusercontent.com/u/68172438?v=4"
            alt="photo-profile"
            className={css.post__photo}
          />
          <div className={css.post__content}>
            <div>
              <h2 className={css.post__title}>Erro adb devices no Genymotion e Android Studio (React Native)</h2>
              <span className={css.post__time}>2 anos atrás</span>
              <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
            </div>
            <ul>
              <li>#react-native</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
              <li>#genimotion</li>
            </ul>
          </div>
        </Card>
      </div>
    </article>
  );
}

export default Posts;
