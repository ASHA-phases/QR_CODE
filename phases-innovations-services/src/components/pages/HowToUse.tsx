import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
  },
});

const steps = [
  {
    label: 'Choose QR Code Type',
    description: 'First step would be to choose your QR Code Type. This will define what your QR Code will do.',
    icon: <QrCodeScannerIcon />,
  },
  {
    label: 'Fill required fields',
    description: 'Then, you will need to fill the required fields that the QR Code type is asking. For example, Type Link will ask for a website URL.',
    icon: <EditIcon />,
  },

  {
    label: 'Download & Share QR Code',
    description: 'Finally, you can download and share your QR Code Generated from your dashboard and edit if needed.',
    icon: <FileDownloadIcon />,
  },
];

const HowToUse: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h6" component="h2" gutterBottom color="primary">
            How to Use
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            Creating QR Codes with QR.io
          </Typography>
          <Typography variant="body1" paragraph>
            Creating QR Codes with QR.io is pretty simple, create an account and use our QR Code Generator to create unlimited dynamic & static QR Codes.
          </Typography>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'primary.main',
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Generate QR Code' : 'Continue'}
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HowToUse;