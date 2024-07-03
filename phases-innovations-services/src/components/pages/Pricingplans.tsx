import React from 'react';
import { Grid, Typography, Card, CardContent, Button, Box, makeStyles, Container } from '@material-ui/core';
import FAQPage from './FAQPage';

const useStyles = makeStyles({
  root: {
    // padding: '10px 20px',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    minWidth: 300,
    margin: '0 auto', // Center the card horizontally
    padding: 20,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    transition: 'transform 0.3s ease-in-out', // Add smooth scaling on hover
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  monthlyCard: {
    backgroundColor: '#fff3e0', // Light gray background for monthly plan
  },
  yearlyCard: {
    backgroundColor: '#fff3e0', // Light orange background for premium plan
    transform: 'scale(1.1)', // Slightly larger than the other cards
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Slightly larger shadow
    zIndex: 1, // Ensure it's on top
  },
  premiumCard: {
    backgroundColor: '#fff3e0', // Light orange background for premium plan
  },
  button: {
    marginTop: 20,
  },
  monthlyButton: {
    backgroundColor: '#ff9800', // Green for monthly plan
    color: '#fff',
  },
  yearlyButton: {
    backgroundColor: '#ff9800', // Blue for yearly plan
    color: '#fff',
  },
  premiumButton: {
    backgroundColor: '#ff9800', // Orange for premium plan
    color: '#fff',
  },
});

const PricingPlans: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Pricing Plans Made Simple
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Looking for pricing? You are in the right place. We offer three plans with various benefits.
      </Typography>
      <Grid container justify="center" spacing={4}>
        {/* Monthly Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${classes.card} ${classes.monthlyCard}`}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4">$35</Typography>
              <Typography variant="subtitle1" color="textSecondary">Unlimited QR Codes</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>Billed monthly</Typography>
              <ul>
                <li>✓ Unlimited QR Codes</li>
                <li>✓ Unlimited Scans</li>
                <li>✓ Dynamic QR Codes</li>
                <li>✓ QRmatic & Static QR Codes</li>
                <li>✓ Custom Landing Pages</li>
                <li>✓ Bulk Creation</li>
                <li>✓ Cancel any time</li>
                <li>✓ 7-day money back guarantee</li>
              </ul>
              <Button variant="contained" className={`${classes.button} ${classes.monthlyButton}`}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Yearly Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${classes.card} ${classes.yearlyCard}`}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4">$350</Typography>
              <Typography variant="subtitle1" color="textSecondary">Unlimited QR Codes</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>12 months license + Free</Typography>
              <ul>
                <li>✓ Unlimited QR Codes</li>
                <li>✓ Unlimited Scans</li>
                <li>✓ Dynamic QR Codes</li>
                <li>✓ QRmatic & Static QR Codes</li>
                <li>✓ Custom Landing Pages</li>
                <li>✓ Bulk Creation</li>
                <li>✓ Cancel any time</li>
                <li>✓ 7-day money back guarantee</li>
              </ul>
              <Button variant="contained" className={`${classes.button} ${classes.yearlyButton}`}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Premium Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={`${classes.card} ${classes.premiumCard}`}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4">$50</Typography>
              <Typography variant="subtitle1" color="textSecondary">Premium QR Codes</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>Enhanced features included</Typography>
              <ul>
                <li>✓ Premium QR Code designs</li>
                <li>✓ Enhanced analytics</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced security features</li>
                <li>✓ Advanced security features</li>
                <li>✓ Advanced security features</li>
                <li>✓ Advanced security features</li>
              </ul>
              <Button variant="contained" className={`${classes.button} ${classes.premiumButton}`}>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Adding space before and after FAQPage */}
      <Box mt={4} mb={4}>
        <FAQPage />
      </Box>
    </Container>
  );
};

export default PricingPlans;
