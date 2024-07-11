import axios from 'axios';

// Define the types for the data parameter based on the type
type QRCodeData =
  | { text: string } // For text QR codes
  | { url: string } // For link QR codes
  | { email: string; subject: string; message: string } // For email QR codes
  | { countryCode: string; phoneNumber: string } // For call
  | { countryCode: string; phoneNumber: string; message: string } // For sms and whatsapp
  | { networkName: string; ssid: string; networkType: string; password: string; hidden: boolean } // For WiFi QR codes
  | { firstName: string; lastName: string; phoneNumber: string; mobile: string; email: string; website: string; company: string; jobTitle: string; fax: string; address: string; city: string; postCode: string; country: string } // For VCard QR codes
  | { eventName: string; startDate: string; endDate: string; location: string; description: string } // For event QR codes
  | { facebookUrl: string; twitterUrl: string; instagramUrl : string;} // For social media QR codes
  | { appStoreLink: string; playStoreLink: string;}
  | { videoUrl: string }// For video
  | { profileUrl: string }// for facebook and twitter url 
  | { latitude: string; longitude: string }// for facebook and twitter url 
  ; 

// API function to generate QR code
const apiClient = axios.create({
  baseURL: 'http://localhost:4000/qr-code', // Adjust the baseURL to match your backend's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateQRCode = async (type: string, data: any) => {
  try {
    const response = await apiClient.post('/generate', { type, data });
    return response.data.qrCode;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};

export const generateQRCodePNG = async (type: string, data: any) => {
  try {
    const response = await apiClient.post('/generate-png', { type, data }, { responseType: 'arraybuffer' });
    return response.data;
  } catch (error) {
    console.error('Error generating PNG QR code:', error);
    throw error;
  }
};

export const generateQRCodeSVG = async (type: string, data: any) => {
  try {
    const response = await apiClient.post('/generate-svg', { type, data }, { responseType: 'text' });
    return response.data;
  } catch (error) {
    console.error('Error generating SVG QR code:', error);
    throw error;
  }
};

export const generateQRCodePDF = async (type: string, data: any) => {
  try {
    const response = await apiClient.post('/generate-pdf', { type, data }, { responseType: 'arraybuffer' });
    return response.data;
  } catch (error) {
    console.error('Error generating PDF QR code:', error);
    throw error;
  }
};