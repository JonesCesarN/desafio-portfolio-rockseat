import React from 'react';
import css from './Card.module.scss';

function Card({ children, className, onClick }) {
  return (
    <div
      className={`${css.card} ${className}`}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
