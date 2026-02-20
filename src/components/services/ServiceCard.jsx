import React from "react";

import {
  Card,
  ImageWrapper,
  Image,
  Bar,
  IconBox,
  Content,
  BulletGrid,
  Bullet,
  Profile,
  Tick,
  Button
} from "./Services.styles";

import tick from "../../assets/service/tick.svg";
import profile from "../../assets/service/profile.svg";

const ServiceCard = ({ image, title, bullets, openContact }) => {
  const handleEnquire = () => {

    openContact?.("", title);
  };

  return (
    <Card>
      <ImageWrapper>
        <Image src={image} />

        <Bar>
          {title}
          <IconBox>
            <Profile src={profile} alt="profile" />
          </IconBox>
        </Bar>
      </ImageWrapper>

      <Content>
        <BulletGrid>
          {bullets.map((item, index) => (
            <Bullet key={index}>
              <Tick src={tick} />
              {item}
            </Bullet>
          ))}
        </BulletGrid>


        <Button onClick={handleEnquire}>ENQUIRE NOW</Button>
      </Content>
    </Card>
  );
};

export default ServiceCard;
