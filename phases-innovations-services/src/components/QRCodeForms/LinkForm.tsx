// src/components/QRCodeForms/LinkForm.tsx

import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface LinkFormProps {
  onFormChange: (values: any) => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      url: '',
    },
    validationSchema: Yup.object({
      url: Yup.string().url('Invalid URL').required('URL is required'),
    }),
    onSubmit: () => {},
  });

  React.useEffect(() => {
    if (formik.isValid) {
      onFormChange(formik.values);
    }
  }, [formik.values, formik.isValid, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="url"
        name="url"
        label="Submit URL"
        placeholder="https://"
        margin="normal"
        value={formik.values.url}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={formik.touched.url && formik.errors.url}
        required
      />
      <Typography variant="body2">
        Your QR code will open this URL.
      </Typography>
    </>
  );
};

export default LinkForm;
