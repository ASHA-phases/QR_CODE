import React from 'react';
import { Container, Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';

interface RequestData {
  [key: string]: string | number | boolean | object;
}

const ApiDocumentation: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getRequestResponseContent = (type: string, data: RequestData) => (
    <>
      <Typography variant="body1" paragraph>
        <strong>Request:</strong>
        <Box component="pre" sx={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {`POST /qr-code/generate
{
  "type": "${type}",
  "data": ${JSON.stringify(data, null, 2)}
}`}
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Response:</strong>
        <Box component="pre" sx={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {`{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}`}
        </Box>
      </Typography>
    </>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant={isSmallScreen ? "h3" : "h2"} gutterBottom>
        QR Code Generator API Documentation
      </Typography>

      {[
        { title: "API Endpoint", content: (
          <>
            <Typography variant="body1" paragraph>
              <strong>Request URL:</strong> <code>http://localhost:4000/qr-code/generate</code>
            </Typography>
          </>
        )},
        { title: "Generate Text QR Code", content: getRequestResponseContent("Text", { text: "Hello World" })},
        { title: "Generate Link QR Code", content: getRequestResponseContent("Link", { url: "https://example.com" })},
        { title: "Generate Email QR Code", content: getRequestResponseContent("Email", { email: "example@example.com", subject: "Hello", message: "This is a test email" })},
        { title: "Generate Call QR Code", content: getRequestResponseContent("Call", { countryCode: "+1", phoneNumber: "1234567890" })},
        { title: "Generate SMS QR Code", content: getRequestResponseContent("Sms", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from SMS" })},
        { title: "Generate WhatsApp QR Code", content: getRequestResponseContent("Whatsapp", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from WhatsApp" })},
        { title: "Generate WiFi QR Code", content: getRequestResponseContent("Wifi", { networkName: "MyWiFi", ssid: "mySSID", networkType: "WPA", password: "password123", hidden: false })},
        { title: "Generate VCard QR Code", content: getRequestResponseContent("VCard", { firstName: "John", lastName: "Doe", phoneNumber: "1234567890", mobile: "0987654321", email: "john.doe@example.com", website: "https://example.com", company: "Example Co.", jobTitle: "Software Engineer", fax: "1234567890", address: "123 Main St", city: "Anytown", postCode: "12345", country: "USA" })},
      ].map((section, index) => (
        <Paper key={index} elevation={3} sx={{ padding: theme.spacing(2), marginBottom: theme.spacing(2) }}>
          <Typography variant={isSmallScreen ? "h6" : "h5"} gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" component="div">
            {section.content}
          </Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default ApiDocumentation;