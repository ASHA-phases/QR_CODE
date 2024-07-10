import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { generateQRCode, generateQRCodePDF, generateQRCodeSVG, generateQRCodePNG } from '../api/qrCodeApi';

interface QRCodeGeneratorProps {
  selectedType: string | null;
  formData: any;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ selectedType, formData }) => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Check if required fields are valid and non-empty
    const isValid = !!(
      selectedType &&
      formData.firstName?.trim() !== '' &&
      formData.lastName?.trim() !== '' &&
      formData.phoneNumber?.trim() !== '' &&
      formData.email?.trim() !== ''
    );
    setFormValid(isValid);

    // Reset QR code if form becomes invalid
    if (!isValid) {
      setQrCode(null);
    }
  }, [selectedType, formData]);

  const handleGenerateQRCode = async () => {
    if (!formValid || !selectedType) return;
    try {
      const qrCode = await generateQRCode(selectedType, formData);
      setQrCode(qrCode);
    } catch (error) {
      console.error('Failed to generate QR code', error);
    }
  };

  const downloadQRCode = async (format: string) => {
    if (!selectedType || !formValid || !qrCode) return;
    try {
      let qrCodeBlob;
      switch (format) {
        case 'png':
          qrCodeBlob = await generateQRCodePNG(selectedType, formData);
          break;
        case 'svg':
          qrCodeBlob = await generateQRCodeSVG(selectedType, formData);
          break;
        case 'pdf':
          qrCodeBlob = await generateQRCodePDF(selectedType, formData);
          break;
        default:
          throw new Error('Unsupported format');
      }
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(new Blob([qrCodeBlob]));
      link.href = url;
      link.download = `qrcode.${format}`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download QR code', error);
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleGenerateQRCode}
        disabled={!formValid}
      >
        Generate QR Code
      </Button>
      {qrCode ? (
        <Box mt={2}>
          <img src={qrCode} alt="Generated QR Code" />
          <Typography variant="h6" mt={2}>
            QR Code generated. Choose a format to download:
          </Typography>
          <Box mt={1}>
            <Button variant="outlined" onClick={() => downloadQRCode('png')} sx={{ mr: 1 }}>
              Download PNG
            </Button>
            <Button variant="outlined" onClick={() => downloadQRCode('svg')} sx={{ mr: 1 }}>
              Download SVG
            </Button>
            <Button variant="outlined" onClick={() => downloadQRCode('pdf')}>
              Download PDF
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="body1" mt={2}>
          {formValid
            ? "Click 'Generate QR Code' to create your QR code."
            : "Please fill in all required fields to generate a QR code."}
        </Typography>
      )}
    </Box>
  );
};

export default QRCodeGenerator;