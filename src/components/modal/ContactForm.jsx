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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: typeof phone === "string" ? phone : "",
      insurancePolicy: typeof policy === "string" ? policy : ""
    }));
  }, [phone, policy]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Remove error when user starts typing
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  // ✅ Validation Function
  const validate = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Pin Code (6 digits)
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "Pin code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Pin code must be 6 digits";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone Number (10 digits)
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    // Insurance Policy
    if (!formData.insurancePolicy.trim()) {
      newErrors.insurancePolicy = "Insurance policy is required";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const response = await fetch(
        "https://mediorainsurance.com/send-mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Message sent successfully!");
        onClose();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <RightPanel>
      <Logo src={logo} />

      <Form>
        <Field>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.firstName}
            </span>
          )}
        </Field>

        <Field>
          <Label>Pin Code</Label>
          <Input
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
          {errors.pinCode && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.pinCode}
            </span>
          )}
        </Field>

        <Field>
          <Label>Email</Label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}
        </Field>

        <Field>
          <Label>Phone Number</Label>
          <Input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.phoneNumber}
            </span>
          )}
        </Field>

        <FullField>
          <Field>
            <Label>Select Insurance Policy</Label>
            <Input
              name="insurancePolicy"
              value={formData.insurancePolicy}
              onChange={handleChange}
            />
            {errors.insurancePolicy && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.insurancePolicy}
              </span>
            )}
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
            {errors.message && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.message}
              </span>
            )}
          </Field>
        </FullField>
      </Form>

      <SendButton onClick={handleSubmit}>
        SEND MESSAGE
      </SendButton>
    </RightPanel>
  );
};

export default ContactForm;