import React from 'react';
import {CardProps} from '../../types/card';

const Card: React.FC<CardProps> = (props) => {
  return <div>{props.title}</div>
}

export default Card;
