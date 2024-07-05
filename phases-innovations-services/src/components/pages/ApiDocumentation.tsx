import React from 'react';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

const ApiDocumentation = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        QR Code Generator API Documentation
      </Typography>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          API Endpoint
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request URL:</strong> <code>http://localhost:4000/qr-code/generate</code>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate Text QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Text",
  "data": {
    "text": "Hello World"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate Link QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Link",
  "data": {
    "url": "https://example.com"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate Email QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Email",
  "data": {
    "email": "example@example.com",
    "subject": "Hello",
    "message": "This is a test email"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate Call QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Call",
  "data": {
    "countryCode": "+1",
    "phoneNumber": "1234567890"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate SMS QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Sms",
  "data": {
    "countryCode": "+1",
    "phoneNumber": "1234567890",
    "message": "Hello from SMS"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate WhatsApp QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Whatsapp",
  "data": {
    "countryCode": "+1",
    "phoneNumber": "1234567890",
    "message": "Hello from WhatsApp"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate WiFi QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "Wifi",
  "data": {
    "networkName": "MyWiFi",
    "ssid": "mySSID",
    "networkType": "WPA",
    "password": "password123",
    "hidden": false
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Generate VCard QR Code
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Request:</strong>
          <pre>
            {`
POST /qr-code/generate
{
  "type": "VCard",
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "1234567890",
    "mobile": "0987654321",
    "email": "john.doe@example.com",
    "website": "https://example.com",
    "company": "Example Co.",
    "jobTitle": "Software Engineer",
    "fax": "1234567890",
    "address": "123 Main St",
    "city": "Anytown",
    "postCode": "12345",
    "country": "USA"
  }
}
            `}
          </pre>
          <strong>Response:</strong>
          <pre>
            {`
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
            `}
          </pre>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ApiDocumentation;
