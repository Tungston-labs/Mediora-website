import React from "react";
import StepCard from "./StepCard";

import {
  Section,
  Container,
  Label,
  Heading,
  SubText,
  Timeline,
  VerifiedIcon
} from "./HowMediora.styles";



import share from "../../assets/howmediora/share_requirement.svg";
import consultation from "../../assets/howmediora/expert_consultation.svg";
import choose from "../../assets/howmediora/choose_policy.svg";
import instant from "../../assets/howmediora/instant_assistance.svg";
import lifetime from "../../assets/howmediora/life_time.svg";



import one from "../../assets/howmediora/one.svg";
import two from "../../assets/howmediora/two.svg";
import three from "../../assets/howmediora/three.svg";
import four from "../../assets/howmediora/four.svg";
import five from "../../assets/howmediora/five.svg";



import verifiedtick from "../../assets/howmediora/verifiedtick.svg";

const steps = [
  {
    icon: share,
    title: "SHARE REQUIREMENT",
    description: "Tell us your needs and preferences.",
    number: one,
    align: "top"
  },
  {
    icon: consultation,
    title: "EXPERT CONSULTATION",
    description: "Talk with a certified health insurance expert",
    number: two,
    align: "bottom"
  },
  {
    icon: choose,
    title: "CHOOSE YOUR POLICY",
    description: "Select the best health insurance plan.",
    number: three,
    align: "top"
  },
  {
    icon: instant,
    title: "INSTANT ASSISTANCE",
    description: "Get support for claims and queries.",
    number: four,
    align: "bottom"
  },
  {
    icon: lifetime,
    title: "LIFETIME SUPPORT",
    description: "Receive ongoing health insurance assistance.",
    number: five,
    align: "top"
  }
];

const HowMediora = () => {
  return (
    <Section>
      <Container>

        <Label>
          <VerifiedIcon src={verifiedtick} />
          HOW MEDIORA WORKS
        </Label>

        <Heading>
          YOUR PATH TO BETTER HEALTH COVERAGE
        </Heading>

        <SubText>
          Making health insurance decisions simpler, smarter, and stress-free.
        </SubText>

        <Timeline>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              total={steps.length}
            />
          ))}
        </Timeline>

      </Container>
    </Section>
  );
};

export default HowMediora;
