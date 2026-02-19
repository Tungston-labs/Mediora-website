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


const bullets = [
  "SUPER STAR",
  "STAR HEALTH ASSURE INSURANCE POLICY",
  "YOUNG STAR INSURANCE POLICY",
  "YOUNG STAR EXTRA PROTECT–ADD ON COVER",
  "STAR COMPREHENSIVE INSURANCE POLICY",
  "STAR WOMEN CARE INSURANCE POLICY",
  "SMART HEALTH PRO",
  "STAR HEALTH GAIN INSURANCE POLICY",
  "SENIOR CITIZENS RED CARPET HEALTH INSURANCE POLICY",
  "AROGYA SANJEEVANI POLICY, STAR HEALTH AND ALLIED INSURANCE CO LTD.",
   "SUPER STAR",
  "STAR HEALTH ASSURE INSURANCE POLICY",
  "YOUNG STAR INSURANCE POLICY",
  "YOUNG STAR EXTRA PROTECT–ADD ON COVER",
  "STAR COMPREHENSIVE INSURANCE POLICY",
  "STAR WOMEN CARE INSURANCE POLICY",
  "SMART HEALTH PRO",
  "STAR HEALTH GAIN INSURANCE POLICY",
  "SENIOR CITIZENS RED CARPET HEALTH INSURANCE POLICY",
  "AROGYA SANJEEVANI POLICY, STAR HEALTH AND ALLIED INSURANCE CO LTD."
];

const Services = () => {
  return (
    <Section id="services">
      <Container>

        <Label>
            <TickIcon src={tick} alt="tick"/>
            MEDIORA’S SERVICES</Label>

        <Heading>
          MEDIORA, WE SIMPLIFY HEALTH INSURANCE IN INDIA & GUIDE YOU TO THE PERFECT
          INDIVIDUAL AND FAMILY HEALTH INSURANCE PLAN FOR YOU & YOUR FAMILY.
        </Heading>

        <Description>
         Choosing the right individual health insurance is one of the most important steps to protect your 
         health and financial well-being. Medical expenses are rising every year, and a reliable individual
          health insurance policy ensures you can access quality healthcare without worrying about high costs.
        </Description>

        <Grid>

          <ServiceCard
            image={image1}
            title="HEALTH INSURANCE FOR INDIVIDUALS"
            bullets={bullets}
          />

          <ServiceCard
            image={image2}
            title="HEALTH INSURANCE FOR FAMILY"
            bullets={bullets}
          />

        </Grid>

      </Container>
    </Section>
  );
};

export default Services;
