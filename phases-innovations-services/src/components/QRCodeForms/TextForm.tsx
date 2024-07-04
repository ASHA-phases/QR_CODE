import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: { text: string }) => void; // Adjusted type to specify text field
}

const TextForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    text: "",
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
        label="Text"
        placeholder="Write your text here"
        margin="normal"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Scanning the QR code will show this text.
      </Typography>
    </form>
  );
};

export default TextForm;
