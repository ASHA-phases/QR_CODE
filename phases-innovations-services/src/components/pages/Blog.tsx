import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Collapse
} from '@mui/material';

const Blog: React.FC = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  const handleExpandClick = (index: number) => {
    if (index === 1) {
      setExpanded1(!expanded1);
    } else if (index === 2) {
      setExpanded2(!expanded2);
    } else if (index === 3) {
      setExpanded3(!expanded3);
    } else if (index === 4) {
      setExpanded4(!expanded4);
    } else if (index === 5) {
      setExpanded5(!expanded5);
    } else if (index === 6) {
      setExpanded6(!expanded6);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          QR Code Insights
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover the latest trends, tips, and best practices for QR codes
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
          Learn More
        </Button>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://i1.sndcdn.com/artworks-000603696253-ug8eug-t500x500.jpg"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                How QR Codes are Revolutionizing Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn how businesses are leveraging QR codes to enhance their marketing strategies.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(1)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded1 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes have transformed marketing by bridging the gap between physical and digital interactions. Businesses leverage QR codes to enhance customer engagement through instant access to product details, promotions, and interactive experiences. They drive conversions by simplifying purchasing processes and guiding consumers seamlessly through sales funnels. QR codes also provide valuable insights into consumer behavior, enabling marketers to optimize campaigns and deliver personalized content effectively. Cost-effective and eco-friendly, QR codes streamline marketing efforts by replacing printed materials with digital interactions, making them a powerful tool for modern marketing strategies.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.whoCpME_k0-f4GUR8zPIsQHaFB?rs=1&pid=ImgDetMain"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Top 10 Creative Uses for QR Codes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover innovative ways to use QR codes in your business or personal projects.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(2)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded2 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes have transformed marketing strategies by enabling businesses to enhance engagement and streamline processes. From contactless menus in restaurants that offer diners instant access to digital menus and promotions, to virtual tours in real estate that allow prospective buyers to explore properties remotely, QR codes have revolutionized how information is accessed and shared. They're also used in retail for seamless payments and product information, in education for interactive learning resources, and even in healthcare for accessing patient records securely. QR codes are versatile tools that continue to innovate across industries, offering convenient solutions for both businesses and personal projects alike.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.U4dHwwQJeVQP7mrbd61LWwHaFg?w=600&h=446&rs=1&pid=ImgDetMain"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                QR Code Security: What You Need to Know
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stay informed about the security aspects of using QR codes in your daily operations.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(3)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded3 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes, while immensely useful, also raise concerns about security. As businesses and individuals increasingly adopt QR codes for transactions and information sharing, it's crucial to prioritize security measures. Implementing encrypted QR codes ensures data integrity and protects against tampering. According to cybersecurity experts, "QR codes should always be scanned cautiously to avoid malicious links or unauthorized access," emphasizing the importance of verifying sources before scanning. Additionally, employing QR code generators that offer security features like password protection and expiration dates helps mitigate risks associated with data exposure. Keeping abreast of emerging threats and adhering to best practices ensures QR codes remain a reliable and secure tool in daily operations.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />    <br />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://www.qr-code-generator.com/wp-content/themes/qr/images/slideshows/solutions/text-03.png"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                How QR Codes are Revolutionizing Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn how businesses are leveraging QR codes to enhance their marketing strategies.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(4)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded4 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes have transformed marketing by bridging the gap between physical and digital interactions. Businesses leverage QR codes to enhance customer engagement through instant access to product details, promotions, and interactive experiences. They drive conversions by simplifying purchasing processes and guiding consumers seamlessly through sales funnels. QR codes also provide valuable insights into consumer behavior, enabling marketers to optimize campaigns and deliver personalized content effectively. Cost-effective and eco-friendly, QR codes streamline marketing efforts by replacing printed materials with digital interactions, making them a powerful tool for modern marketing strategies.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://www.seoclerk.com/pics/000/957/247/4596db72380af0bee9f63be92fad421e.jpg"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Top 10 Creative Uses for QR Codes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover innovative ways to use QR codes in your business or personal projects.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(5)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded5 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes have transformed marketing strategies by enabling businesses to enhance engagement and streamline processes. From contactless menus in restaurants that offer diners instant access to digital menus and promotions, to virtual tours in real estate that allow prospective buyers to explore properties remotely, QR codes have revolutionized how information is accessed and shared. They're also used in retail for seamless payments and product information, in education for interactive learning resources, and even in healthcare for accessing patient records securely. QR codes are versatile tools that continue to innovate across industries, offering convenient solutions for both businesses and personal projects alike.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.0HfQpa-aJyNOUiPoQwqeFQHaHa?rs=1&pid=ImgDetMain"
              alt="Blog Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                QR Code Security: What You Need to Know
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stay informed about the security aspects of using QR codes in your daily operations.
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExpandClick(6)}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
              >
                {expanded6 ? 'Show Less' : 'Read More'}
              </Button>
              <Collapse in={expanded6} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    QR codes, while immensely useful, also raise concerns about security. As businesses and individuals increasingly adopt QR codes for transactions and information sharing, it's crucial to prioritize security measures. Implementing encrypted QR codes ensures data integrity and protects against tampering. According to cybersecurity experts, "QR codes should always be scanned cautiously to avoid malicious links or unauthorized access," emphasizing the importance of verifying sources before scanning. Additionally, employing QR code generators that offer security features like password protection and expiration dates helps mitigate risks associated with data exposure. Keeping abreast of emerging threats and adhering to best practices ensures QR codes remain a reliable and secure tool in daily operations.
                  </Typography>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
