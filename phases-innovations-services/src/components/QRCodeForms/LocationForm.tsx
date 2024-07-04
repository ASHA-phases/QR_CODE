import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const LocationForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
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
        label="Latitude"
        margin="normal"
        name="latitude"
        value={formData.latitude}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Longitude"
        margin="normal"
        name="longitude"
        value={formData.longitude}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Scanning the QR code will show this location.
      </Typography>
    </form>
  );
};

export default LocationForm;
