// components/QRCodeForms/LinkForm.tsx
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const LinkForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <TextField
        fullWidth
        label="Submit URL"
        placeholder="https://"
        margin="normal"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Your QR code will open this URL.
      </Typography>
    </>
  );
};

export default LinkForm;
