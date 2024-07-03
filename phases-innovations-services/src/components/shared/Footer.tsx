import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, LinkedIn, YouTube, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6, width: "100%",marginTop: '30px' }}
    >
      <Divider sx={{ mb: 4, borderBottomWidth: "1px" }} />
      <Container maxWidth={false} sx={{ width: "100%" }}>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              align="center"
            >
              Qr Code
            </Typography>
            <Box mt={2} display="flex" justifyContent="center" gap={2}>
              <IconButton href="#" sx={{ color: "black" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: "black" }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: "black" }}>
                <YouTube />
              </IconButton>
              <IconButton href="#" sx={{ color: "black" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item sx={{ width: "300px" }}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                align="center"
              >
                Product
              </Typography>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Dynamic Qr Code
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Static Qr Code
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Api
              </Link>
            </Grid>
            <Grid item sx={{ width: "300px" }}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                align="center"
              >
                Help
              </Typography>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                FAQ
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Help Center
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Contact us
              </Link>
            </Grid>
            <Grid item sx={{ width: "300px" }}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                align="center"
              >
                Company
              </Typography>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                About Us
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="text.secondary"
                display="block"
                align="center"
              >
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
