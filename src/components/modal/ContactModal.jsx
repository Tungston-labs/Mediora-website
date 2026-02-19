import React from "react";
import {
  Overlay,
  ModalWrapper,
  CloseButton
} from "./ContactModal.styles";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useModalEffects from "./useModalEffects";

const ContactModal = ({ open, onClose }) => {

  useModalEffects(open, onClose);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e)=>e.stopPropagation()}>

        <CloseButton onClick={onClose}>✕</CloseButton>

        <ContactInfo />
        <ContactForm />

      </ModalWrapper>
    </Overlay>
  );
};

export default ContactModal;
