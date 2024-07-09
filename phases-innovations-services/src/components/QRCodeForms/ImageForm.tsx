import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

interface ImageFormProps {
  onFormChange: (values: any) => void;
}

const ImageForm: React.FC<ImageFormProps> = ({ onFormChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
        setError(null);
        onFormChange({ file: selectedFile });
      } else {
        setFile(null);
        setError('Please select a valid image file.');
        onFormChange({ file: null });
      }
    }
  };

  return (
    <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="image-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="image-file">
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
      {file && (
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Selected file: {file.name}
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Upload your image to generate a QR code that links to it.
      </Typography>
    </>
  );
};

export default ImageForm;
export{};