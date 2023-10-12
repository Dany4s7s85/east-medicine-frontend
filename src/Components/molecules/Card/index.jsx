import React from 'react';
import { StyledCard } from './Card.styles';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image/index'
import Paragraph from '../../atoms/Paragraph';

function Card({ title, children, cardData, ...props }) {
  return (
    <StyledCard {...props}>
      {cardData?.image && <Image imageUrl={cardData?.image} roundCustom={{top:10, left:0, bottom:0, right:10}}/>}
      <Heading level={4} children={`some text`}/>
      <Paragraph children={cardData?.information}/>
    </StyledCard>
  );
}

export default Card;
