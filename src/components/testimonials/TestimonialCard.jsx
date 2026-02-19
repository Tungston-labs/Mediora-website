import React from "react";

import {
  Card,
  Top,
  Avatar,
  Name,
  Stars,
  Star,
  Divider,
  Text
} from "./Testimonials.styles";

import profile from "../../assets/testimonials/profile.svg";
import star from "../../assets/testimonials/star.svg";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <Card>

      <Top>
        <Avatar src={profile} />

        <div>
          <Stars>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} src={star} />
            ))}
          </Stars>

          <Name>
            {name}, {role}
          </Name>
        </div>
      </Top>

      <Divider />

      <Text>{text}</Text>

    </Card>
  );
};

export default TestimonialCard;
