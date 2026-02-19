import React from "react";
import FloatingCard from "./FloatingCard";

import {
  Section,
  Container,
  Content,
  Label,
  Tick,
  Heading,
  Green,
  Description,
  Block,
  BlockIcon,
  BlockTitle,
  BlockText,
  ImageWrapper,
  HeroImage
} from "./About.styles";



import abouttick from "../../assets/about/abouttick.svg";
import mission from "../../assets/about/mission.svg";
import vision from "../../assets/about/vision.svg";

import heroimage from "../../assets/about/heroimage.svg";

import longterm from "../../assets/about/longterm.svg";
import dedicated from "../../assets/about/dedicated.svg";
import personalized from "../../assets/about/personalizedpolicy.svg";
import expert from "../../assets/heroservice/expert.svg";

const About = () => {
  return (
    <Section id="about">
      <Container>

       

        <Content>

          <Label>
            <Tick src={abouttick} />
            ABOUT MEDIORA
          </Label>

          <Heading>
            EXPERT GUIDANCE, TRANSPARENT ADVICE,
            <br />
            & <Green>RELIABLE HEALTH COVERAGE</Green> — ALL IN ONE PLACE.
          </Heading>

          <Description>
            Guiding families toward better affordable family health insurance
            protection with trust and understanding from a trusted health
            insurance expert.
          </Description>

        

          <Block>
            <BlockIcon src={mission} />

            <div>
              <BlockTitle>OUR MISSION</BlockTitle>

              <BlockText>
                To simplify health insurance in India for every individual and
                family by delivering expert guidance from a dedicated health
                insurance expert, transparent advice, and personalized individual
                and family health insurance solutions—ensuring financial security,
                peace of mind, and lifelong protection through trusted health
                insurance providers in india partnerships.
              </BlockText>
            </div>
          </Block>

      
          <Block>
            <BlockIcon src={vision} />

            <div>
              <BlockTitle>OUR VISION</BlockTitle>

              <BlockText>
                To become the best health insurance agency in India, recognized
                for integrity, expertise from a trusted health insurance expert,
                and customer-first service—empowering communities to make
                confident healthcare decisions through reliable individual and
                family health insurance and build a healthier, financially secure
                future.
              </BlockText>
            </div>
          </Block>

        </Content>

        

        <ImageWrapper>

          <HeroImage src={heroimage} />

   

          <FloatingCard
            icon={longterm}
            text={`LONG TERM \nSUPPORT SYSTEM`}
            style={{ top: "10%", left: "20%" }}
          />

          <FloatingCard
            icon={dedicated}
            text={`DEDICATED\nClaims Desk`}
            style={{ top: "0%", right: "20%" }}
          />

          <FloatingCard
            icon={personalized}
            text={`PERSONALIZED\nPOLICY SELECTION`}
            style={{ top: "30%", right: "38%" }}
          />

          <FloatingCard
            icon={personalized}
            text={`CERTIFIED\nINSURANCE EXPERTS`}
            style={{ 
              bottom: "45%", 
              left: "0%",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
            }}
          />

        </ImageWrapper>

      </Container>
    </Section>
  );
};

export default About;
