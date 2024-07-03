import React, { useState } from "react";
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
} from "@mui/material";

const IndexPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const isSignedIn = false; // Change this variable based on user sign-in status

  const renderForm = () => {
    switch (selectedType) {
      case "Link":
        return (
          <>
            <TextField
              fullWidth
              label="Submit URL"
              placeholder="https://"
              margin="normal"
            />
            <Typography variant="body2">
              Your QR code will open this URL.
            </Typography>
          </>
        );
      case "Email":
        return (
          <>
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Subject" margin="normal" />
            <TextField fullWidth label="Message" margin="normal" />
          </>
        );
      case "Text":
        return (
          <>
            <TextField
              fullWidth
              label="Text"
              placeholder="Write your text here"
              margin="normal"
            />
            <Typography variant="body2">
              Scanning the QR code will show this text.
            </Typography>
          </>
        );
      case "Call":
        return (
          <>
            <TextField fullWidth label="Country code" margin="normal" />
            <TextField fullWidth label="Phone number" margin="normal" />
            <Typography variant="body2">
              Scanning the QR code will call this number.
            </Typography>
          </>
        );
      case "Sms":
        return (
          <>
            <TextField fullWidth label="Country code" margin="normal" />
            <TextField fullWidth label="Phone number" margin="normal" />
            <TextField fullWidth label="Message" margin="normal" />
            <Typography variant="body2">
              Scanning the QR code will send message to the phone number.
            </Typography>
          </>
        );
      case "Whatsapp":
        return (
          <>
            <TextField fullWidth label="Country code" margin="normal" />
            <TextField fullWidth label="Phone number" margin="normal" />
            <TextField fullWidth label="Message" margin="normal" />
            <Typography variant="body2">
              Scanning the QR code will send WhatsApp message to the phone
              number.
            </Typography>
          </>
        );
      case "Wifi":
        return (
          <>
            <TextField fullWidth label="Network name" margin="normal" />
            <TextField fullWidth label="SSID" margin="normal" />
            <FormControl fullWidth margin="normal">
              <InputLabel>Network type</InputLabel>
              <Select>
                <MenuItem value="No encryption">No encryption</MenuItem>
                <MenuItem value="WPA/WPA2">WPA/WPA2</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth label="Password" margin="normal" />
            <FormControlLabel control={<Checkbox />} label="Hidden" />
            <Typography variant="body2">
              Scanning the QR code will connect to WI-FI.
            </Typography>
          </>
        );
      case "Event":
        return (
          <>
            <Typography variant="body2">
              Invite people to your event.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              fullWidth
            >
              Sign up for free
            </Button>
          </>
        );
      case "VCard":
        return (
          <>
            <TextField fullWidth label="First name" margin="normal" />
            <TextField fullWidth label="Last name" margin="normal" />
            <TextField fullWidth label="Phone number" margin="normal" />
            <TextField fullWidth label="Mobile" margin="normal" />
            <TextField fullWidth label="E-mail" margin="normal" />
            <TextField
              fullWidth
              label="Website"
              placeholder="https://"
              margin="normal"
            />
            <TextField fullWidth label="Company" margin="normal" />
            <TextField fullWidth label="Job title" margin="normal" />
            <TextField fullWidth label="Fax" margin="normal" />
            <TextField fullWidth label="Address" margin="normal" />
            <TextField fullWidth label="City" margin="normal" />
            <TextField fullWidth label="Post code" margin="normal" />
            <TextField fullWidth label="Country" margin="normal" />
            <Typography variant="body2">
              Your QR code will save this contact to the phone scanning.
            </Typography>
          </>
        );
      case "Pdf":
        return (
          <>
            <Typography variant="body2">
              Share PDF Document inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "App":
        return (
          <>
            <Typography variant="body2">
              Download apps Android & iOS.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Images":
        return (
          <>
            <Typography variant="body2">
              Share multiple images inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Video":
        return (
          <>
            <Typography variant="body2">
              Share a video inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "SocialMedia":
        return (
          <>
            <Typography variant="body2">
              A place to share all your social media profiles.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Mp3":
        return (
          <>
            <Typography variant="body2">
              Share an audio inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Location":
        return (
          <>
            <Typography variant="body2">
              Share a location inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Facebook":
        return (
          <>
            <Typography variant="body2">
              Share your Facebook Profile inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
          </>
        );
      case "Twitter":
        return (
          <>
            <Typography variant="body2">
              Share your Twitter Profile inside your QR Code.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "green", width: "200px" }}
              >
                Sign up for free
              </Button>
            </Box>
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
        <Button variant="contained" style={{ backgroundColor: "green" }}>
          Explore
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Box mb={2}></Box>
            <Grid container spacing={2}>
              {[
                "Link",
                "Email",
                "Text",
                "Call",
                "Sms",
                "V-card",
                "Whatsapp",
                "Wifi",
                "Event",
                "Pdf",
                "App",
                "Images",
                "Video",
                "Social Media",
                "Mp3",
                "Location",
                "Facebook",
                "Twitter",
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
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Box mb={2}>
              <img
                src="https://th.bing.com/th?id=OIP.IuJeGhNKgaISjYpSpxRJWQHaHW&w=251&h=248&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="QR Code"
                style={{ width: "50%" }}
              />
            </Box>
            <Box mb={2}>
              <Button
                variant="contained"
                style={{ backgroundColor: "teal" }}
                fullWidth
              >
                Download PNG
              </Button>
            </Box>
            <Box mb={2}>
              <Button
                variant="contained"
                style={{ backgroundColor: "teal" }}
                fullWidth
              >
                Download SVG
              </Button>
            </Box>
            <Box mb={2}>
              <Button
                variant="contained"
                style={{ backgroundColor: "teal" }}
                fullWidth
              >
                Download PDF
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
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {renderForm()}
              </Grid>
              <Grid item xs={12}>
                {(selectedType !== "Event" &&
                  selectedType !== "Pdf" &&
                  selectedType !== "App" &&
                  selectedType !== "Images" &&
                  selectedType !== "Video" &&
                  selectedType !== "SocialMedia" &&
                  selectedType !== "Mp3" &&
                  selectedType !== "Location" &&
                  selectedType !== "Facebook" &&
                  selectedType !== "Twitter") ||
                isSignedIn ? (
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "black" }}
                    >
                      Generate QR Code
                    </Button>
                  </Box>
                ) : null}
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
            {
              type: "Event",
              description: "Save contact to the phone scanning",
            },
            { type: "VCard", description: "Invite people to your event" },
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

export default IndexPage;

// Add an empty export statement to make this file a module
export {};
