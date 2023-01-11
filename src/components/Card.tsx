import React from 'react';

import './Card.scss';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps): JSX.Element => {
  return <div className="card">{children}</div>;
};

export default Card;
