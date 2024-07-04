// components/QRCodeForms/CallForm.tsx
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const CallForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    countryCode: "",
    phoneNumber: "",
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
      <Typography variant="body2">
        Scanning the QR code will call this number.
      </Typography>
    </form>
  );
};

export default CallForm;
