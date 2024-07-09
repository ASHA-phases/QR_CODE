import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface WifiFormProps {
  onFormChange: (values: any) => void;
}

const WifiForm: React.FC<WifiFormProps> = ({ onFormChange }) => {
  const formik = useFormik({
    initialValues: {
      networkName: '',
      ssid: '',
      networkType: 'No encryption',
      password: '',
      hidden: false,
    },
    validationSchema: Yup.object({
      networkName: Yup.string().required('Network name is required'),
      ssid: Yup.string().required('SSID is required'),
      networkType: Yup.string().required('Network type is required'),
      password: Yup.string().when('networkType', {
        is: (value: string) => value === 'WPA/WPA2',
        then: (schema) => schema.required('Password is required for WPA/WPA2'),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),
    onSubmit: () => {},
  });

  React.useEffect(() => {
    if (formik.isValid) {
      onFormChange(formik.values);
    }
  }, [formik.values, formik.isValid, onFormChange]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="networkName"
        name="networkName"
        label="Network name"
        margin="normal"
        value={formik.values.networkName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.networkName && Boolean(formik.errors.networkName)}
        helperText={formik.touched.networkName && formik.errors.networkName}
      />
      <TextField
        fullWidth
        id="ssid"
        name="ssid"
        label="SSID"
        margin="normal"
        value={formik.values.ssid}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.ssid && Boolean(formik.errors.ssid)}
        helperText={formik.touched.ssid && formik.errors.ssid}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="networkType-label">Network type</InputLabel>
        <Select
          labelId="networkType-label"
          id="networkType"
          name="networkType"
          value={formik.values.networkType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.networkType && Boolean(formik.errors.networkType)}
        >
          <MenuItem value="No encryption">No encryption</MenuItem>
          <MenuItem value="WPA/WPA2">WPA/WPA2</MenuItem>
        </Select>
      </FormControl>
      {formik.values.networkType === 'WPA/WPA2' && (
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      )}
      <FormControlLabel
        control={
          <Checkbox
            id="hidden"
            name="hidden"
            checked={formik.values.hidden}
            onChange={formik.handleChange}
          />
        }
        label="Hidden"
      />
      <Typography variant="body2">
        Scanning the QR code will connect to Wi-Fi.
      </Typography>
    </form>
  );
};

export default WifiForm;
export{};