import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
 
const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          THE 100% FREE QR CODE GENERATOR
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Trusted by your favorite companies
        </Typography>
      </Box>
 
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Box mb={2}>
              <Button variant="contained">Explore</Button>
            </Box>
            <Grid container spacing={2}>
              {[
                'Link', 'Email', 'Text', 'Call', 'Sms', 'V-card', 'Whatsapp',
                'Wifi', 'Pay pal', 'Event', 'Pdf', 'App', 'Images', 'Video',
                'Social Media', 'Mp3', 'Location', 'Facebook', 'Twitter', 'Rating'
              ].map((type) => (
                <Grid item xs={4} key={type}>
                  <Button variant="outlined" fullWidth>
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
              <img src="path/to/your/qr-code-image.png" alt="QR Code" style={{ width: '100%' }} />
            </Box>
            <Box mb={2}>
              <Button variant="contained" color="primary" fullWidth>
                Download PNG
              </Button>
            </Box>
            <Box mb={2}>
              <Button variant="contained" color="primary" fullWidth>
                Download SVG
              </Button>
            </Box>
            <Box mb={2}>
              <Button variant="contained" color="primary" fullWidth>
                Download PDF
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
 
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          QR Code Types
        </Typography>
        <Typography variant="body1" gutterBottom>
          Different QR Code types you can use for Static QR Codes.
        </Typography>
        <Grid container spacing={3}>
          {[
            { type: 'Link', description: 'Link to any Website URL' },
            { type: 'Email', description: 'Send an email' },
            { type: 'Text', description: 'Share text' },
            { type: 'Call', description: 'Make a call' },
            { type: 'Sms', description: 'Send message' },
            { type: 'Whatsapp', description: 'Send whatsapp message' },
            { type: 'Wifi', description: 'Connect to Wi-Fi' },
            { type: 'Event', description: 'Save contact to the phone scanning' },
            { type: 'VCard', description: 'Invite people to your event' },
          ].map((item) => (
            <Grid item xs={12} sm={4} key={item.type}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {item.type}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.description}
                </Typography>
                <Button variant="contained">Choose</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
 
export default HomePage;
 
// Add an empty export statement to make this file a module
export {};