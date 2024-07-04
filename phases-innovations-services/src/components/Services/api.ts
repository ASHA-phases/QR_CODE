import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com'; // Replace with your API base URL

export async function generateQRCode(formData: any): Promise<string> {
  try {
    const response = await axios.post(`${BASE_URL}/generateQRCode`, formData);
    return response.data.qrCodeData; // Adjust this based on your API response structure
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}

// Add other API functions as needed

export {}; // This statement makes the file a module
