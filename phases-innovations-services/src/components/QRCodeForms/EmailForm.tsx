// components/QRCodeForms/EmailForm.tsx
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const EmailForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
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
        label="Email"
        margin="normal"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Subject"
        margin="normal"
        name="subject"
        value={formData.subject}
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
        Scanning the QR code will send this email.
      </Typography>
    </form>
  );
};

export default EmailForm;
