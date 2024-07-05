// src/components/HomePage.tsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { generateQRCode } from '../../api/qrCodeApi'; // Import the API function

const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [networkName, setNetworkName] = useState<string>('');
  const [ssid, setSsid] = useState<string>('');
  const [networkType, setNetworkType] = useState<string>('No encryption');
  const [hidden, setHidden] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [emailVCard, setEmailVCard] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [fax, setFax] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleGenerateQRCode = async () => {
    try {
      let qrCode;
  
      switch (selectedType) {
        case 'Link':
          qrCode = await generateQRCode(selectedType, { url: inputText });
          break;
        case 'Email':
          qrCode = await generateQRCode(selectedType, { email, subject, message });
          break;
        case 'Text':
          qrCode = await generateQRCode(selectedType, { text: inputText });
          break;
        case 'Call':
          qrCode = await generateQRCode(selectedType, { countryCode, phoneNumber });
          break;
        case 'Sms':
          qrCode = await generateQRCode(selectedType, { countryCode, phoneNumber, message });
          break;
        case 'Whatsapp':
          qrCode = await generateQRCode(selectedType, { countryCode, phoneNumber, message });
          break;
        case 'Wifi':
          qrCode = await generateQRCode(selectedType, { networkName, ssid, networkType, password, hidden });
          break;
        case 'Event':
          // Add case for Event
          break;
        case 'VCard':
          qrCode = await generateQRCode(selectedType, {
            firstName,
            lastName,
            phoneNumber,
            mobile,
            email: emailVCard,
            website,
            company,
            jobTitle,
            fax,
            address,
            city,
            postCode,
            country
          });
          break;
        case 'Pdf':
        case 'App':
        case 'Images':
        case 'Video':
        case 'Social Media':
        case 'Mp3':
        case 'Location':
        case 'Facebook':
        case 'Twitter':
          // Add cases for other types if needed
          break;
        default:
          throw new Error('Unsupported QR code type');
      }

      setQrCode(qrCode);
    } catch (error) {
      console.error('Failed to generate QR code', error);
    }
  };

  const renderForm = () => {
    switch (selectedType) {
      case 'Link':
        return (
          <>
            <TextField
              fullWidth
              label="Submit URL"
              placeholder="https://"
              margin="normal"
              onChange={(e) => setInputText(e.target.value)}
            />
            <Typography variant="body2">
              Your QR code will open this URL.
            </Typography>
          </>
        );
      case 'Email':
        return (
          <>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Subject"
              margin="normal"
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              onChange={(e) => setMessage(e.target.value)}
            />
          </>
        );
      case 'Text':
        return (
          <>
            <TextField
              fullWidth
              label="Text"
              placeholder="Write your text here"
              margin="normal"
              onChange={(e) => setInputText(e.target.value)}
            />
            <Typography variant="body2">
              Scanning the QR code will show this text.
            </Typography>
          </>
        );
      case 'Call':
        return (
          <>
            <TextField
              fullWidth
              label="Country code"
              margin="normal"
              onChange={(e) => setCountryCode(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone number"
              margin="normal"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Typography variant="body2">
              Scanning the QR code will call this number.
            </Typography>
          </>
        );
      case 'Sms':
        return (
          <>
            <TextField
              fullWidth
              label="Country code"
              margin="normal"
              onChange={(e) => setCountryCode(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone number"
              margin="normal"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Typography variant="body2">
              Scanning the QR code will send a message to the phone number.
            </Typography>
          </>
        );
      case 'Whatsapp':
        return (
          <>
            <TextField
              fullWidth
              label="Country code"
              margin="normal"
              onChange={(e) => setCountryCode(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone number"
              margin="normal"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Typography variant="body2">
              Scanning the QR code will send a WhatsApp message to the phone number.
            </Typography>
          </>
        );
      case 'Wifi':
        return (
          <>
            <TextField
              fullWidth
              label="Network name"
              margin="normal"
              onChange={(e) => setNetworkName(e.target.value)}
            />
            <TextField
              fullWidth
              label="SSID"
              margin="normal"
              onChange={(e) => setSsid(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Network type</InputLabel>
              <Select
                value={networkType}
                onChange={(e) => setNetworkType(e.target.value as string)}
              >
                <MenuItem value="No encryption">No encryption</MenuItem>
                <MenuItem value="WPA/WPA2">WPA/WPA2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox checked={hidden} onChange={() => setHidden(!hidden)} />}
              label="Hidden"
            />
            <Typography variant="body2">
              Scanning the QR code will connect to Wi-Fi.
            </Typography>
          </>
        );
      case 'Event':
        return (
          <>
            <Typography variant="body2">
              Invite people to your event.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'green' }}
              fullWidth
            >
              Sign up for free
            </Button>
          </>
        );
        case 'VCard':
          return (
            <>
              <TextField
                fullWidth
                label="First name"
                margin="normal"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Last name"
                margin="normal"
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Phone number"
                margin="normal"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                fullWidth
                label="Mobile"
                margin="normal"
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                fullWidth
                label="E-mail"
                margin="normal"
                onChange={(e) => setEmailVCard(e.target.value)}
              />
              <TextField
                fullWidth
                label="Website"
                placeholder="https://"
                margin="normal"
                onChange={(e) => setWebsite(e.target.value)}
              />
              <TextField
                fullWidth
                label="Company"
                margin="normal"
                onChange={(e) => setCompany(e.target.value)}
              />
              <TextField
                fullWidth
                label="Job title"
                margin="normal"
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <TextField
                fullWidth
                label="Fax"
                margin="normal"
                onChange={(e) => setFax(e.target.value)}
              />
              <TextField
                fullWidth
                label="Address"
                margin="normal"
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                fullWidth
                label="City"
                margin="normal"
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                fullWidth
                label="Post code"
                margin="normal"
                onChange={(e) => setPostCode(e.target.value)}
              />
              <TextField
                fullWidth
                label="Country"
                margin="normal"
                onChange={(e) => setCountry(e.target.value)}
              />
              <Typography variant="body2">
                Scanning the QR code will save your contact details.
              </Typography>
            </>
          );
      case 'Pdf':
        return (
          <>
            <Typography variant="body2">
              Upload your PDF file here.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'teal' }}
              fullWidth
            >
              Upload PDF
            </Button>
          </>
        );
      case 'App':
        return (
          <>
            <Typography variant="body2">
              Link to your app.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'orange' }}
              fullWidth
            >
              Add App
            </Button>
          </>
        );
      case 'Images':
        return (
          <>
            <Typography variant="body2">
              Upload your image here.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'blue' }}
              fullWidth
            >
              Upload Image
            </Button>
          </>
        );
      case 'Video':
        return (
          <>
            <Typography variant="body2">
              Add your video URL here.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'purple' }}
              fullWidth
            >
              Add Video
            </Button>
          </>
        );
      case 'Social Media':
        return (
          <>
            <Typography variant="body2">
              Link to your social media profile.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'pink' }}
              fullWidth
            >
              Add Social Media
            </Button>
          </>
        );
      case 'Mp3':
        return (
          <>
            <Typography variant="body2">
              Add your MP3 file URL here.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'grey' }}
              fullWidth
            >
              Add MP3
            </Button>
          </>
        );
      case 'Location':
        return (
          <>
            <Typography variant="body2">
              Add your location coordinates.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'brown' }}
              fullWidth
            >
              Add Location
            </Button>
          </>
        );
      case 'Facebook':
        return (
          <>
            <Typography variant="body2">
              Add your Facebook profile URL.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'blue' }}
              fullWidth
            >
              Add Facebook
            </Button>
          </>
        );
      case 'Twitter':
        return (
          <>
            <Typography variant="body2">
              Add your Twitter handle URL.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: 'lightblue' }}
              fullWidth
            >
              Add Twitter
            </Button>
          </>
        );
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
                'Pdf',
                'App',
                'Images',
                'Video',
                'Social Media',
                'Mp3',
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
    </Container>
  );
};

export default HomePage;
