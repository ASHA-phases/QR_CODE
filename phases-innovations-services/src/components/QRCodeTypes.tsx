import React from "react";
import { Grid, Button } from "@mui/material";

interface Props {
  setSelectedType: React.Dispatch<React.SetStateAction<string | null>>;
}

const QRCodeTypes: React.FC<Props> = ({ setSelectedType }) => {
  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
  };

  const qrCodeTypes = [
    { type: "Link", label: "Link" },
    { type: "Email", label: "Email" },
    { type: "Text", label: "Text" },
    { type: "Call", label: "Call" },
    { type: "Sms", label: "SMS" },
    { type: "VCard", label: "VCard" },
    { type: "Whatsapp", label: "WhatsApp" },
    { type: "Wifi", label: "Wi-Fi" },
    { type: "Location", label: "Location" },
    { type: "Facebook", label: "Facebook" },
    { type: "Twitter", label: "Twitter" },
    { type: "Event", label: "Event" },
    { type: "Pdf", label: "PDF File" },
    { type: "App", label: "App" },
    { type: "Images", label: "Images" },
    { type: "Video", label: "Video" },
    { type: "SocialMedia", label: "Social Media" },
    { type: "Mp3", label: "Mp3" },
   
  ];

  return (
    <Grid container spacing={2}>
      {qrCodeTypes.map((item) => (
        <Grid item xs={4} key={item.type}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleTypeSelection(item.type)}
          >
            {item.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default QRCodeTypes;
