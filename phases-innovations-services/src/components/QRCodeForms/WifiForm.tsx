import React, { useState } from "react";
import { TextField, Typography, Select, MenuItem, InputLabel, Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const WifiForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    ssid: "",
    password: "",
    securityType: "",
  });

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Network name"
        margin="normal"
        name="networkname"
        value={formData.ssid}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="SSID"
        margin="normal"
        name="ssid"
        value={formData.ssid}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputLabel id="securityTypeLabel">Security Type</InputLabel>
      <Select
        labelId="securityTypeLabel"
        id="securityType"
        fullWidth
        value={formData.securityType}
        label="Security Type"
        onChange={(e) => handleChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
        name="securityType"
      >
        <MenuItem value="WEP">WEP</MenuItem>
        <MenuItem value="WPA">WPA</MenuItem>
        <MenuItem value="WPA2">WPA2</MenuItem>
      </Select>
      <FormControlLabel control={<Checkbox />} label="Hidden" />
      <Typography variant="body2">
        Scanning the QR code will connect to this WiFi network.
      </Typography>
    </form>
  );
};

export default WifiForm;
