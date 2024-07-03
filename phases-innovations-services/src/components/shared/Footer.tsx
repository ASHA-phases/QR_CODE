import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, LinkedIn, YouTube, Instagram } from '@mui/icons-material';
 
const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Qr Code
                        </Typography>
                     <Box mt={4} display="flex" justifyContent="center" gap={2}>
                    <IconButton href="#" color="primary">
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" color="primary">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="#" color="primary">
                        <YouTube />
                    </IconButton>
                    <IconButton href="#" color="primary">
                        <Instagram />
                    </IconButton>
                </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Product
                        </Typography>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Dynamic Qr Code
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Static Qr Code
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Api
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Help
                        </Typography>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            FAQ
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Help Center
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Contact us
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Company
                        </Typography>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            About Us
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Terms of Service
                        </Link>
                        <Link href="#" variant="subtitle1" color="text.secondary" display="block">
                            Privacy Policy
                        </Link>
                    </Grid>
                </Grid>
               
            </Container>
        </Box>
    );
}
 
export default Footer;