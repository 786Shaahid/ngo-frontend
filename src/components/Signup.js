import { Box, Button, Container, Grid, Link, Typography, Zoom } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { TextFieldSmall } from '../styles/typographyStyle';
import { useNavigate } from 'react-router-dom';
import { Copyright } from '@mui/icons-material';
const Signup = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);
    const handleSubmit = async (event) => {

    };
    return (
        <Box position={'relative'} sx={{ width: '100%', height: '100vh' }}>
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    rowGap: 4
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Zoom
                        in={show}
                        style={{
                            transformOrigin: 'center center',
                            transition: 'transform 1s ease',
                        }}
                        timeout={1000}>
                        <Box
                            component="form" noValidate onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#ffffff',
                                padding: '10px 2rem 2rem',
                                borderRadius: '8px',
                                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
                                width: '28rem',
                                height: 'auto',
                            }}
                        >

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    width: '100%',
                                    mb: 1,
                                    ml: -1
                                }}
                            >
                                <img src="" alt="ngo Logo" style={{ width: '200px', height: '100px', marginLeft: '-22px' }} />
                            </Box>
                            <Typography
                                component="h1"
                                variant="h5"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '36px',
                                    fontSize: '28px',
                                    mb: 2
                                }}
                            >
                                Get started with Us
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextFieldSmall
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        inputProps={{
                                            navindex: 1
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldSmall
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        inputProps={{
                                            navindex: 2
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldSmall
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobile"
                                        name="mobile"
                                        type='text'
                                        autoFocus
                                        inputProps={{
                                            maxLength: 10,
                                            navindex: 3
                                        }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldSmall
                                        required
                                        fullWidth
                                        name="factoryName"
                                        label="Factory Name"
                                        id="factoryName"
                                        inputProps={{
                                            navindex: 4
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldSmall
                                        required
                                        fullWidth
                                        name="city"
                                        label="City"
                                        id="city"
                                        inputProps={{
                                            navindex: 5
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                // disabled={isSubmitting}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                navindex={10}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link
                                        sx={{ ":hover": { cursor: "pointer" }, fontFamily: 'Poppins, sans-serif', }}
                                        onClick={() => navigate("/login")}
                                        variant="body2"
                                        fontSize={'1rem'}
                                        color="rgba(0,0,0,0.8)"
                                    >
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Zoom>
                </Box>

                <Copyright sx={{ fontFamily: 'Poppins, sans-serif' }} />
            </Container>
        </Box>
    )
}

export default Signup;