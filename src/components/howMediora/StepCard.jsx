import React from "react";
import {
  Card,
  Icon,
  Title,
  Description,
  StepNumber,
  Arrow,
  MobileArrow
} from "./HowMediora.styles";

import upArrow from "../../assets/howmediora/uparrow.svg";
import downArrow from "../../assets/howmediora/downarrow.svg";
import leftArrow from "../../assets/howmediora/leftarrow.svg";
import rightArrow from "../../assets/howmediora/rightarrow.svg";

const StepCard = ({
  icon,
  title,
  description,
  number,
  align,
  index,
  total
}) => {

  const isLast = index === total - 1;

  return (
    <Card $align={align}>

      <Icon src={icon} alt={title} />

      <Title>{title}</Title>

      <Description>{description}</Description>

      <StepNumber $align={align}>
         <img src={number} alt="step"/>
      </StepNumber>


      {!isLast && (
        <>
          <Arrow
            src={align === "top" ? downArrow : upArrow}
            $align={align}
            className="desktop-arrow"
          />

          <MobileArrow
            src={align === "top" ? rightArrow : leftArrow}
            $align={align}
            className="mobile-arrow"
          />
        </>
      )}

    </Card>
  );
};

export default StepCard;
