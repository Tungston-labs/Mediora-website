import React from "react";
import { FloatCard, FloatIcon, FloatText } from "./About.styles";

const FloatingCard = ({ icon, text, style }) => {
  return (
    <FloatCard style={style}>
      <FloatIcon src={icon} />
      <FloatText>{text}</FloatText>
    </FloatCard>
  );
};

export default FloatingCard;
