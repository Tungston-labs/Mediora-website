import React from "react";
import {
  RightPanel,
  Logo,
  Form,
  Field,
  FullField,
  Label,
  Input,
  TextArea,
  SendButton
} from "./ContactModal.styles";

import logo from "../../assets/modal/logo.svg";

const ContactForm = () => {
  return (
    <RightPanel>

      <Logo src={logo}/>

      <Form>

        <Field>
          <Label>First Name</Label>
          <Input />
        </Field>

        <Field>
          <Label>Pin Code</Label>
          <Input />
        </Field>

        <Field>
          <Label>Email</Label>
          <Input />
        </Field>

        <Field>
          <Label>Phone Number</Label>
          <Input />
        </Field>

        <FullField>
          <Field>
            <Label>Select Insurance Policy</Label>
            <Input />
          </Field>
        </FullField>

        <FullField>
          <Field>
            <Label>Message</Label>
            <TextArea rows={3} placeholder="Write your message.." />
          </Field>
        </FullField>

      </Form>

      <SendButton>SEND MESSAGE</SendButton>

    </RightPanel>
  );
};

export default ContactForm;
