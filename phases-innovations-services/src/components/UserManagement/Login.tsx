import React from 'react';
import { TextField, Button, Box, Typography, Link, Grid, Card, CardContent } from '@mui/material';
import { Google as GoogleIcon, Microsoft as MicrosoftIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
 
const Login: React.FC = () => {
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
            Login to your account
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Use your email to access your account.
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
              Log in
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
                  Log in With Google
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<MicrosoftIcon />}
                >
                  Log in With Microsoft
                </Button>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="center" alignItems="center">
              <Link component={RouterLink} to="/register" variant="body2">
                Not registered? Create an account
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
 
export default Login;