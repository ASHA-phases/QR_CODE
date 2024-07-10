import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TextFormProps {
  onFormChange: (values: any) => void;
}

const TextForm: React.FC<TextFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .required('Text is required')
        .max(500, 'Text must be at most 500 characters long'),
    }),
    onSubmit: (values) => {
      onFormChange(values);
    },
  });

  React.useEffect(() => {
    // Check if the form is valid before calling onFormChange
    if (formik.isValid) {
      onFormChange(formik.values);
    }
  }, [formik.values, formik.isValid, onFormChange]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="text"
        name="text"
        label="Text"
        placeholder="Write your text here"
        margin="normal"
        multiline
        rows={4}
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.text && Boolean(formik.errors.text)}
        helperText={formik.touched.text && formik.errors.text}
      />
      <Typography variant="body2">
        Scanning the QR code will show this text.
      </Typography>
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
};

export default TextForm;
export{};