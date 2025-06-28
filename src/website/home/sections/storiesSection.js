import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    useTheme,
    Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { BodyText1, BodyText2, CardTitle, Headline } from '../../../styles/typographyStyle';
import { ArrowForward } from '@mui/icons-material';
import { ContainedButton, OutlinedButton } from '../../../styles/styleButton';

// Placeholder images (replace with real paths)
// import story1 from '../../../assets/images/story1.jpg';
// import story2 from '../../../assets/images/story2.jpg';
// import story3 from '../../../assets/images/story3.jpg';
// import story4 from '../../../assets/images/story4.jpg';
// import story5 from '../../../assets/images/story5.jpg';
// import story6 from '../../../assets/images/story6.jpg';

const MotionCard = motion(Card);

const stories = [
    {
        title: 'From Illness to Hope: Rani’s Journey',
        excerpt: 'Rani received vital treatment through our program and is now thriving.',
        image: "https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqMSvVaXQxISjdvfNizw6F9ZkaCBMy42Yk6agRcJUE8=",
    },
    {
        title: 'Volunteer Spotlight: Meet Ankit',
        excerpt: 'Ankit shares how fieldwork transformed his perspective.',
        image: "https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqMSvVaXQxISjdvfNizw6F9ZkaCBMy42Yk6agRcJUE8=",
    },
    {
        title: '200+ Families Supported in 2024',
        excerpt: 'Your support helped us reach more homes with care packs.',
        image: "https://media.istockphoto.com/id/2167876180/photo/happy-gypsy-indian-girl-using-laptop-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CrimN-yv4w6_xDp2a5mW9Qhrvc9oFCMSl84IuTZucmw=",
    },

];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const StoriesSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>

            <Box mb={4}>
                <Headline gutterBottom>
                    Latest News & Success Stories
                </Headline>
                <BodyText1>
                    Stories of hope, progress, and the power of community.
                </BodyText1>
            </Box>
            <Grid container spacing={2} >
                {/* <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    itemClass="carousel-item-padding-20-px"
                    dotListClass="custom-dot-list-style"
                > */}
                {stories.map((story, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MotionCard

                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            elevation={3}
                            sx={{
                                mx: 2,
                                borderRadius: 2,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <Card
                                elevation={3}
                                sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={story.image}
                                    alt={story.title}
                                />
                                <CardContent sx={{ flexGrow: 1, bgcolor: theme.palette.primary.contrastText }}>
                                    <CardTitle sx={{ color: 'primary.main' }} >
                                        {story.title}
                                    </CardTitle>
                                    <BodyText2 gutterBottom>
                                        {story.excerpt}
                                    </BodyText2>
                                    <OutlinedButton
                                        endIcon={<ArrowForward />}
                                        sx={{ fontWeight: '500' }}
                                    >
                                        Read More
                                    </OutlinedButton>
                                </CardContent>
                            </Card>
                        </MotionCard>
                    </Grid>
                ))}
                {/* </Carousel> */}
            </Grid>


            {/* CTA */}
            <Box textAlign="center" mt={6} >
                <ContainedButton sx={{ fontWeight: '500' }}  >
                    See All Stories
                </ContainedButton>
            </Box>
        </Box >
    );
};

export default StoriesSection;
