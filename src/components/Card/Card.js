import React from 'react';
import css from './Card.module.scss';

function Card({ children, className }) {
  return <div className={`${css.card} ${className}`}>{children}</div>;
}

export default Card;
