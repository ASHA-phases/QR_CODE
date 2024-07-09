import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

interface Mp3FormProps {
  onFormChange: (values: any) => void;
}

const Mp3Form: React.FC<Mp3FormProps> = ({ onFormChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === 'audio/mpeg' || selectedFile.name.endsWith('.mp3')) {
        setFile(selectedFile);
        setError(null);
        onFormChange({ file: selectedFile });
      } else {
        setFile(null);
        setError('Please select a valid MP3 file.');
        onFormChange({ file: null });
      }
    }
  };

  return (
    <>
      <input
        accept="audio/mpeg,.mp3"
        style={{ display: 'none' }}
        id="mp3-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="mp3-file">
        <Button variant="contained" component="span">
          Upload MP3
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
        Upload your MP3 file to generate a QR code that links to it.
      </Typography>
    </>
  );
};

export default Mp3Form;
export{};