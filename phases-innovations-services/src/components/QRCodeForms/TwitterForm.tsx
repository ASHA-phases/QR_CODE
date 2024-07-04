import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const TwitterForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    profileUrl: "",
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
        label="Twitter Profile URL"
        placeholder="https://twitter.com/yourprofile"
        margin="normal"
        name="profileUrl"
        value={formData.profileUrl}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Scanning the QR code will open this Twitter profile.
      </Typography>
    </form>
  );
};

export default TwitterForm;
