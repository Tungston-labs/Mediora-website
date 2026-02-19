import React, { useState } from "react";
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

const Hero = ({ openContact }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const phoneRegex = /^\+\d{1,3}\d{10}$/;

  const handleSubmit = () => {
    let newErrors = {};

    if (!phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone =
        "Enter valid number with country code (e.g. +919876543210)";
    }

    if (!selected) {
      newErrors.selected = "Please select insurance type";
    }

    setErrors(newErrors);

    // ✅ OPEN GLOBAL MODAL FROM APP
    if (Object.keys(newErrors).length === 0) {
      openContact(phone, selected);
    }
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919898989898";

    let message = "Hi, I'm interested to know more about health insurance.";

    if (selected) message += ` Policy: ${selected}.`;
    if (phone) message += ` My number: ${phone}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  return (
<HeroSection id="home">
      <WhatsappWrapper onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
        <WhatsappText>CHAT WITH EXPERT</WhatsappText>
        <WhatsappIcon src={whatsapp} alt="whatsapp" />
      </WhatsappWrapper>


      <HeroContainer>
        <ContentWrapper>
          <Badge>
            <img src={tickVector} alt="" width="14" />
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
            We provide expert guidance from a health insurance expert to help
            you choose the right health insurance policy in India with complete
            clarity and confidence.
          </Description>

          <QuoteCard>
            <InputRow>
              {/* Phone */}
              <div style={{ flex: 1 }}>
                <InputBox>
                  <img src={phoneIcon} alt="Phone" width="18" />
                  <input
                    type="tel"
                    placeholder="Enter mobile number (+91...)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      border: "none",
                      outline: "none",
                      flex: 1,
                      backgroundColor: "rgba(249, 249, 249, 0.7)"
                    }}
                  />
                </InputBox>
                {errors.phone && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Dropdown */}
              <div style={{ flex: 1 }}>
                <DropdownWrapper>
                  <InputBox
                    onClick={() => setOpen(!open)}
                    style={{ cursor: "pointer" }}
                  >
                    <LeftGroup>
                      <img src={profileIcon} alt="" width="18" />
                      <span>{selected || "I WANT TO COVER"}</span>
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

                {errors.selected && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.selected}
                  </p>
                )}
              </div>
            </InputRow>

            <QuoteButton onClick={handleSubmit}>
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
