import { Box, Grid } from '@mui/material';
import { BodyText1, Headline, Highlight } from '../../../styles/typographyStyle';
import { ContainedButton } from '../../../styles/styleButton';
// import heroImage from '../../../assets/images/hero.jpg'; // ✅ Use your real image path
import { ArrowForward } from '@mui/icons-material';

const WhytheHelpSansthaSection = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>
            <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                justifyContent="space-between"
            >
                {/* Left: Text Content */}
                <Grid item xs={12} md={6} spacing={4}>
                    <Headline gutterBottom mb={3}>
                        Why The Help Sansthan?
                    </Headline>

                    <BodyText1 gutterBottom >
                        At <Highlight>The Help Sansthan</Highlight>, we believe that access to quality <Highlight>healthcare</Highlight> and <Highlight>education</Highlight> is the cornerstone
                        of a brighter, more equitable future. Since <Highlight>2020</Highlight>, our passionate team has been
                        working hand-in-hand with <Highlight>underserved communities</Highlight> to provide
                        vital medical care and open doors to educational opportunities.
                    </BodyText1>
                    <BodyText1 gutterBottom>
                        To date, we've supported over <Highlight>200 families</Highlight> with essential
                        <Highlight>healthcare services</Highlight> and empowered <Highlight>300 children</Highlight>
                        to continue their <Highlight>education</Highlight> and pursue their dreams.
                    </BodyText1>
                    <BodyText1 gutterBottom>
                        Together, we're <Highlight>building healthier lives</Highlight> and
                        <Highlight>stronger futures</Highlight>—one step at a time.
                    </BodyText1>
                    <br />
                    <ContainedButton endIcon={<ArrowForward />}
                        sx={{ fontWeight: '500' }}
                    >
                        Learn More
                    </ContainedButton>
                </Grid>

                {/* Right: Image */}
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <Box
                        component="img"
                        src={'https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384='}
                        alt="Helping community"
                        sx={{
                            width: '100%',
                            maxWidth: 480,
                            height: 'auto',
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
            </Grid>

        </Box >
    );
};

export default WhytheHelpSansthaSection;
