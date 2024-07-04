// components/QRCodeForms/VCardForm.tsx
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const VCardForm: React.FC<Props> = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mobile: "",
    email: "",
    website: "",
    company: "",
    jobTitle: "",
    fax: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
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
        label="First Name"
        margin="normal"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        name="lastName"
        value={formData.lastName}
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
        label="Mobile"
        margin="normal"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
      />
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
        label="Website"
        placeholder="https://"
        margin="normal"
        name="website"
        value={formData.website}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Company"
        margin="normal"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Job Title"
        margin="normal"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Fax"
        margin="normal"
        name="fax"
        value={formData.fax}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Address"
        margin="normal"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="City"
        margin="normal"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Post Code"
        margin="normal"
        name="postCode"
        value={formData.postCode}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Country"
        margin="normal"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      <Typography variant="body2">
        Your QR code will save this contact to the phone scanning.
      </Typography>
    </form>
  );
};

export default VCardForm;
