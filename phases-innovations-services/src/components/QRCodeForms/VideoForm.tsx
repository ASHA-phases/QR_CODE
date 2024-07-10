import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface VideoFormProps {
  onFormChange: (values: any) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      videoUrl: '',
    },
    validationSchema: Yup.object({
      videoUrl: Yup.string()
        .url('Invalid URL')
        .matches(
          /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.+/,
          'Must be a valid YouTube or Vimeo URL'
        )
        .required('Video URL is required'),
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
        id="videoUrl"
        name="videoUrl"
        label="Video URL"
        margin="normal"
        value={formik.values.videoUrl}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.videoUrl && Boolean(formik.errors.videoUrl)}
        helperText={formik.touched.videoUrl && formik.errors.videoUrl}
        required
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <Typography variant="body2">
        Enter the URL of your video (e.g., YouTube, Vimeo).
      </Typography>
    </>
  );
};

export default VideoForm;
export{};