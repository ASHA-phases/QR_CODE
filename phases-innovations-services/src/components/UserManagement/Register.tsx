import React from 'react';
import { TextField, Button, Box, Typography, Link, Grid, Card, CardContent } from '@mui/material';
import { Google as GoogleIcon, Microsoft as MicrosoftIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
 
const Register: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f0f4ff"
      p={3}
    >
      <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create an account
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            It's free and only takes a few seconds.
          </Typography>
          <Box mt={2}>
            <TextField
              fullWidth
              label="Enter email"
              variant="outlined"
              margin="normal"
            />
            <Typography variant="body2" color="error">
              Please include an '@' in the email address
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2, bgcolor: 'green' }}
            >
              Sign up
            </Button>
            <Box mt={2} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body2">or</Typography>
            </Box>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                >
                  Sign Up With Google
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<MicrosoftIcon />}
                >
                  Sign Up With Microsoft
                </Button>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="center" alignItems="center">
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Login here
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
 
export default Register;