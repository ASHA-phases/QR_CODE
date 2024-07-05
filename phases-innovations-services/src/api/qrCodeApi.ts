import axios from 'axios';

// Define the types for the data parameter based on the type
type QRCodeData =
  | { text: string } // For text QR codes
  | { url: string } // For link QR codes
  | { email: string; subject: string; message: string } // For email QR codes
  | { countryCode: string; phoneNumber: string} // For call
  | { countryCode: string; phoneNumber: string; message: string }// for sms and whatsapp
  | { networkName: string; ssid: string; networkType: string; password: string; hidden: boolean } // For WiFi QR codes
  | { firstName: string; lastName: string; phoneNumber: string; mobile: string; email: string; website: string; company: string; jobTitle: string; fax: string; address: string; city: string; postCode: string; country: string } // For VCard QR codes
  | { // Add other types as needed
      // Define other types here
    };

// API function to generate QR code
export const generateQRCode = async (type: string, data: QRCodeData) => {
  try {
    const response = await axios.post('http://localhost:4000/qr-code/generate', {
      type,
      data,
    });
    return response.data.qrCode;
  } catch (error) {
    console.error('Failed to generate QR code', error);
    throw error;
  }
};


