import React from "react";
import {
  LeftPanel,
  Heading,
  SubText,
  InfoItem,
  InfoIcon,
  InfoText,
  SocialColumn,
  SocialIcon,
  ModalImage,
  PhonesGrid
} from "./ContactModal.styles";

import phone from "../../assets/modal/phone.svg";
import mail from "../../assets/modal/mail.svg";
import location from "../../assets/modal/location.svg";
import modalImage from "../../assets/modal/modal image.svg";

import facebook from "../../assets/modal/facebook.svg";
import twitter from "../../assets/modal/twitter.svg";
import linkedin from "../../assets/modal/linkedin.svg";

const ContactInfo = () => {
  return (
    <LeftPanel>

      <Heading>Connect With Our Insurance Experts</Heading>

      <SubText>
        Connect with Mediora’s professional advisors for reliable
        health insurance solutions, policy guidance, and dedicated
        customer support tailored to your needs.
      </SubText>

      <InfoItem>
        <InfoIcon src={phone}/>
        <InfoText>
          <strong>Call Us</strong><br/>
          0485 2000361
        </InfoText>
      </InfoItem>

      <InfoItem style={{ alignItems: 'flex-start' }}>
        <InfoIcon src={phone} style={{ marginTop: '0.3rem' }}/>

        <PhonesGrid>
          <div>
            <strong>Call Us</strong>
            <span>7356053383</span>
          </div>

          <div>
            <strong>Call Us</strong>
            <span>7356153393</span>
          </div>

          <div>
            <strong>Call Us</strong>
            <span>7356053393</span>
          </div>
        </PhonesGrid>

      </InfoItem>

      <InfoItem>
        <InfoIcon src={mail}/>
        <InfoText>
          <strong>Email Us</strong><br/>
          mediorainfo@gmail.com
        </InfoText>
      </InfoItem>

      <InfoItem>
        <InfoIcon src={location}/>
        <InfoText>
          <strong>Location</strong><br/>
          MEDIORA , SECOND FLOOR , VILAKKATH TOWER ,<br/>
          OPPOSITE CLOUD 9 HOTEL , THANKALAM ,<br/>
          KOTHAMANGALAM TALUK , ERNAKULAM DIST , PIN :-686691
        </InfoText>
      </InfoItem>

      <SocialColumn>
        <SocialIcon src={facebook}/>
        <SocialIcon src={twitter}/>
        <SocialIcon src={linkedin}/>
      </SocialColumn>

      <ModalImage src={modalImage} />

    </LeftPanel>
  );
};

export default ContactInfo;
