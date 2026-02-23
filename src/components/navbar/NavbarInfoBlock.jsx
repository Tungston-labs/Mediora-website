import React from "react";
import {
  InfoBlockContainer,
  IconBox,
  InfoText,
  InfoTitle,
  InfoSubtitle
} from "./Navbar.styles";

const NavbarInfoBlock = ({ icon, title, subtitle, hideOnTablet }) => {
  return (
    <InfoBlockContainer $hideOnTablet={hideOnTablet}>
      <IconBox>
        <img src={icon} alt={title} />
      </IconBox>

      <InfoText>
        <InfoTitle>{title}</InfoTitle>
        <InfoSubtitle>{subtitle}</InfoSubtitle>
      </InfoText>
    </InfoBlockContainer>
  );
};

export default NavbarInfoBlock;
