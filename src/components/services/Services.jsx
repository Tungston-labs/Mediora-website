import React from "react";
import ServiceCard from "./ServiceCard";

import {
  Section,
  Container,
  Label,
  TickIcon,
  Heading,
  Description,
  Grid
} from "./Services.styles";

import image1 from "../../assets/service/image1.svg";
import image2 from "../../assets/service/image2.svg";
import tick from "../../assets/service/tick.svg";

const bullets = [/* same bullets */];

const Services = ({ openContact }) => {
  return (
    <Section id="services">
      <Container>
        <Label>
          <TickIcon src={tick} alt="tick" />
          MEDIORA’S SERVICES
        </Label>

        <Heading>
          MEDIORA, WE SIMPLIFY HEALTH INSURANCE IN INDIA & GUIDE YOU TO THE PERFECT
          INDIVIDUAL AND FAMILY HEALTH INSURANCE PLAN FOR YOU & YOUR FAMILY.
        </Heading>

        <Description>
          Choosing the right individual health insurance is one of the most important
          steps to protect your health and financial well-being.
        </Description>

        <Grid>
          <ServiceCard
            image={image1}
            title="HEALTH INSURANCE FOR INDIVIDUALS"
            bullets={bullets}
            openContact={openContact}
          />

          <ServiceCard
            image={image2}
            title="HEALTH INSURANCE FOR FAMILY"
            bullets={bullets}
            openContact={openContact}
          />
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
