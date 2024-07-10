import React, { useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  onFormChange: (formData: any) => void;
}

const FacebookForm: React.FC<Props> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      profileUrl: "",
    },
    validationSchema: Yup.object({
      profileUrl: Yup.string()
        .url("Invalid URL")
        .matches(
          /^(https?:\/\/)?(www\.)?facebook\.com\/.+/i,
          "Must be a valid Facebook profile URL"
        )
        .required("Facebook Profile URL is required"),
    }),
    onSubmit: (values) => {
      onFormChange(values);
    },
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    onFormChange(formik.values);
  }, [formik.values, onFormChange]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="profileUrl"
        name="profileUrl"
        label="Facebook Profile URL"
        placeholder="https://www.facebook.com/yourprofile"
        margin="normal"
        value={formik.values.profileUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.profileUrl && Boolean(formik.errors.profileUrl)}
        helperText={formik.touched.profileUrl && formik.errors.profileUrl}
        required
      />
      <Typography variant="body2">
        Scanning the QR code will open this Facebook profile.
      </Typography>
    </form>
  );
};

export default FacebookForm;
export{};