import { Grid } from '@mui/material';

import { useEffect, useState } from 'react';

import HomeHeroSection from './sections/homeHeroSection';
import WhytheHelpSansthaSection from './sections/whythehelpsanstha';
import OurMissionByNumber from './sections/ourMissionByNum';
import ProgramsSection from './sections/programeSection';
import GetInvolvedSection from './sections/getInvolvedSection';
import StoriesSection from './sections/storiesSection';
import YouTubeSection from './sections/youtubeVedioSection';

const heroData = [
    {
        text1: 'Hope is the Anchor of the Soul',
        text2: 'Together We Rise, Together We Shine',
        text3: 'Every small act of kindness can create ripples of positive change. Believe in the power of hope, and inspire others to do the same.',
        url: 'https://media.istockphoto.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=is&k=20&c=T0PgvxG0-V8Ige2vhiciMqC-NV3hOywUCakeRS8xMbg=',
    },
    {
        text1: 'A Helping Hand Can Change a Life',
        text2: 'Kindness Knows No Boundaries',
        text3: 'Be the reason someone smiles today. A simple act of compassion can transform lives and inspire a wave of generosity.',
        url: 'https://images.unsplash.com/photo-1582307811683-75b18a39ab71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvb3J8ZW58MHx8MHx8fDA%3D',
    },
    {
        text1: 'Empathy is the Greatest Gift',
        text2: 'Every Act of Kindness Matters',
        text3: 'The world becomes brighter when we share love and empathy. Let compassion guide your actions and spread positivity everywhere.',
        url: 'https://images.unsplash.com/photo-1609758008426-1635fe5210b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBvb3J8ZW58MHx8MHx8fDA%3D',
    },
];

const cardData = [
    {
        img: "https://images.unsplash.com/photo-1618043299395-fd8bae4709b2?w=500&auto=format&fit=crop&q=60",
        header: "Help the community",
        text: "Helping communities build a better future through education and support."
    },
    {
        img: "https://images.unsplash.com/photo-1582307811683-75b18a39ab71?w=500&auto=format&fit=crop&q=60",
        header: "Raise found from people",
        text: "Bringing people together for a stronger, more united world."
    },
    {
        img: "https://images.unsplash.com/photo-1609758008426-1635fe5210b2?w=500&auto=format&fit=crop&q=60",
        header: "Care for helpless",
        text: "Inspiring action and making positive changes in communities worldwide."
    }
];
const HomeSection = () => {

    const [openModal, setOpenModal] = useState(false);
    const [playStatus, setPlayStatus] = useState(false);
    const [heroCount, setHeroCount] = useState(0);

    const openModalHandler = () => setOpenModal(true);

    // Close the modal
    const closeModalHandler = () => setOpenModal(false);
    useEffect(() => {
        setInterval(() => {
            setHeroCount((prev) => (prev + 1) % heroData.length)
        }, 3000);
    }, [])

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <Grid container spacing={0.2} bgcolor={"primary.contrastText"}>
            <Grid item xs={12}>
                {/* <PageSection> */}
                <HomeHeroSection />
                {/* </PageSection> */}
            </Grid>
            <Grid item xs={12} >
                <WhytheHelpSansthaSection />

            </Grid>
            <Grid item xs={12} >
                <OurMissionByNumber />
            </Grid>
            <Grid item xs={12} >
                <ProgramsSection />

            </Grid>
            <Grid item xs={12} >
                <GetInvolvedSection />
            </Grid>
            <Grid item xs={12} >
                <StoriesSection />
            </Grid>
            <Grid item xs={12} >
                <YouTubeSection />
            </Grid>

            {/* <Volenteer open={openModal} onClose={closeModalHandler} /> */}
        </Grid >
    )
}

export default HomeSection;