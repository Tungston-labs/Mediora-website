import React from "react";
import TestimonialCard from "./TestimonialCard";

import {
  Section,
  Container,
  Label,
  Tick,
  Heading,
  SubText,
  Grid
} from "./Testimonials.styles";

import tick from "../../assets/testimonials/tick.svg";

const testimonials = [
  {
    name: "RAHUL V",
    role: "POLICY HOLDER",
    text: "Excellent experience with MediOra Health Insurance. The claim process was smooth and well-handled. Special thanks to Aslam for the timely support and guidance."
  },
  {
    name: "NIYAS",
    role: "FAMILY PLAN CLIENT",
    text: "MediOra has a very professional and supportive team. My health insurance claim was handled smoothly, and they followed up properly to ensure everything was processed on time. It really reduced a lot of stress for us."
  },
  {
    name: "PRIYA",
    role: "POLICY HOLDER",
    text: "I had a very good experience with Mr. Aslam at MediOra Health Insurance. He explained everything clearly and was very supportive throughout. I would definitely recommend his guidance."
  }
];

const Testimonials = () => {
  return (
    <Section>
      <Container>

        <Label>
          <Tick src={tick} />
          OUR TESTIMONIALS
        </Label>

        <Heading>
          MEDIORA MADE HEALTH INSURANCE SIMPLE AND STRESS-FREE
        </Heading>

        <SubText>
          With MediOra, health insurance feels simple, clear, and worry-free.
        </SubText>

        <Grid>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </Grid>

      </Container>
    </Section>
  );
};

export default Testimonials;
