
import { Grid, Stack } from '@mui/material';
import React from 'react'
import { Header, PageSection, SmallCard, StrokeTextWithBgImg, TextImageAlter } from '../styles/typographyStyle';
import { Favorite, Home, Settings } from '@mui/icons-material';

const OurValue = () => {
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
    return (
        <Grid container spacing={0.2}>
            <Grid item xs={12} >
                <PageSection bgColor={'#7f7f9f'}>
                    <StrokeTextWithBgImg url={"https://t4.ftcdn.net/jpg/06/35/44/45/240_F_635444578_CDFldlAX7gZprsu1ZCIs5vSlglSEP5wc.jpg"} text={"Our Value"} />
                    <Stack direction="row" spacing={5} mt={3} justifyContent={'center'}>
                        {items.map((item, index) => (
                            <SmallCard key={index} item={item} />
                        ))}
                    </Stack>

                </PageSection>
            </Grid>
            <Grid item xs={12} >
                <PageSection bgColor={'#fff'}>
                    <Grid container padding={2}>
                        <Grid item xs={12} textAlign={'center'}>
                            <Header text={"Our Values"} />
                        </Grid>
                        <TextImageAlter sections={sections} />
                    </Grid>

                </PageSection >
            </Grid >
            <Grid item xs={12} ><PageSection bgColor={'white'}>
                <Grid container padding={2}>
                    <Grid item xs={12} textAlign={'center'}>
                        <Header text={"Our Mission"} />
                    </Grid>
                    <TextImageAlter sections={sections} />
                </Grid>
            </PageSection></Grid>
            <Grid item xs={12} sm={6}><PageSection bgColor={''}></PageSection></Grid>
        </Grid >
    )
}

export default OurValue;