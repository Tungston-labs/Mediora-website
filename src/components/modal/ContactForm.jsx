import React, { useState, useEffect } from "react";
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

const ContactForm = ({ phone, policy, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    pinCode: "",
    email: "",
    phoneNumber: "",
    insurancePolicy: "",
    message: ""
  });

 useEffect(() => {
  setFormData((prev) => ({
    ...prev,
    phoneNumber: typeof phone === "string" ? phone : "",
    insurancePolicy: typeof policy === "string" ? policy : ""
  }));
}, [phone, policy]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Message sent successfully!");
    onClose();
  };

  return (
    <RightPanel>
      <Logo src={logo} />

      <Form>
        <Field>
          <Label>First Name</Label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} />
        </Field>

        <Field>
          <Label>Pin Code</Label>
          <Input name="pinCode" value={formData.pinCode} onChange={handleChange} />
        </Field>

        <Field>
          <Label>Email</Label>
          <Input name="email" value={formData.email} onChange={handleChange} />
        </Field>

        <Field>
          <Label>Phone Number</Label>
          <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </Field>

        <FullField>
          <Field>
            <Label>Select Insurance Policy</Label>
            <Input name="insurancePolicy" value={formData.insurancePolicy} onChange={handleChange} />
          </Field>
        </FullField>

        <FullField>
          <Field>
            <Label>Message</Label>
            <TextArea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
            />
          </Field>
        </FullField>
      </Form>

      <SendButton onClick={handleSubmit}>SEND MESSAGE</SendButton>
    </RightPanel>
  );
};

export default ContactForm;
