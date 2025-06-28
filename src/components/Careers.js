import { Divider, Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import React from 'react'
import { PageSection, StrokeTextWithBgImg, TextFieldSmall } from '../styles/typographyStyle';
import { useSpring, animated } from 'react-spring';

// const SlidingWord = () => {
//     const [props, set] = useSpring(() => ({
//         y: 0,
//         color: "black",
//     }));

//     const [secondProps, setSecond] = useSpring(() => ({
//         y: 30, // Start below the original text
//         color: "transparent", // Start with no color
//     }));

//     return (
//         <div
//             style={{
//                 display: "inline-block",
//                 overflow: "hidden", // Hide content as it moves above the container
//                 position: "relative",
//             }}
//         >
//             {/* Original text */}
//             <animated.span
//                 style={{
//                     display: "inline-block",
//                     color: props.color,
//                     transform: props.y.to((y) => `translateY(${y}px)`),
//                     position: "absolute",
//                     top: 0,
//                 }}
//                 onMouseEnter={() => {
//                     set({ y: -30, color: "transparent" }); // Slide up and disappear
//                     setSecond({ y: 0, color: "yellow" }); // Slide the new text into place
//                 }}
//                 onMouseLeave={() => {
//                     set({ y: 0, color: "black" }); // Return to original position
//                     setSecond({ y: 30, color: "transparent" }); // Move the new text back
//                 }}
//             >
//                 Hover Me
//             </animated.span>

//             {/* New text that appears in place */}
//             <animated.span
//                 style={{
//                     display: "inline-block",
//                     color: secondProps.color,
//                     transform: secondProps.y.to((y) => `translateY(${y}px)`),
//                     position: "absolute",
//                     top: 0,
//                 }}
//             >
//                 New Color
//             </animated.span>
//         </div>
//     );
// };

const JobCard = () => {
    return (
        <Card sx={{ width: 'fullWidth', bgcolor: '#eef2f2' }} >
            <CardContent>
                <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>

                    Software Engineer - Frontend
                </Typography>
                <Divider style={{ marginBottom: '0.5rem' }} />

                <Typography variant="body2" color="primary" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Location:</strong> Remote / On-site
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Vaccancy:</strong> 6
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Last Date For Apply:</strong> 6
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Requirements:</strong> Remote / On-site<br />
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Experience:</strong> 2+ years in React.js or similar frameworks
                </Typography>
                <Typography variant="body2" color="" fontWeight={400} fontSize={'16px'} gutterBottom>
                    <strong>Description:</strong> We're looking for a passionate software engineer to join our frontend development team. You'll work on exciting projects, build scalable components, and collaborate with cross-functional teams.
                </Typography>

                {/* Job Requirements */}
                <Typography variant="body2" color='primary' sx={{ mb: 2 }}>
                    <strong>Requirements:</strong>
                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                        <li>Proficiency in React.js, JavaScript, and TypeScript.</li>
                        <li>Experience with CSS frameworks (e.g., Material-UI, Bootstrap).</li>
                        <li>Familiarity with RESTful APIs and state management libraries.</li>
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            textTransform: 'none',
                        }}
                        onClick={() => alert('Apply Now clicked!')}
                    >
                        Apply Now
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
const Careers = () => {
    return (
        <Grid container spacing={0.2}>
            <Grid item xs={12}>
                <PageSection bgColor={'#fff'}>
                    <StrokeTextWithBgImg
                        url="https://images.unsplash.com/photo-1480280649870-cf724364459e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        text="Empower Community"
                    />
                </PageSection>
            </Grid>
            <Grid item xs={12} >
                <PageSection bgColor={'rgba(255, 255, 255, 0.9)'}>
                    <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom m={2}>
                        Empowering Communities Together—Join Us                    </Typography>
                    <Divider style={{ marginBottom: '1rem' }} />
                    <Grid container padding={2} spacing={3}>
                        <Grid item xs={12} sm={4} >
                            <JobCard />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <JobCard />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <JobCard />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <JobCard />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <JobCard />
                        </Grid>
                    </Grid>
                </PageSection>
            </Grid>
            <Grid item></Grid>

            {/* <Volenteer open={openModal} onClose={closeModalHandler} /> */}
        </Grid >
    )
}

export default Careers;