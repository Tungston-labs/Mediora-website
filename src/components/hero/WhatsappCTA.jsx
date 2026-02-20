import React from "react";
import {
  WhatsappWrapper,
  WhatsappText,
  WhatsappIcon
} from "./Hero.styles";

import whatsapp from "../../assets/hero/whatsapp.svg";

const WhatsappCTA = ({ phone, selected }) => {

  const handleWhatsAppClick = () => {

    const phoneNumber = "+919898989898";

    let message =
      "Hi, I'm interested to know more about health insurance.";

    if (selected) message += ` Policy: ${selected}.`;
    if (phone) message += ` My number: ${phone}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (

    <WhatsappWrapper
      onClick={handleWhatsAppClick}
      style={{ cursor: "pointer" }}
    >
      <WhatsappText>
        CHAT WITH EXPERT
      </WhatsappText>

      <WhatsappIcon
        src={whatsapp}
        alt="whatsapp"
      />

    </WhatsappWrapper>

  );
};

export default WhatsappCTA;