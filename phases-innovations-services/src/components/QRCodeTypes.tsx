// src/components/QRCodeTypes.tsx

import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

interface QRCodeTypesProps {
  setSelectedType: (type: string) => void;
  formRef: React.RefObject<HTMLDivElement>;
}

const QRCodeTypes: React.FC<QRCodeTypesProps> = ({ setSelectedType, formRef }) => {
  const types = [
    { type: "Link", description: "Link to any Website URL" },
    { type: "Email", description: "Send an email" },
    { type: "Text", description: "Share text" },
    { type: "Call", description: "Make a call" },
    { type: "Sms", description: "Send message" },
    { type: "Whatsapp", description: "Send whatsapp message" },
    { type: "Wifi", description: "Connect to Wi-Fi" },
    { type: "Event", description: "Save contact to the phone scanning" },
    { type: "VCard", description: "Invite people to your event" },
    { type: "Pdf", description: "Link to a PDF file" },
    { type: "App", description: "Link to your app" },
    { type: "Images", description: "Link to an image" },
    { type: "Video", description: "Link to a video" },
    { type: "Social Media", description: "Link to social media profiles" },
    { type: "Mp3", description: "Link to an MP3 file" },
    { type: "Location", description: "Share a location" },
    { type: "Facebook", description: "Link to Facebook profile" },
    { type: "Twitter", description: "Link to Twitter profile" },
  ];

  const handleChooseClick = (type: string) => {
    setSelectedType(type);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box mt={5}>
      <Typography variant="h5" gutterBottom>
        QR Code Types
      </Typography>
      <Typography variant="body1" gutterBottom>
        Different QR Code types you can use for Static QR Codes.
      </Typography>
      <Grid container spacing={3}>
        {types.map((item) => (
          <Grid item xs={12} sm={4} key={item.type}>
            <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                {item.type}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "teal" }}
                onClick={() => handleChooseClick(item.type)}
              >
                Choose
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QRCodeTypes;
export{};