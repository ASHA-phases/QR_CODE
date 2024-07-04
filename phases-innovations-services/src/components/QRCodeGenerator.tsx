import React from "react";
import { Box, Button, } from "@mui/material";

interface Props {
  generatedQRCode: string | null;
}

const QRCodeGenerator: React.FC<Props> = ({ generatedQRCode }) => {
  const handleDownload = (format: string) => {
    if (!generatedQRCode) return;

    const link = document.createElement('a');
    link.href = generatedQRCode;
    link.download = `QRCode.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
            <><Box mb={2}>
          <img
              src={generatedQRCode || "data:image/jpeg;base64,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"}
              alt="QR Code"
              style={{ width: "50%" }} />
      </Box><Box mb={2}>
              <Button
                  variant="contained"
                  style={{ backgroundColor: "teal" }}
                  fullWidth
                  onClick={() => handleDownload("png")}
              >
                  Download PNG
              </Button>
          </Box><Box mb={2}>
              <Button
                  variant="contained"
                  style={{ backgroundColor: "teal" }}
                  fullWidth
                  onClick={() => handleDownload("svg")}
              >
                  Download SVG
              </Button>
          </Box><Box mb={2}>
              <Button
                  variant="contained"
                  style={{ backgroundColor: "teal" }}
                  fullWidth
                  onClick={() => handleDownload("pdf")}
              >
                  Download PDF
              </Button>
          </Box></>
  );
};

export default QRCodeGenerator;
