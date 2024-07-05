import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import Blog from './components/pages/Blog';
import ContactForm from './components/pages/ContactForm';
import FAQPage from './components/pages/FAQPage';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import PricingPlans from './components/pages/Pricingplans';
import HomePage from './components/public/HomePage';
import Login from './components/UserManagement/Login';
import Register from './components/UserManagement/Register';
import ApiDocumentation from './components/pages/ApiDocumentation';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/plans" element={<PricingPlans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/api" element={<ApiDocumentation />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
