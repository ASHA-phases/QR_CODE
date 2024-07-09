import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface CallFormProps {
  onFormChange: (values: any) => void;
}

const CallForm: React.FC<CallFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      countryCode: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      countryCode: Yup.string()
        .matches(/^\+\d{1,4}$/, 'Invalid country code format')
        .required('Country code is required'),
      phoneNumber: Yup.string()
        .matches(/^\d{6,14}$/, 'Invalid phone number')
        .required('Phone number is required'),
    }),
    onSubmit: () => {
      // Optional: Implement form submission logic if needed
    },
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
        placeholder="1234567890"
      />
      <Typography variant="body2">
        Scanning the QR code will call this number.
      </Typography>
    </>
  );
};

export default CallForm;
export{};