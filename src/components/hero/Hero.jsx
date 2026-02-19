import React,{useState} from "react";
import {
  HeroSection,
  HeroContainer,
  ContentWrapper,
  Badge,
  Heading,
  GreenText,
  Description,
  QuoteCard,
  InputRow,
  InputBox,
  LeftGroup,
  Arrow,
  QuoteButton,
  HelperText,
  HeroImage,
  WhatsappWrapper,
  WhatsappText,
  WhatsappIcon,
  DropdownWrapper,
  Dropdown,
  Option
} from "./Hero.styles";


import heroImage from "../../assets/hero/heroImage.svg";
import phoneIcon from "../../assets/hero/phone-call.svg";
import profileIcon from "../../assets/hero/profile_icon.svg";
import tickVector from "../../assets/hero/tickvector.svg";
import downArrow from "../../assets/hero/downarrow.svg";
import whatsapp from "../../assets/hero/whatsapp.svg";

const Hero = () => {
  const [open, setOpen] = useState(false);
const [selected, setSelected] = useState("I WANT TO COVER");
  
return (
    <HeroSection>
      <WhatsappWrapper>
        <WhatsappText>CHAT WITH EXPERT</WhatsappText>
        <WhatsappIcon src={whatsapp} alt="whatsapp" />
      </WhatsappWrapper>
      <HeroContainer>
        <ContentWrapper>

          <Badge>
            <img src={tickVector} alt="" width="14"/>
            HEALTH INSURANCE SPECIALISTS, NOT JUST AGENTS
          </Badge>

          <Heading>
            YOUR HEALTH, OUR PRIORITY.
            <br />
            <GreenText>EXPERT GUIDANCE</GreenText> FOR BETTER
            <br />
            HEALTH PROTECTION.
          </Heading>

          <Description>
           We provide expert guidance from a health insurance expert to help you choose the right
             health insurance policy in india with complete clarity and confidence. Protecting your  
             health and finances through the best health insurance agency is our top priority.
          </Description>

         <QuoteCard>

  <InputRow>

   <InputBox>
  <img src={phoneIcon} alt="Phone" width="18" />
  <input 
    type="tel" 
    placeholder="Enter mobile number"
style={{
  border: "none",
  outline: "none",
  flex: 1,
  backgroundColor: "rgba(249, 249, 249, 0.7)"
}}
  />
</InputBox>


   <DropdownWrapper>
  <InputBox
    onClick={() => setOpen(!open)}
    style={{ cursor: "pointer" }}
  >
    <LeftGroup>
      <img src={profileIcon} alt="" width="18" />
      <span>{selected}</span>
    </LeftGroup>

    <Arrow
      src={downArrow}
      alt="arrow"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "0.3s ease"
      }}
    />
  </InputBox>

  {open && (
    <Dropdown>
      <Option
        onClick={() => {
          setSelected("HEALTH INSURANCE FOR INDIVIDUALS");
          setOpen(false);
        }}
      >
        HEALTH INSURANCE FOR INDIVIDUALS
      </Option>

      <Option
        onClick={() => {
          setSelected("HEALTH INSURANCE FOR FAMILY");
          setOpen(false);
        }}
      >
        HEALTH INSURANCE FOR FAMILY
      </Option>
    </Dropdown>
  )}
</DropdownWrapper>



  </InputRow>


  <QuoteButton>
    GET A FREE QUOTE
  </QuoteButton>

  <HelperText>
    Your Number Is 100% Safe With Us. No Spam. No Pressure.
  </HelperText>

</QuoteCard>


        </ContentWrapper>
      </HeroContainer>

      <HeroImage src={heroImage} alt="hero" />
    </HeroSection>
  );
};

export default Hero;
