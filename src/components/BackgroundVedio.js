
import helpSansthan from '@assets/videos/helpSansthan.mp4';
import { Circle } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import play_icon from '@assets/images/play_icon.png';
import pause_icon from '@assets/images/pause_icon.png';
const backgroundStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1'
};
const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
    zIndex: '1', // This makes sure the overlay is above the video but still below other content
};
const BackgroundVedio = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {

    // let selectedImage = heroImage;
    // if (heroCount === 1) {
    //     selectedImage = heroImage1;
    // } else if (heroCount === 2) {
    //     selectedImage = heroImage2;
    // } else if (heroCount === 3) {
    //     selectedImage = heroImage3;
    // }  

    // if (playStatus) {
    //     return (
    //         <video autoPlay loop muted style={{
    //             width: '100%', height: '100%', objectFit: 'cover',
    //             // float: 'left',
    //             // top: '0',
    //             // left: '0',
    //             // right: '0',
    //             // bottom: '0',
    //             padding: 'none',
    //             // position: 'fixed',
    //             zIndex: '-1'
    //         }}>
    //             <source src={heroVideo} type="video/mp4" />
    //         </video>
    //     );
    // }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Video background */}
            {playStatus ? (
                <Paper
                    elevation={4}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: {
                            xs: '10rem', // Small screens
                            sm: '40rem', // Larger screens
                        },
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    }}
                >
                    <Box
                        component="video"
                        autoPlay
                        loop
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(100%)',
                            borderRadius: 2,
                        }}
                    >
                        {/* <video autoPlay loop style={backgroundStyle}>
                            <source src={helpSansthan} type="video/mp4" />
                        </video> */}
                        <source src={helpSansthan} type="video/mp4" />
                    </Box>
                </Paper>
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        height: {
                            xs: '10rem', // Small screens
                            sm: '40rem', // Larger screens
                        },
                        backgroundImage: `
                         linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
                         url(${heroData[heroCount].url})
                       `,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        // borderRadius: '0 0 10px 10px',
                        transition: 'background-image 1s ease-in-out', // Smooth transition

                    }}
                >
                    <Grid container mt={1} height={'inherit'}>
                        <Grid item xs={12} sm={5} display="flex" justifyContent="end" alignItems="center"  >
                            <Box sx={{ p: '0px 0px 0px 15px', width: { xs: '100%', sm: '80%', md: '80%' } }} >
                                <Typography variant="h6" color='#1df562' sx={{ mb: 1, fontWeight: 'bold' }} textTransform={'uppercase'}>
                                    {heroData[heroCount].text1}
                                </Typography>
                                <Typography variant="h2" sx={{}} color='white' borderBottom={'4px solid #d5d519'} fontWeight={'bold'} textTransform={'capitalize'}>
                                    {heroData[heroCount].text2}
                                </Typography>
                                <Typography variant="body1" sx={{}} mt={1} color='#afebe5' >
                                    {heroData[heroCount].text3}

                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                    Donate Now
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center"> </Grid>
                    </Grid>
                </Box>

            )}
            <Stack sx={{ position: 'absolute', right: '5%', bottom: '10%', }} direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
                <img
                    src={playStatus ? pause_icon : play_icon}
                    alt="arrowbtn"
                    onClick={() => setPlayStatus(!playStatus)}
                    style={{ width: '3rem', height: '3rem', borderRadius: '50%', border: '2px solid white' }}
                />
                <Typography color='white' fontWeight={'bold'}>
                    See the video
                </Typography>
            </Stack>
            {!playStatus ? (<Box sx={{ position: 'absolute', left: '10%', bottom: '10%', }}>
                <Stack direction="row" spacing={1}>
                    {
                        heroData.map((item, index) => {
                            return (<IconButton onClick={() => setHeroCount(index)} key={index}>
                                <Circle
                                    style={{ fontSize: 14 }}
                                    sx={{ color: heroCount === index ? '#d5d519' : 'white' }}
                                />
                            </IconButton>)
                        })
                    }
                </Stack>
            </Box>) : ''}
        </div>
    );

}

export default BackgroundVedio;