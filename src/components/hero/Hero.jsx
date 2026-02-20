import React from "react";

import {

HeroSection,
HeroContainer,
ContentWrapper,
Badge,
Heading,
GreenText,
Description,
HeroImage

} from "./Hero.styles";

import tickVector
from "../../assets/hero/tickvector.svg";

import heroImage
from "../../assets/hero/heroImage.svg";

import HeroForm from "./HeroForm";
import WhatsappCTA from "./WhatsappCTA";


const Hero = ({ openContact }) => {

return (

<HeroSection id="home">

<WhatsappCTA/>

<HeroContainer>

<ContentWrapper>

<Badge>

<img src={tickVector}
width="14"
alt=""
/>

HEALTH INSURANCE SPECIALISTS,
NOT JUST AGENTS

</Badge>


<Heading>

YOUR HEALTH,
OUR PRIORITY.

<br/>

<GreenText>

EXPERT GUIDANCE

</GreenText>

FOR BETTER

<br/>

HEALTH PROTECTION.

</Heading>


<Description>

We provide expert guidance
from a health insurance expert
to help you choose the right
policy with clarity and confidence.

</Description>


<HeroForm
openContact={openContact}
/>

</ContentWrapper>


<HeroImage
src={heroImage}
alt="hero"
/>

</HeroContainer>

</HeroSection>

);

};

export default Hero;