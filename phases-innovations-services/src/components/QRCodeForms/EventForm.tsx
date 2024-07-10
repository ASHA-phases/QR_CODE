import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface EventFormProps {
  onFormChange: (values: any) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      eventName: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
    validationSchema: Yup.object({
      eventName: Yup.string().required('Event name is required'),
      startDate: Yup.date()
        .min(new Date(), 'Start date cannot be in the past')
        .required('Start date is required'),
      endDate: Yup.date()
        .min(Yup.ref('startDate'), 'End date must be after start date')
        .required('End date is required'),
      location: Yup.string().required('Location is required'),
      description: Yup.string(),
    }),
    onSubmit: () => {},
  });

  React.useEffect(() => {
    if (formik.isValid && formik.dirty) {
      const { eventName, startDate, endDate, location, description } = formik.values;
      if (eventName && startDate && endDate && location) {
        onFormChange({
          eventName,
          startDate,
          endDate,
          location,
          description: description || undefined,
        });
      } else {
        onFormChange(null);
      }
    } else {
      onFormChange(null);
    }
  }, [formik.values, formik.isValid, formik.dirty, onFormChange]);

  return (
    <>
      <TextField
        fullWidth
        id="eventName"
        name="eventName"
        label="Event Name"
        margin="normal"
        value={formik.values.eventName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.eventName && Boolean(formik.errors.eventName)}
        helperText={formik.touched.eventName && formik.errors.eventName}
        required
      />
      <TextField
        fullWidth
        id="startDate"
        name="startDate"
        label="Start Date"
        type="datetime-local"
        margin="normal"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: new Date().toISOString().slice(0, 16), max: formik.values.endDate || undefined }}
        value={formik.values.startDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.startDate && Boolean(formik.errors.startDate)}
        helperText={formik.touched.startDate && formik.errors.startDate}
        required
      />
      <TextField
        fullWidth
        id="endDate"
        name="endDate"
        label="End Date"
        type="datetime-local"
        margin="normal"
        InputLabelProps={{ shrink: true }}
        inputProps={{ min: formik.values.startDate || new Date().toISOString().slice(0, 16) }}
        value={formik.values.endDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.endDate && Boolean(formik.errors.endDate)}
        helperText={formik.touched.endDate && formik.errors.endDate}
        required
      />
      <TextField
        fullWidth
        id="location"
        name="location"
        label="Location"
        margin="normal"
        value={formik.values.location}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.location && Boolean(formik.errors.location)}
        helperText={formik.touched.location && formik.errors.location}
        required
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        margin="normal"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Typography variant="body2">
        Scanning the QR code will add this event to the calendar.
      </Typography>
    </>
  );
};

export default EventForm;
export{};