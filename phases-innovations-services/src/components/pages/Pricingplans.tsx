import React from 'react';

const PricingPlans: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Pricing plans, Made Simple</h1>
      <p className="text-center mb-8 text-gray-600">
        Looking for pricing? You are in the right place. We have 2 different plans,<br />
        monthly plan and yearly plan (with extra benefits).
      </p>
      <div className="flex justify-center space-x-8">
        {/* Monthly Plan */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-1">$35</h2>
          <p className="text-gray-600 mb-1">Unlimited QR Codes</p>
          <p className="text-sm text-gray-500 mb-4">Billed monthly</p>
          <ul className="text-sm space-y-2">
            <li>Unlimited QR Codes</li>
            <li>Unlimited Scans</li>
            <li>Dynamic QR Codes</li>
            <li>QRmatic & Static QR Codes</li>
            <li>Custom Landing Pages</li>
            <li>Bulk Creation</li>
            <li>Cancel any time</li>
            <li>7-day money back guarantee</li>
          </ul>
        </div>
        
        {/* Yearly Plan */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-1">$350</h2>
          <p className="text-gray-600 mb-1">Unlimited QR Codes</p>
          <p className="text-green-600 text-sm mb-4">12 months license + Free</p>
          <ul className="text-sm space-y-2">
            <li>Unlimited QR Codes</li>
            <li>Unlimited Scans</li>
            <li>Dynamic QR Codes</li>
            <li>QRmatic & Static QR Codes</li>
            <li>Custom Landing Pages</li>
            <li>Bulk Creation</li>
            <li>Cancel any time</li>
            <li>7-day money back guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;