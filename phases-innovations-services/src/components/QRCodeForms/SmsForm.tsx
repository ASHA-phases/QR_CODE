import React from "react";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  onFormChange: (values: any) => void;
}

const SmsForm: React.FC<Props> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      countryCode: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      countryCode: Yup.string()
        .matches(/^\+\d+$/, "Country code must be in the format + followed by digits")
        .required("Country code is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be between 10 to 15 digits")
        .required("Phone number is required"),
      message: Yup.string()
        .max(160, "Message must be at most 160 characters long")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      onFormChange(values);
    },
  });

  React.useEffect(() => {
    if (formik.isValid) {
      onFormChange(formik.values);
    }
  }, [formik.values, formik.isValid]);

  return (
    <>
      <TextField
        fullWidth
        id="countryCode"
        name="countryCode"
        label="Country Code"
        margin="normal"
        value={formik.values.countryCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.countryCode && Boolean(formik.errors.countryCode)}
        helperText={formik.touched.countryCode && formik.errors.countryCode}
      />
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        margin="normal"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <TextField
        fullWidth
        id="message"
        name="message"
        label="Message"
        margin="normal"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Typography variant="body2">
        Scanning the QR code will send a message to the phone number.
      </Typography>
    </>
  );
};

export default SmsForm;
export{};