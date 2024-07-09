import React from 'react';
import { Container, Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';

interface RequestData {
  [key: string]: string | number | boolean | object;
}

const ApiDocumentation: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getRequestResponseContent = (type: string, data: RequestData, endpoint: string) => (
    <>
      <Typography variant="body1" paragraph>
        <strong>Request:</strong>
        <Box component="pre" sx={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {`POST ${endpoint}
{
  "type": "${type}",
  "data": ${JSON.stringify(data, null, 2)}
}`}
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Response:</strong>
        <Box component="pre" sx={{ overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {endpoint.includes('base64') ? `{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}` : endpoint.includes('pdf') ? `%PDF-1.4...` : `data:image/${endpoint.split('-').pop()};base64,iVBORw0KGgoAAAANSUhEUgAA...`}
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
              <strong>Request URL For Base64:</strong> <code>http://localhost:4000/qr-code/generate</code>
            </Typography>
          </>
        )},
        { title: "Generate Text QR Code (Base64)", content: getRequestResponseContent("Text", { text: "Hello World" }, '/qr-code/generate')},
        { title: "Generate Text QR Code (PDF)", content: getRequestResponseContent("Text", { text: "Hello World" }, '/qr-code/generate-pdf')},
        { title: "Generate Text QR Code (SVG)", content: getRequestResponseContent("Text", { text: "Hello World" }, '/qr-code/generate-svg')},
        { title: "Generate Text QR Code (PNG)", content: getRequestResponseContent("Text", { text: "Hello World" }, '/qr-code/generate-png')},
        { title: "Generate Link QR Code (Base64)", content: getRequestResponseContent("Link", { url: "https://example.com" }, '/qr-code/generate')},
        { title: "Generate Link QR Code (PDF)", content: getRequestResponseContent("Link", { url: "https://example.com" }, '/qr-code/generate-pdf')},
        { title: "Generate Link QR Code (SVG)", content: getRequestResponseContent("Link", { url: "https://example.com" }, '/qr-code/generate-svg')},
        { title: "Generate Link QR Code (PNG)", content: getRequestResponseContent("Link", { url: "https://example.com" }, '/qr-code/generate-png')},
        { title: "Generate Email QR Code (Base64)", content: getRequestResponseContent("Email", { email: "example@example.com", subject: "Hello", message: "This is a test email" }, '/qr-code/generate')},
        { title: "Generate Email QR Code (PDF)", content: getRequestResponseContent("Email", { email: "example@example.com", subject: "Hello", message: "This is a test email" }, '/qr-code/generate-pdf')},
        { title: "Generate Email QR Code (SVG)", content: getRequestResponseContent("Email", { email: "example@example.com", subject: "Hello", message: "This is a test email" }, '/qr-code/generate-svg')},
        { title: "Generate Email QR Code (PNG)", content: getRequestResponseContent("Email", { email: "example@example.com", subject: "Hello", message: "This is a test email" }, '/qr-code/generate-png')},
        { title: "Generate Call QR Code (Base64)", content: getRequestResponseContent("Call", { countryCode: "+1", phoneNumber: "1234567890" }, '/qr-code/generate')},
        { title: "Generate Call QR Code (PDF)", content: getRequestResponseContent("Call", { countryCode: "+1", phoneNumber: "1234567890" }, '/qr-code/generate-pdf')},
        { title: "Generate Call QR Code (SVG)", content: getRequestResponseContent("Call", { countryCode: "+1", phoneNumber: "1234567890" }, '/qr-code/generate-svg')},
        { title: "Generate Call QR Code (PNG)", content: getRequestResponseContent("Call", { countryCode: "+1", phoneNumber: "1234567890" }, '/qr-code/generate-png')},
        { title: "Generate SMS QR Code (Base64)", content: getRequestResponseContent("Sms", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from SMS" }, '/qr-code/generate')},
        { title: "Generate SMS QR Code (PDF)", content: getRequestResponseContent("Sms", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from SMS" }, '/qr-code/generate-pdf')},
        { title: "Generate SMS QR Code (SVG)", content: getRequestResponseContent("Sms", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from SMS" }, '/qr-code/generate-svg')},
        { title: "Generate SMS QR Code (PNG)", content: getRequestResponseContent("Sms", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from SMS" }, '/qr-code/generate-png')},
        { title: "Generate WhatsApp QR Code (Base64)", content: getRequestResponseContent("Whatsapp", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from WhatsApp" }, '/qr-code/generate')},
        { title: "Generate WhatsApp QR Code (PDF)", content: getRequestResponseContent("Whatsapp", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from WhatsApp" }, '/qr-code/generate-pdf')},
        { title: "Generate WhatsApp QR Code (SVG)", content: getRequestResponseContent("Whatsapp", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from WhatsApp" }, '/qr-code/generate-svg')},
        { title: "Generate WhatsApp QR Code (PNG)", content: getRequestResponseContent("Whatsapp", { countryCode: "+1", phoneNumber: "1234567890", message: "Hello from WhatsApp" }, '/qr-code/generate-png')},
        { title: "Generate WiFi QR Code (Base64)", content: getRequestResponseContent("Wifi", { networkName: "MyWiFi", ssid: "mySSID", networkType: "WPA", password: "password123", hidden: false }, '/qr-code/generate')},
        { title: "Generate WiFi QR Code (PDF)", content: getRequestResponseContent("Wifi", { networkName: "MyWiFi", ssid: "mySSID", networkType: "WPA", password: "password123", hidden: false }, '/qr-code/generate-pdf')},
        { title: "Generate WiFi QR Code (SVG)", content: getRequestResponseContent("Wifi", { networkName: "MyWiFi", ssid: "mySSID", networkType: "WPA", password: "password123", hidden: false }, '/qr-code/generate-svg')},
        { title: "Generate WiFi QR Code (PNG)", content: getRequestResponseContent("Wifi", { networkName: "MyWiFi", ssid: "mySSID", networkType: "WPA", password: "password123", hidden: false }, '/qr-code/generate-png')},
        { title: "Generate VCard QR Code (Base64)", content: getRequestResponseContent("VCard", { firstName: "John", lastName: "Doe", phoneNumber: "1234567890", mobile: "0987654321", email: "john.doe@example.com", website: "https://example.com", company: "Example Co.", jobTitle: "Software Engineer", fax: "1234567890", address: "123 Main St", city: "Anytown", postCode: "12345", country: "USA" }, '/qr-code/generate')},
        { title: "Generate VCard QR Code (PDF)", content: getRequestResponseContent("VCard", { firstName: "John", lastName: "Doe", phoneNumber: "1234567890", mobile: "0987654321", email: "john.doe@example.com", website: "https://example.com", company: "Example Co.", jobTitle: "Software Engineer", fax: "1234567890", address: "123 Main St", city: "Anytown", postCode: "12345", country: "USA" }, '/qr-code/generate-pdf')},
        { title: "Generate VCard QR Code (SVG)", content: getRequestResponseContent("VCard", { firstName: "John", lastName: "Doe", phoneNumber: "1234567890", mobile: "0987654321", email: "john.doe@example.com", website: "https://example.com", company: "Example Co.", jobTitle: "Software Engineer", fax: "1234567890", address: "123 Main St", city: "Anytown", postCode: "12345", country: "USA" }, '/qr-code/generate-svg')},
        { title: "Generate VCard QR Code (PNG)", content: getRequestResponseContent("VCard", { firstName: "John", lastName: "Doe", phoneNumber: "1234567890", mobile: "0987654321", email: "john.doe@example.com", website: "https://example.com", company: "Example Co.", jobTitle: "Software Engineer", fax: "1234567890", address: "123 Main St", city: "Anytown", postCode: "12345", country: "USA" }, '/qr-code/generate-png')},
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
