import React, { useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface AppFormProps {
  onFormChange: (values: any) => void;
}

const AppForm: React.FC<AppFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      appStoreLink: '',
      playStoreLink: '',
    },
    validationSchema: Yup.object({
      appStoreLink: Yup.string()
        .url('Invalid URL')
        .matches(
          /^https:\/\/apps\.apple\.com\/.+/i,
          'Must be a valid App Store URL'
        ),
      playStoreLink: Yup.string()
        .url('Invalid URL')
        .matches(
          /^https:\/\/play\.google\.com\/store\/apps\/.+/i,
          'Must be a valid Play Store URL'
        ),
    }),
    onSubmit: () => {},
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    onFormChange(formik.values);
  }, [formik.values, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="appStoreLink"
        name="appStoreLink"
        label="App Store Link"
        margin="normal"
        value={formik.values.appStoreLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.appStoreLink && Boolean(formik.errors.appStoreLink)}
        helperText={formik.touched.appStoreLink && formik.errors.appStoreLink}
        placeholder="https://apps.apple.com/..."
      />
      <TextField
        fullWidth
        id="playStoreLink"
        name="playStoreLink"
        label="Play Store Link"
        margin="normal"
        value={formik.values.playStoreLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.playStoreLink && Boolean(formik.errors.playStoreLink)}
        helperText={formik.touched.playStoreLink && formik.errors.playStoreLink}
        placeholder="https://play.google.com/store/apps/..."
      />
      <Typography variant="body2">
        Provide links to your app on the App Store and Play Store (optional).
      </Typography>
    </>
  );
};

export default AppForm;
export{};