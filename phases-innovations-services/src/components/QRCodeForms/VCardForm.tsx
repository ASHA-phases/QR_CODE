import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface VCardFormProps {
  onFormChange: (values: any) => void;
}

const VCardForm: React.FC<VCardFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      mobile: '',
      email: '',
      website: '',
      company: '',
      jobTitle: '',
      fax: '',
      address: '',
      city: '',
      postCode: '',
      country: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      phoneNumber: Yup.string()
        .matches(/^\+?[\d\s-]{11}$/, 'Invalid phone number')
        .required('Phone number is required'),
      mobile: Yup.string().matches(/^\+?[\d\s-]{10}$/, 'Invalid mobile number'),
      email: Yup.string()
  .email('Invalid email format')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Invalid email format'
  )
  .required('Email is required'),
      website: Yup.string().url('Invalid URL'),
      fax: Yup.string().matches(/^\+?[\d\s-]{7,}$/, 'Invalid fax number'),
      postCode: Yup.string()
        .matches(/^[\d\w\s-]{6}$/, 'Invalid post code')
        .max(6, 'Post code must be at most 6 characters'),
    }),
    onSubmit: () => {},
  });

  React.useEffect(() => {
    if (formik.isValid && Object.values(formik.values).some((value) => value)) {
      onFormChange(formik.values);
    } else {
      onFormChange(null);
    }
  }, [formik.values, formik.isValid, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="First name"
        margin="normal"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        required
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Last name"
        margin="normal"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        required
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
        id="mobile"
        name="mobile"
        label="Mobile"
        margin="normal"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        required
      />
      <TextField
        fullWidth
        id="website"
        name="website"
        label="Website"
        placeholder="https://"
        margin="normal"
        value={formik.values.website}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.website && Boolean(formik.errors.website)}
        helperText={formik.touched.website && formik.errors.website}
      />
      <TextField
        fullWidth
        id="company"
        name="company"
        label="Company"
        margin="normal"
        value={formik.values.company}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        id="jobTitle"
        name="jobTitle"
        label="Job title"
        margin="normal"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        id="fax"
        name="fax"
        label="Fax"
        margin="normal"
        value={formik.values.fax}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fax && Boolean(formik.errors.fax)}
        helperText={formik.touched.fax && formik.errors.fax}
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        margin="normal"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        id="city"
        name="city"
        label="City"
        margin="normal"
        value={formik.values.city}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        id="postCode"
        name="postCode"
        label="Post code"
        margin="normal"
        value={formik.values.postCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.postCode && Boolean(formik.errors.postCode)}
        helperText={formik.touched.postCode && formik.errors.postCode}
      />
      <TextField
        fullWidth
        id="country"
        name="country"
        label="Country"
        margin="normal"
        value={formik.values.country}
        onChange={formik.handleChange}
      />
      <Typography variant="body2">
        Scanning the QR code will save your contact details.
      </Typography>
    </>
  );
};

export default VCardForm;
export{};