import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

interface PdfFormProps {
  onFormChange: (values: any) => void;
}

const PdfForm: React.FC<PdfFormProps> = ({ onFormChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setError(null);
        onFormChange({ file: selectedFile });
      } else {
        setFile(null);
        setError('Please select a valid PDF file.');
        onFormChange({ file: null });
      }
    }
  };

  return (
    <>
      <input
        accept="application/pdf"
        style={{ display: 'none' }}
        id="pdf-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="pdf-file">
        <Button variant="contained" component="span">
          Upload PDF
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
        Upload your PDF file to generate a QR code that links to it.
      </Typography>
    </>
  );
};

export default PdfForm;
export{};