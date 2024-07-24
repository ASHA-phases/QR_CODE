// src/components/HomePage.tsx

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { generateQRCode, generateQRCodePDF, generateQRCodeSVG, generateQRCodePNG } from '../../api/qrCodeApi';

// Import all form components
import LinkForm from '../QRCodeForms/LinkForm';
import EmailForm from '../QRCodeForms/EmailForm';
import TextForm from '../QRCodeForms/TextForm';
import CallForm from '../QRCodeForms/CallForm';
import WhatsappForm from '../QRCodeForms/WhatsappForm';
import WifiForm from '../QRCodeForms/WifiForm';
import EventForm from '../QRCodeForms/EventForm';
import VCardForm from '../QRCodeForms/VCardForm';
import AppForm from '../QRCodeForms/AppForm';
import VideoForm from '../QRCodeForms/VideoForm';
import SocialMediaForm from '../QRCodeForms/SocialMediaForm';
import LocationForm from '../QRCodeForms/LocationForm';
import SmsForm from '../QRCodeForms/SmsForm';
import FacebookForm from '../QRCodeForms/FacebookForm';
import TwitterForm from '../QRCodeForms/TwitterForm';
import HowToUse from '../pages/HowToUse';
import FAQPage from '../pages/FAQPage';

const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const topRef = useRef<HTMLDivElement>(null);
  const dummyQRCode = 'data:image/png;base64,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'



  const handleFormChange = (values: any) => {
    setFormData(values);
  };

  const handleGenerateQRCode = async () => {
    try {
      const qrCode = await generateQRCode(selectedType!, formData);
      setQrCode(qrCode);
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Failed to generate QR code', error);
    }
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setQrCode(null);
    setFormData({});
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadQRCode = async (format: string) => {
    if (!selectedType) return;

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

  const renderForm = () => {
    switch (selectedType) {
      case 'Link':
        return <LinkForm onFormChange={handleFormChange} />;
      case 'Email':
        return <EmailForm onFormChange={handleFormChange} />;
      case 'Text':
        return <TextForm onFormChange={handleFormChange} />;
      case 'Call':
        return <CallForm onFormChange={handleFormChange} />;
      case 'Sms':
        return <SmsForm onFormChange={handleFormChange} />;
      case 'Whatsapp':
        return <WhatsappForm onFormChange={handleFormChange} />;
      case 'Wifi':
        return <WifiForm onFormChange={handleFormChange} />;
      case 'Event':
        return <EventForm onFormChange={handleFormChange} />;
      case 'VCard':
        return <VCardForm onFormChange={handleFormChange} />;
      case 'App':
        return <AppForm onFormChange={handleFormChange} />;
      case 'Video':
        return <VideoForm onFormChange={handleFormChange} />;
      case 'Social Media':
        return <SocialMediaForm onFormChange={handleFormChange} />;
      case 'Location':
        return <LocationForm onFormChange={handleFormChange} />;
      case 'Facebook':
        return <FacebookForm onFormChange={handleFormChange} />;
      case 'Twitter':
        return <TwitterForm onFormChange={handleFormChange} />;
      default:
        return null;
    }
  };

  return (
    <Container style={{ maxWidth: '1200px' }}>
      <div ref={topRef}></div>
      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          THE 100% FREE QR CODE GENERATOR
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Trusted by your favorite companies
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f5f5f5', flex: 2, marginRight: '10px' }}>
          <Typography variant="h6" gutterBottom display="flex" justifyContent="center">
            Select a type and generate a QR code
          </Typography>
          <Grid container spacing={2} alignContent="center" paddingTop="30px">
            {[
              'Link',
              'Email',
              'Text',
              'Call',
              'Sms',
              'Whatsapp',
              'Wifi',
              'Event',
              'VCard',
              'App',
              'Video',
              'Social Media',
              'Location',
              'Facebook',
              'Twitter',
            ].map((type) => (
              <Grid item xs={4} key={type}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </Button>
              </Grid>
            ))}
          </Grid>
          {selectedType && (
            <Box mt={3}>
              <Typography variant="h5" gutterBottom>
                {selectedType} QR Code
              </Typography>
              <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#fafafa' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    {renderForm()}
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: 'teal' }}
                      onClick={handleGenerateQRCode}
                    >
                      Generate QR Code
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          )}
        </Paper>

        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#e0e0e0', flex: 1 }}>
          <Box mb={2}>
            {qrCode ? (
              <img src={qrCode} alt="QR Code" style={{ width: '100%' }} />
            ) : (
              <Box mb={2}>
              <img src= {dummyQRCode} alt="QR Code" style={{ width: '100%' }} />
              </Box>
            )}
          </Box>
          <Box mb={2}>
            {qrCode && (
              <Box mt={2} textAlign="center">
                <Typography variant="body2" gutterBottom>
                  QR Code generated. Choose a format to download:
                </Typography>
                <Box mt={2} style={{display:'flex',flexDirection: 'column'}}>
                  <Button
                    variant="contained"
                    onClick={() => downloadQRCode('png')}
                    style={{ marginBottom:8 ,backgroundColor: 'teal'  }}
                  >
                    Download PNG
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => downloadQRCode('svg')}
                    style={{ marginBottom:8 ,backgroundColor: 'teal' }}
                  >
                    Download SVG
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => downloadQRCode('pdf')}
                    style={{ backgroundColor: 'teal' }}
                  >
                    Download PDF
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>

      <Box mt={4} mb={4}>
        <HowToUse />
      </Box>

      <Box mt={4} mb={4}>
        <FAQPage />
      </Box>
    </Container>
  );
};

export default HomePage;