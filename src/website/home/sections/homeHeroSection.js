import { Box, Typography, useTheme } from "@mui/material";
// import helpSansthan from "../../../assets/videos/helpSansthan.mp4";
import { ContainedButton, OutlinedButtonHero } from "../../../styles/styleButton";



const HomeHeroSection = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            height={{ xs: '80vh', md: '90vh' }}
            width="100%"
            position="relative"
            overflow="hidden"
        >
            {/* Background Video */}
            {/* <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(65%)',
                    zIndex: 0,
                }}
            >
                <source src={helpSansthan} type="video/mp4" />
                Your browser does not support the video tag.
            </Box> */}
            {/* Background Video */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={1}
                sx={{
                    background: `linear-gradient(to right, ${theme.palette.primary.contrastText} 30%, transparent 70%)`,
                    opacity: 0.9,
                }}
            />
            {/* Content Overlay */}
            <Box
                position="absolute"
                top={'30%'}
                left={16}
                zIndex={1}
                // display="flex"
                // flexDirection="column"
                // alignItems=""
                // justifyContent="start"
                px={{ xs: 2, sm: 4 }}
                color="common.white"
                textAlign={{ xs: 'center', sm: 'left' }}
                width={{ xs: '100%', sm: '44%' }}
            >
                <Typography variant="h3" color="primary.main" fontWeight="600" >Helping Communities,</Typography>
                <Typography variant="h3" color="text.secondary" fontWeight="600" gutterBottom>
                    One Step at a Time
                </Typography>
                <Typography
                    variant="body1"
                    mt={3}
                    fontSize={{ xs: '1rem', sm: '1.4rem' }}
                // maxWidth="700px"
                >
                    Empowering communities with sustainable support and compassion-driven initiatives.
                </Typography>

                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={4}
                    mt={4}>

                    <ContainedButton>
                        Become a Volunteer
                    </ContainedButton>
                    <OutlinedButtonHero>
                        Donate Now
                    </OutlinedButtonHero>
                </Box>

            </Box>
        </Box>
    );
};

export default HomeHeroSection;
