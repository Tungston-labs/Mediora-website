import React from "react";

import {
  Section,
  Container,
  Grid,
  Logo,
  Description,
  SocialRow,
  SocialIcon,
  Title,
  Links,
  Link,
  ContactItem,
  Icon,
  ContactText,
  Image,
  Button,
  RightColumn,
  Bottom,
  BrandColumn,
  LinksColumn,
  ContactColumn
} from "./Footer.styles";



import logo from "../../assets/footer/logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import linkedin from "../../assets/footer/linkedin.svg";

import time from "../../assets/footer/time.svg";
import mail from "../../assets/footer/mail.svg";
import location from "../../assets/footer/location.svg";

import illustration from "../../assets/footer/image.svg";

const Footer = () => {
  return (
    <Section>
      <Container>

        <Grid>



          <BrandColumn>
            <Logo src={logo} />

            <Description>
              To simplify health insurance for every individual and family by
              providing expert guidance from a health insurance expert,
              transparent advice, and personalized solutions—ensuring financial
              security, peace of mind, and lifelong protection.
            </Description>

            <SocialRow>
              <SocialIcon src={facebook} />
              <SocialIcon src={twitter} />
              <SocialIcon src={linkedin} />
            </SocialRow>
          </BrandColumn>



          <LinksColumn>
            <Title>QUICK LINKS</Title>

            <Links>
              <Link>HOME</Link>
              <Link>ABOUT US</Link>
              <Link>SERVICES</Link>
              <Link>CONTACT US</Link>
            </Links>
          </LinksColumn>



          <ContactColumn>
            <Title>GET IN TOUCH</Title>

            <ContactItem>
              <Icon src={time} />
              <ContactText>9 AM – 6 PM, MONDAY – SATURDAY</ContactText>
            </ContactItem>

            <ContactItem>
              <Icon src={mail} />
              <ContactText>mediorainfo@gmail.com</ContactText>
            </ContactItem>

             <ContactItem>
              <Icon src={mail} />
              <ContactText>7356053383 , 7356053393, 7356153393</ContactText>
            </ContactItem>
            
            <ContactItem>
              <Icon src={location} />
              <ContactText>
               Mediora , Second Floor , Vilakkath Tower , Opposite Cloud 9 Hotel , Thankalam , Kothamangalam Taluk , Ernakulam Dist , pin :-686691
              </ContactText>
            </ContactItem>
          </ContactColumn>



          <RightColumn>
            <Image src={illustration} />

            <Button>EXPLORE PLANS</Button>
          </RightColumn>

        </Grid>

        <Bottom>
          © Copyright 2026, Medi Ora. Designed by Tungston Labs.
        </Bottom>

      </Container>
    </Section>
  );
};

export default Footer;
