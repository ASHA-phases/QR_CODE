import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface LocationFormProps {
  onFormChange: (values: any) => void;
}

const LocationForm: React.FC<LocationFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      latitude: '',
      longitude: '',
    },
    validationSchema: Yup.object({
      latitude: Yup.number().min(-90, 'Minimum value is -90').max(90, 'Maximum value is 90').required('Latitude is required'),
      longitude: Yup.number().min(-180, 'Minimum value is -180').max(180, 'Maximum value is 180').required('Longitude is required'),
    }),
    onSubmit: () => {},
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
        id="latitude"
        name="latitude"
        label="Latitude"
        margin="normal"
        value={formik.values.latitude}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.latitude && Boolean(formik.errors.latitude)}
        helperText={formik.touched.latitude && formik.errors.latitude}
      />
      <TextField
        fullWidth
        id="longitude"
        name="longitude"
        label="Longitude"
        margin="normal"
        value={formik.values.longitude}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.longitude && Boolean(formik.errors.longitude)}
        helperText={formik.touched.longitude && formik.errors.longitude}
      />
      <Typography variant="body2">
        Enter the latitude and longitude of the location.
      </Typography>
    </>
  );
};

export default LocationForm;
export{};