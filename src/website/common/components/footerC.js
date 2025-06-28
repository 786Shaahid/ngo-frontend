import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1A202C', color: '#A0AEC0', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Left Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>
                            Colorlib
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Eligendi quasi
                            perferendis ratione perspiciatis accusantium.
                        </Typography>
                    </Grid>

                    {/* Links Section */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={4}>
                            {/* Discover */}
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', mb: 2 }}>
                                    Discover
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/" color="inherit" underline="hover">
                                        Home
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/about" color="inherit" underline="hover">
                                        About Us
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/portfolio" color="inherit" underline="hover">
                                        Portfolio
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/services" color="inherit" underline="hover">
                                        Services
                                    </Link>
                                </Typography>
                            </Grid>

                            {/* About */}
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', mb: 2 }}>
                                    About
                                </Typography>
                                <Typography variant="body2" >
                                    <Link href="/clients" color="inherit" underline="hover">
                                        Clients
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/team" color="inherit" underline="hover">
                                        Team
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/career" color="inherit" underline="hover">
                                        Career
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/testimonials" color="inherit" underline="hover">
                                        Testimonials
                                    </Link>
                                </Typography>
                            </Grid>

                            {/* Help */}
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', mb: 2 }}>
                                    Help
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/privacy-policy" color="inherit" underline="hover">
                                        Privacy Policy
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/terms" color="primary.contrastText" underline="hover">
                                        Terms & Conditions
                                    </Link>
                                </Typography>
                                <Typography variant="body2">
                                    <Link href="/partners" color="inherit" underline="hover">
                                        Partners
                                    </Link>
                                </Typography>
                            </Grid>

                            {/* Follow Us */}
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', mb: 2, fontSize: '1' }}>
                                    Follow Us
                                </Typography>
                                <Typography>
                                    <Link href="https://instagram.com" target="_blank">
                                        <Instagram sx={{ mr: 1 }} />
                                    </Link>
                                    <Link href="https://twitter.com" color="inherit" target="_blank">
                                        <Twitter sx={{ mr: 1 }} />
                                    </Link>
                                    <Link href="https://facebook.com" color="inherit" target="_blank">
                                        <Facebook sx={{ mr: 1 }} />
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #2D3748', textAlign: 'center' }}>
                    <Typography variant="body2">
                        &copy; 2019–2020 All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
