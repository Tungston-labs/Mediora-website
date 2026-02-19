import React from "react";

import {
  Section,
  Container,
  Left,
  Heading,
  Description,
  StatsRow,
  Stat,
  StatNumber,
  StatLabel,
  Center,
  Divider,
  Flower,
  Right,
  List,
  ListItem,
  Check
} from "./TrustSection.styles";

import flower from "../../assets/about/flowers.svg";

const TrustSection = () => {
  return (
    <Section>
      <Container>

       

        <Left>

          <Heading>
            NEED HELP CHOOSING THE RIGHT PLAN ?
          </Heading>

          <Description>
            We’re here to listen, understand your needs, and guide you to the right individual health  insurance policy with a trusted health insurance expert from the best health insurance  agency.
          </Description>

          <StatsRow>

            <Stat>
              <StatNumber>500+</StatNumber>
              <StatLabel>SATISFIED CUSTOMERS</StatLabel>
            </Stat>

            <Stat>
              <StatNumber>24/7</StatNumber>
              <StatLabel>CUSTOMER SUPPORT</StatLabel>
            </Stat>

            <Stat>
              <StatNumber>91.9%</StatNumber>
              <StatLabel>SETTLEMENT RATIO</StatLabel>
            </Stat>

          </StatsRow>

        </Left>

        

        <Center>
          <Divider />
          <Flower src={flower} alt="support flower"/>
        </Center>

      

        <Right>

          <List>

             <ListItem>
              <Check>✓</Check>
             Guiding you to the right health insurance with care, clarity, and complete peace of mind.
            </ListItem>

            <ListItem>
              <Check>✓</Check>
              Expert guidance, transparent advice, & reliable health coverage—all in one place
            </ListItem>

            <ListItem>
              <Check>✓</Check>
             Guiding you to the right health insurance with care, clarity, and complete peace of mind.
            </ListItem>

          </List>

        </Right>

      </Container>
    </Section>
  );
};

export default TrustSection;
