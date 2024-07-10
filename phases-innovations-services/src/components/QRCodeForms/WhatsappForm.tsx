import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface WhatsappFormProps {
  onFormChange: (values: any) => void;
}

const WhatsappForm: React.FC<WhatsappFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      countryCode: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: Yup.object({
      countryCode: Yup.string()
        .matches(/^\+\d+$/, 'Country code must start with + and contain only digits')
        .required('Country code is required'),
        phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be upto 10 digits")
        .required("Phone number is required"),
      message: Yup.string()
        .required('Message is required'),
    }),
    onSubmit: () => {},
    validateOnChange: true,
    validateOnBlur: true,
  });

  React.useEffect(() => {
    onFormChange(formik.values);
  }, [formik.values, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="countryCode"
        name="countryCode"
        label="Country code"
        margin="normal"
        value={formik.values.countryCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.countryCode && Boolean(formik.errors.countryCode)}
        helperText={formik.touched.countryCode && formik.errors.countryCode}
        required
        placeholder="+1"
      />
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        label="Phone number"
        margin="normal"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        required
      />
      <TextField
        fullWidth
        id="message"
        name="message"
        label="Message"
        margin="normal"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        required
      />
      <Typography variant="body2">
        Scanning the QR code will send a WhatsApp message to the phone number.
      </Typography>
    </>
  );
};

export default WhatsappForm;
export{};