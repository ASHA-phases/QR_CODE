import React from "react";
import { Button, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const MP3Form: React.FC<Props> = ({ onGenerate }) => {
  return (
    <>
      <Typography variant="body2">
        Share MP3 inside your QR Code.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "green", width: "200px" }}
        onClick={onGenerate}
      >
        Sign up for free
      </Button>
    </>
  );
};

export default MP3Form;
