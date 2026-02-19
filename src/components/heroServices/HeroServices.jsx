import React from "react";
import ServiceCard from "./ServiceCard";
import { Strip, Container } from "./HeroServices.styles";



import expert from "../../assets/heroservice/expert.svg";
import clock from "../../assets/heroservice/clock.svg";
import lifetime from "../../assets/heroservice/lifetime.svg";
import legal from "../../assets/heroservice/legal.svg";


const servicesData = [
  {
    icon: expert,
    title: "EXPERT GUIDANCE",
    description:
      "Certified health insurance expert and health insurance agent specialists who simplify  complex health policy in india and guide you to the right plan — not just any plan."
  },
  {
    icon: clock,
    title: "FAST & HASSLE-FREE PROCESS",
    description:
      "Quick comparisons to compare health insurance india, easy documentation with a trusted  health insurance broker, and smooth onboarding — no long queues, no confusion."
  },
  {
    icon: lifetime,
    title: "LIFETIME SUPPORT",
    description:
      "From buying your individual health insurance policy or family health cover to claims  assistance with a trusted health insurance agent, we stay with you at every step of your  journey."
  },
  {
    icon: legal,
    title: "LEGAL SUPPORT",
    description:
      "Get expert assistance from a health insurance expert with health policy in india,  policy-related legal matters, documentation, and claims disputes through the best health  insurance agency."
  }
];

const HeroServices = () => {
  return (
    <Strip>
      <Container>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Container>
    </Strip>
  );
};

export default HeroServices;
