import React from 'react';
import css from './CircleImg.module.scss';

function CircleImg({ src, alt, width }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: width ? width : 'current' }}
      className={css.img_circle}
    />
  );
}

export default CircleImg;
