import { Box, Typography, Grid, CardContent, Card, useTheme } from '@mui/material';
import YouTubeEmbedComponent from '../components/youtubeVideoEmbed';
import { BodyText1, BodyText2, CardTitle, Headline } from '../../../styles/typographyStyle';


const videos = [
    {
        videoId: 'IhMUEnlIW8U',
        title: 'Hope in Every Step',
        subtext: 'Meet the children we’re educating',
    },
    {
        videoId: 'H8Lyj2D_cWo',
        title: 'A Volunteer’s Journey',
        subtext: 'Experience how fieldwork transforms lives',
    },
    {
        videoId: 'y6120QOlsfU',
        title: 'Nutrition Mission in Action',
        subtext: 'Over 10,000 meals distributed',
    },
];


const YouTubeSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ px: { xs: 2, md: 6 }, pb: 4 }}>
            {/* Section Heading */}
            <Box mb={4}>
                <Headline gutterBottom>
                    From the Ground Up
                </Headline>
                <BodyText1>
                    Hear Their Voices. Feel the Change.
                </BodyText1>
            </Box>

            {/* Video Grid */}
            <Grid container spacing={4}>
                {videos.map((video, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            elevation={3}
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <YouTubeEmbedComponent videoId={video.videoId} />

                            <CardContent sx={{ flexGrow: 1, bgcolor: theme.palette.primary.contrastText }}>
                                <CardTitle sx={{ color: 'primary.main' }} >
                                    {video.title}
                                </CardTitle>
                                <BodyText2>
                                    {video.subtext}
                                </BodyText2>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default YouTubeSection;
