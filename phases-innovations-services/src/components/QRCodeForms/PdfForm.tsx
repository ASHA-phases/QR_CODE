import React from "react";
import { Button, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const PdfForm: React.FC<Props> = ({ onGenerate }) => {
  return (
    <>
      <Typography variant="body2">
        Share PDF inside your QR Code.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "green", width: "200px" }}
        onClick={() => onGenerate({ /* your form data here */ })}
      >
        Sign up for free
      </Button>
    </>
  );
};

export default PdfForm;
