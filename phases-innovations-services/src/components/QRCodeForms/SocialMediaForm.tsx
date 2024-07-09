import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SocialMediaFormProps {
  onFormChange: (values: any) => void;
}

const SocialMediaForm: React.FC<SocialMediaFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      facebookUrl: '',
      twitterUrl: '',
      instagramUrl: '',
    },
    validationSchema: Yup.object({
      facebookUrl: Yup.string()
        .url('Invalid URL')
        .matches(/^(https?:\/\/)?(www\.)?facebook\.com\/.*$/, 'Invalid Facebook URL'),
      twitterUrl: Yup.string()
        .url('Invalid URL')
        .matches(/^(https?:\/\/)?(www\.)?twitter\.com\/.*$/, 'Invalid Twitter URL'),
    }),
    onSubmit: () => {},
  });

  React.useEffect(() => {
    onFormChange(formik.values);
  }, [formik.values, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="facebookUrl"
        name="facebookUrl"
        label="Facebook URL"
        margin="normal"
        value={formik.values.facebookUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)}
        helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
        placeholder="https://www.facebook.com/yourusername"
      />
      <TextField
        fullWidth
        id="twitterUrl"
        name="twitterUrl"
        label="Twitter URL"
        margin="normal"
        value={formik.values.twitterUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.twitterUrl && Boolean(formik.errors.twitterUrl)}
        helperText={formik.touched.twitterUrl && formik.errors.twitterUrl}
        placeholder="https://www.twitter.com/yourusername"
      />
      <Typography variant="body2">
        Enter the URLs of your social media profiles.
      </Typography>
    </>
  );
};

export default SocialMediaForm;
export{};