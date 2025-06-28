import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Header, PageSection, SmallCard, StrokeTextWithBgImg, TextImageAlter } from "../styles/typographyStyle";
import { Favorite, Home, Settings } from "@mui/icons-material";
import { useState } from "react";
import BackgroundImage from "./BackgroundImage";

export const OurMission = () => {
    const items = [
        { label: "Home", icon: <Home sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
        { label: "Favorites", icon: <Favorite sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
        { label: "Settings", icon: <Settings sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
    ];

    const sections = [
        {
            text: "At [NGO Name], we envision a world where every child has access to quality education and healthcare. Our mission is to break the cycle of poverty by empowering communities with the tools and resources they need to thrive.",
            achievements: [
                "Delivered clean water to over 50 rural villages.",
                "Ensured access to basic education for 1,000+ children.",
                "Distributed 10,000 meals annually through global partnerships."
            ],
            imageUrl: "https://as1.ftcdn.net/v2/jpg/08/33/07/16/1000_F_833071612_ZqqFxm1ziwXrKGKnT07XFWryiZQ1VHr6.jpg",
        },
        {
            text: "At [NGO Name], we are committed to empowering communities through various initiatives that focus on sustainability and environmental conservation. We believe in creating lasting change for a brighter future.",
            achievements: [
                "Launched a tree plantation program with over 100,000 saplings planted.",
                "Reduced carbon emissions by 30% in our operational areas.",
                "Created 500+ jobs in eco-friendly industries."
            ],
            imageUrl: "https://as1.ftcdn.net/v2/jpg/08/33/07/16/1000_F_833071612_ZqqFxm1ziwXrKGKnT07XFWryiZQ1VHr6.jpg",
        },
        // Add more sections as needed
    ];
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (<>
        <Grid container spacing={0.2}>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                <PageSection bgColor={'#eef2f2'}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container px={5}>
                            {/* Left Side: Image with Overlay Content */}
                            <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{
                                    position: "relative",
                                    height: { xs: "400px", md: "90vh" },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image="https://t4.ftcdn.net/jpg/06/35/44/45/240_F_635444578_CDFldlAX7gZprsu1ZCIs5vSlglSEP5wc.jpg"
                                    alt="Volunteer Image"
                                    sx={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "rgba(0, 0, 0, 0.4)",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "start",
                                        color: "#FFF",
                                        textAlign: "left",
                                        px: 4, // Default horizontal padding
                                        pl: { xs: 4, md: 6 }, // Adjust padding-left for more distance on larger screens
                                    }}
                                >
                                    <Typography variant="h4" fontWeight="bold">
                                        Become A Proud Volunteer Now
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            px: 4,
                                            py: 1,
                                        }}
                                    >
                                        Donate Now
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Right Side: Tabbed Content */}
                            <Grid item xs={12} md={6} sx={{ p: 4 }}>
                                <Typography variant="h5" color="text.secondary" fontWeight="bold" gutterBottom>
                                    OUR MISSION
                                </Typography>
                                <Typography variant="h4" fontWeight="bold" gutterBottom mt={4} mb={5}>
                                    We're Building Strong Reputation
                                </Typography>

                                {/* Tabs */}
                                <Tabs
                                    value={tabValue}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    aria-label="Our Values Tabs"
                                    textColor="text.primary"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: '#0cdb0c', // Green color for underline
                                            height: '3px', // Thickness of the underline
                                        },
                                    }}
                                    sx={{
                                        mb: 2,
                                        '& .MuiTabs-flexContainer': {
                                            borderBottom: '3px solid #e0e0e0', // Add a subtle bottom border for the full container
                                        },
                                        '& .MuiTab-root': {
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: 'text.primary',
                                            fontFamily: 'Arial, sans-serif',

                                        },
                                        '& .Mui-selected': {
                                            color: 'secondary.main', // Green color for selected text
                                            fontWeight: '700',
                                            '&::after': {
                                                content: '""',
                                                display: 'block',
                                                width: '100%',
                                            },
                                        },
                                    }}
                                >
                                    <Tab label="Our Mission" />
                                    <Tab label="Our Vision" />
                                    <Tab label="Our Goal" />
                                </Tabs>


                                {/* Tab Content */}
                                {/* <Paper sx={{ padding: 2, boxShadow: 1 }}> */}
                                {tabValue === 0 && (
                                    <Typography variant="body1">
                                        Our Mission is to empower individuals and communities through volunteering, creating meaningful change
                                        in the world.
                                    </Typography>
                                )}
                                {tabValue === 1 && (
                                    <Typography variant="body1">
                                        Our Vision is to create a global network of volunteers committed to driving innovation, sustainability,
                                        and compassion.
                                    </Typography>
                                )}
                                {tabValue === 2 && (
                                    <Typography variant="body1">
                                        Our Goal is to inspire and engage millions of people to contribute their time and skills to causes that
                                        matter.
                                    </Typography>
                                )}
                                {/* </Paper> */}
                            </Grid>
                        </Grid>
                    </Box>
                </PageSection>
            </Grid>
            <Grid item xs={12} sm={6}>
                {/* <PageSection bgColor={'#fff'}> */}
                {/* <Grid container padding={2}>
                        <Grid item xs={12} textAlign={'center'}>
                            <Header text={"Our Mission"} />
                        </Grid>
                        <TextImageAlter sections={sections} />
                    </Grid> */}

                {/* </PageSection > */}
            </Grid >
            <Grid item xs={12} ><PageSection bgColor={'white'}>
                <Grid container padding={2}>
                    <Grid item xs={12} textAlign={'center'}>
                        <Header text={"Our Values"} />
                    </Grid>
                    <TextImageAlter sections={sections} />
                </Grid>
            </PageSection></Grid>
            <Grid item xs={12} sm={12}>
                <PageSection bgColor={'#eef2f2'}>
                    <Grid container spacing={3} px={5} mb={5}>
                        <Grid item xs={12} textAlign={'center'}>
                            <Header text={"Latest Project"} />
                            <Typography >we are committed to empowering communities through various initiatives that focus on sustainability</Typography>
                        </Grid>
                        <Grid item xs={4} textAlign={'start'} >
                            <Card
                                sx={{
                                    width: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adding transition for transform and box-shadow
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Slightly increase the size on hover
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                                    },
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vcnxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color='text.secondary' fontWeight={'bold'}>
                                            Lizard
                                        </Typography>
                                        <Typography variant="body1" color="primary.main" mb={2} >
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                        <Button variant="contained" size="small" >Learn More</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4} textAlign={'start'} >
                            <Card
                                sx={{
                                    width: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adding transition for transform and box-shadow
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Slightly increase the size on hover
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                                    },
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vcnxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color='text.secondary' fontWeight={'bold'}>
                                            Lizard
                                        </Typography>
                                        <Typography variant="body1" color="primary.main" mb={2}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                        <Button variant="contained" size="small">Learn More</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4} textAlign={'start'} >
                            <Card
                                sx={{
                                    width: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adding transition for transform and box-shadow
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Slightly increase the size on hover
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow on hover
                                    },
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vcnxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color='text.secondary' fontWeight={'bold'}>
                                            Lizard
                                        </Typography>
                                        <Typography variant="body1" color="primary.main" mb={2}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                        <Button variant="contained" size="small">Learn More</Button>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </PageSection></Grid>
        </Grid >
    </>)
};

