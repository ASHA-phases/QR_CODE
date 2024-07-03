import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How does Billing work?',
    answer: 'Start using our premium features by getting a 7-day free trial. The trial gets you access to all of our premium features for 7 days. If during these 7 days you decide you like the service, you can go ahead and choose a plan.'
  },
  {
    question: 'What happens if I want to make changes to my QR code?',
    answer: 'You can edit your QR Code as much as you like in your dashboard.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial.'
  },
  {
    question: 'How long until I get my QR code?',
    answer: 'You will receive your QR code immediately after completing the setup process.'
  },
  {
    question: 'What currency am I billed in?',
    answer: 'You are billed in the currency of your country of residence.'
  },
  {
    question: 'What are the requirements to get my QR code?',
    answer: 'There are no special requirements; just complete the signup process and you\'re good to go.'
  },
  {
    question: 'Can I change my plan?',
    answer: 'Yes, you can change your plan at any time from your dashboard.'
  },
  {
    question: 'What are my payment options?',
    answer: 'We accept various payment options including credit cards, debit cards, and PayPal.'
  }
];

const FAQPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently asked questions
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          And a subheading describing your site, too
        </Typography>
      </Box>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mt: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQPage;
