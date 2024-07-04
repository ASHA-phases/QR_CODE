import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const WhatsappForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    countryCode: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Country Code"
        margin="normal"
        name="countryCode"
        value={formData.countryCode}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Phone Number"
        margin="normal"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Message"
        margin="normal"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Scanning the QR code will send WhatsApp message to the phone number.
      </Typography>
    </form>
  );
};

export default WhatsappForm;
