import React from 'react';

import css from './Contents.module.scss';
import Posts from './Posts';
import Projects from './Projects';

function Contents() {
  return (
    <section className={css.container}>
      <Projects />
      <Posts />
    </section>
  );
}

export default Contents;
