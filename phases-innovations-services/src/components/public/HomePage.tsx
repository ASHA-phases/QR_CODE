// pages/HomePage.tsx
import React, { useState } from "react";
import { Container, Grid, Paper, Box, Typography, Button } from "@mui/material";
import QRCodeGenerator from "../QRCodeGenerator";
import QRCodeTypes from "../QRCodeTypes";
import LinkForm from "../QRCodeForms/LinkForm";
import EmailForm from "../QRCodeForms/EmailForm";
import VCardForm from "../QRCodeForms/VCardForm";
import SmsForm from "../QRCodeForms/SmsForm";
import WifiForm from "../QRCodeForms/WifiForm";
import TextForm from "../QRCodeForms/TextForm";
import CallForm from "../QRCodeForms/CallForm";
import WhatsappForm from "../QRCodeForms/WhatsappForm";
import EventForm from "../QRCodeForms/EventForm";
import PdfForm from "../QRCodeForms/PdfForm";
import AppForm from "../QRCodeForms/AppForm";
import ImagesForm from "../QRCodeForms/ImageForm";
import VideoForm from "../QRCodeForms/VideoForm";
import SocialMediaForm from "../QRCodeForms/SocialmediaForm";
import LocationForm from "../QRCodeForms/LocationForm";
import FacebookForm from "../QRCodeForms/FacebookForm";
import TwitterForm from "../QRCodeForms/TwitterForm";
import MP3Form from "../QRCodeForms/Mp3Form";
import { generateQRCode } from "../Services/api";

const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [generatedQRCode, setGeneratedQRCode] = useState<string | null>(null);

  const handleGenerateQRCode = async (formData: any) => {
    try {
      let qrCodeData;
      switch (selectedType) {
        case "Link":
        case "Email":
        case "Sms":
        case "VCard":
        case "Call":
        case "Whatsapp":
        case "Wifi":
        case "Location":
          qrCodeData = await generateQRCode(formData); // Replace with actual API call
          break;
        case "Text":
          qrCodeData = await generateQRCode({ text: formData.text }); // Example for Text form
          break;
        case "Facebook":
          qrCodeData = await generateQRCode({ facebookUrl: formData.facebookUrl }); // Example for Facebook form
          break;
        case "Twitter":
          qrCodeData = await generateQRCode({ twitterUrl: formData.twitterUrl }); // Example for Twitter form
          break;
        default:
          break;
      }
      
      if (qrCodeData) {
        setGeneratedQRCode(qrCodeData); // Assuming API returns QR code data
      } else {
        console.error("Empty QR code data returned.");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  // Determine if the form requires showing the generate button
  const shouldShowGenerateButtonForForm = (type: string | null) => {
    return [
      "Link", "Email", "Sms", "VCard", "Call", "Whatsapp", "Wifi", 
      "Location", "Text", "Facebook", "Twitter" // Add types here as needed
    ].includes(type || "");
  };

  const renderForm = () => {
    switch (selectedType) {
      case "Link":
        return <LinkForm onGenerate={handleGenerateQRCode} />;
      case "Email":
        return <EmailForm onGenerate={handleGenerateQRCode} />;
      case "VCard":
        return <VCardForm onGenerate={handleGenerateQRCode} />;
      case "Sms":
        return <SmsForm onGenerate={handleGenerateQRCode} />;
      case "Wifi":
        return <WifiForm onGenerate={handleGenerateQRCode} />;
      case "Text":
        return <TextForm onGenerate={handleGenerateQRCode} />;
      case "Call":
        return <CallForm onGenerate={handleGenerateQRCode} />;
      case "Whatsapp":
        return <WhatsappForm onGenerate={handleGenerateQRCode} />;
      case "Event":
        return <EventForm onGenerate={handleGenerateQRCode} />;
      case "Pdf":
        return <PdfForm onGenerate={handleGenerateQRCode} />;
      case "App":
        return <AppForm onGenerate={handleGenerateQRCode} />;
      case "Images":
        return <ImagesForm onGenerate={handleGenerateQRCode} />;
      case "Video":
        return <VideoForm onGenerate={handleGenerateQRCode} />;
      case "SocialMedia":
        return <SocialMediaForm onGenerate={handleGenerateQRCode} />;
      case "Mp3":
        return <MP3Form onGenerate={handleGenerateQRCode} />;
      case "Location":
        return <LocationForm onGenerate={handleGenerateQRCode} />;
      case "Facebook":
        return <FacebookForm onGenerate={handleGenerateQRCode} />;
      case "Twitter":
        return <TwitterForm onGenerate={handleGenerateQRCode} />;
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
        {/* Example Explore Button */}
        <Button variant="contained" style={{ backgroundColor: "green" }}>
          Explore
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <QRCodeTypes setSelectedType={setSelectedType} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <QRCodeGenerator generatedQRCode={generatedQRCode} />
          </Paper>
        </Grid>
      </Grid>

      {selectedType && (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            {selectedType} QR Code
          </Typography>
          <Paper elevation={3} style={{ padding: "20px" }}>
            {renderForm()}
            {/* Conditionally render Generate QR Code button based on form requirement */}
            {shouldShowGenerateButtonForForm(selectedType) && (
              <Box mt={2}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => handleGenerateQRCode({})} // Pass empty object or appropriate form data here
                >
                  Generate QR Code
                </Button>
              </Box>
            )}
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
            { type: "Event", description: "Invite people to your event" },
            { type: "VCard", description: "Save contact to the phone scanning" },
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
                {/* Select button to choose QR code type */}
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
