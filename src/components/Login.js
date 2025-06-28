import { Copyright } from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Typography, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextFieldSmall } from "../styles/typographyStyle";
import { useEffect, useState } from "react";


const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setShow(true);
    }, []);
    const handleSubmit = async (event) => {

    };

    return (
        <Box position={'relative'} sx={{ width: '100%', height: '100vh' }} >
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    rowGap: 5
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
                                <img src="" alt="Ngo Logo" style={{ width: '200px', height: '100px', marginLeft: '-22px' }} />
                            </Box>
                            <Typography
                                component="h1"
                                variant="h5"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '36px',
                                    fontSize: '28px',
                                }}
                            >
                                Get started with Us
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextFieldSmall
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mobile"
                                    label="Mobile"
                                    name="mobile"
                                    type="text"
                                    autoFocus
                                    inputProps={{
                                        maxLength: 10,
                                    }}

                                />
                                <TextFieldSmall
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"

                                />
                                <Button
                                    // disabled={isSubmitting}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 3, fontFamily: 'Poppins, sans-serif' }}
                                    color="primary"
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Link onClick={() => navigate('/forgot-password')} variant="body2" sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Poppins, sans-serif' }}>
                                            Forgot password?
                                        </Link> */}
                                    </Grid>
                                    <Grid item>
                                        <Link sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Poppins, sans-serif' }} onClick={() => navigate('/signup')} variant="body2" fontSize={'1rem'} color="rgba(0,0,0,0.8)">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Zoom>
                </Box>
                <Copyright sx={{ fontFamily: 'Poppins, sans-serif' }} />
            </Container>
        </Box>
    )
}

export default Login;