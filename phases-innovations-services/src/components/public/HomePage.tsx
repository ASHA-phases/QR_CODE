// src/components/HomePage.tsx

import React, { useState } from 'react';
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
import QRCodeTypes from '../QRCodeTypes';
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


const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleFormChange = (values: any) => {
    setFormData(values);
  };

  const handleGenerateQRCode = async () => {
    try {
      const qrCode = await generateQRCode(selectedType!, formData);
      setQrCode(qrCode);
    } catch (error) {
      console.error('Failed to generate QR code', error);
    }
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
    <Container maxWidth="lg">
      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          THE 100% FREE QR CODE GENERATOR
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Trusted by your favorite companies
        </Typography>
        <Button variant="contained" style={{ backgroundColor: 'green' }}>
          Explore
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Box mb={2}></Box>
            <Grid container spacing={2}>
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
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Box mb={2}>
              {qrCode ? (
                <img src={qrCode} alt="QR Code" style={{ width: '50%' }} />
              ) : (
                <Typography variant="body2">
                  Select a type and generate a QR code.
                </Typography>
              )}
            </Box>
            <Box mb={2}>
              <Button
                variant="contained"
                style={{ backgroundColor: 'teal' }}
                fullWidth
                onClick={handleGenerateQRCode}
              >
                Generate QR Code
              </Button>
              {qrCode && (
                <Box mt={2} textAlign="center">
                  <Typography variant="body2" gutterBottom>
                    QR Code generated. Choose a format to download:
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      onClick={() => downloadQRCode('png')}
                      style={{ marginRight: 8 }}
                    >
                      Download PNG
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => downloadQRCode('svg')}
                      style={{ marginRight: 8 }}
                    >
                      Download SVG
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => downloadQRCode('pdf')}
                    >
                      Download PDF
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {selectedType && (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            {selectedType} QR Code
          </Typography>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {renderForm()}
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: 'black' }}
                    onClick={handleGenerateQRCode}
                  >
                    Generate QR Code
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}

      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          QR Code Types
        </Typography>
        <Typography variant="body1" gutterBottom>
          Different QR Code types you can use for Static QR Codes.
        </Typography>
        <Grid container spacing={3}>
          {[
            { type: "Link", description: "Link to any Website URL" },
            { type: "Email", description: "Send an email" },
            { type: "Text", description: "Share text" },
            { type: "Call", description: "Make a call" },
            { type: "Sms", description: "Send message" },
            { type: "Whatsapp", description: "Send whatsapp message" },
            { type: "Wifi", description: "Connect to Wi-Fi" },
            { type: "Event", description: "Save event to calendar" },
            { type: "VCard", description: "Share contact information" },
            { type: "App", description: "Link to your app" },
            { type: "Video", description: "Link to a video" },
            { type: "Social Media", description: "Link to social media profiles" },
            { type: "Location", description: "Share a location" },
            { type: "Facebook", description: "Share you facebook" },
            { type: "Twitter", description: "Share you twitter" },
          ].map((item) => (
            <Grid item xs={12} sm={4} key={item.type}>
              <Paper
                elevation={3}
                style={{ padding: "20px", textAlign: "center" }}
              >
                <Typography variant="h6" gutterBottom>
                  {item.type}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "teal" }}
                  onClick={() => setSelectedType(item.type)}
                >
                  Choose
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
export{};