import React from 'react';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = (props) => {
  return <div>{props.title}</div>
}

export default Card;
