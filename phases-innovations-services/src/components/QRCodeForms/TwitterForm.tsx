import React, { useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  onFormChange: (formData: any) => void;
}

const TwitterForm: React.FC<Props> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      profileUrl: "",
    },
    validationSchema: Yup.object({
      profileUrl: Yup.string()
        .url("Invalid URL")
        .matches(
          /^(https?:\/\/)?(www\.)?x\.com\/[a-zA-Z0-9_]{1,15}\/?$/,
          "Must be a valid Twitter profile URL"
        )
        .required("Twitter Profile URL is required"),
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
        label="Twitter Profile URL"
        placeholder="https://x.com/yourprofile"
        margin="normal"
        value={formik.values.profileUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.profileUrl && Boolean(formik.errors.profileUrl)}
        helperText={formik.touched.profileUrl && formik.errors.profileUrl}
        required
      />
      <Typography variant="body2">
        Scanning the QR code will open this Twitter profile.
      </Typography>
    </form>
  );
};

export default TwitterForm;
export{};