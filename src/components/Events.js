import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react'
import { NumericTextField, PageSection, StrokeTextWithBgImg, StyledModalContent, StyleModal, StyleStackCenter, StyleStackEnd, TextFieldSmall } from '../styles/typographyStyle';
import { ArrowForward, Close } from '@mui/icons-material';

const Events = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const BookSeatModal = () => {

        // const [editedBuyer, setEditedBuyer] = useState(buyer);
        // const [errors, setErrors] = useState({});
        // const handleInputChange = (e) => {
        // };

        // const validateForm = () => {
        //     const errors = {};
        //     const contactRegex = /^\d{10}$/;
        //     if (!editedBuyer.name.trim()) {
        //         errors.name = 'Buyer Name is required';
        //     } else if (editedBuyer.name.trim().length < 3) {
        //         errors.name = 'Buyer Name must be at least 3 characters long';
        //     }
        //     if (editedBuyer.contact && !contactRegex.test(editedBuyer.contact)) {
        //         errors.contact = 'Contact must be a 10-digit number';
        //     }
        //     if (editedBuyer.balance === '') {
        //         errors.balance = 'Balance is required';
        //     }
        //     if (editedBuyer.gst && editedBuyer.gst?.length != 15) {
        //         errors.gst = 'GST should be 15 characters';
        //     }
        //     setErrors(errors);
        //     return Object.keys(errors).length === 0;
        // };

        // const handleFormSubmit = () => {
        //     if (validateForm()) {
        //         const changedData = {};
        //         Object.keys(editedBuyer).forEach((key) => {
        //             if (editedBuyer[key] !== buyer[key]) {
        //                 changedData[key] = editedBuyer[key];
        //             }
        //         });
        //         onSubmit(buyer._id, changedData);
        //     }
        // };

        return (
            <StyleModal open={openModal} onClose={handleCloseModal}>
                <StyledModalContent maxWidth={'40rem'} style={{ overflowY: 'auto', }}>
                    <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}>
                        <Close />
                    </IconButton>
                    <Typography textAlign={'center'} variant="h5" fontWeight={800} mb={5}>
                        { } Book Your Seat
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextFieldSmall
                                label="Name"
                                fullWidth
                                name="name"
                                // value={buyer.name}
                                // onChange={handleInputChange}
                                // error={!!errors.name}
                                // helperText={errors.name}
                                required
                            // inputProps={{
                            //     navindex: 1
                            // }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <NumericTextField
                                label="Email "
                                fullWidth
                                type="email"
                                name="email"
                                required

                            // onChange={}
                            // error={!!errors.contact}
                            // helperText={errors.contact}
                            />
                        </Grid>



                        <Grid item xs={12}>
                            <TextFieldSmall
                                label="Message"
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyleStackCenter>
                                <Button variant='contained' type="submit" onClick={() => { }}>
                                    Submit
                                </Button>
                            </StyleStackCenter>
                        </Grid>
                    </Grid>
                </StyledModalContent>
            </StyleModal>
        );
    };
    const events = [
        {
            id: 1,
            title: 'Title of the Risen Event',
            image:
                'https://media.istockphoto.com/id/1130434203/photo/rear-view-of-sitting-audience.webp?a=1&b=1&s=612x612&w=0&k=20&c=t89dKSzB0Sk-n6SuV4Imf5064BuEThsJKP5xuImDUlM=',
            address: '1015 California Ave, Los Angeles CA',
            date: '5 May, 2025',
            time: '7:00 pm — 8:00 pm',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non hendrerit. Nunc nec luctus tellus.',
        },
        {
            id: 2,
            title: 'Art Exhibition 2025',
            image:
                'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww',
            address: '55 Main St, New York, NY',
            date: '10 June, 2025',
            time: '6:00 pm — 9:00 pm',
            description:
                'Discover an extraordinary art collection and meet renowned artists during our annual exhibition event. Reserve your spot today!',
        },
        {
            id: 3,
            title: 'Tech Conference 2025',
            image:
                'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D',
            address: '123 Tech Ave, San Francisco CA',
            date: '25 July, 2025',
            time: '10:00 am — 4:00 pm',
            description:
                'Join us for a day of inspiring talks, networking, and discovering the latest innovations in technology. Seats are limited!',
        },
    ];
    return (
        <Grid container spacing={0.2}>
            <Grid item xs={12}>
                <PageSection bgColor={'#fff'}>
                    <StrokeTextWithBgImg
                        url="https://images.unsplash.com/photo-1480280649870-cf724364459e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        text="Upcoming Events"
                    />
                </PageSection>
            </Grid>
            <BookSeatModal />
            <Grid item xs={12} >
                <PageSection bgColor={'rgba(255, 255, 255, 0.9)'}>
                    <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom m={2}>
                        Upcoming Events
                    </Typography>
                    <Divider />
                    <Box sx={{ maxWidth: '1300px', margin: 'auto', padding: 4 }}>
                        {events.map((event) => (
                            <Grid
                                container
                                spacing={1}
                                key={event.id}
                                sx={{
                                    marginBottom: 2,
                                    padding: 2,
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    borderRadius: 2,
                                    bgcolor: '#fff',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add smooth transition
                                    '&:hover': {
                                        transform: 'scale(1.02)', // Slightly increase size
                                        boxShadow: '0 6px 12px rgba(0,0,0,0.8)', // Add a stronger shadow effect
                                    },
                                }}
                            >
                                {/* Image Section */}
                                <Grid item xs={12} md={5}>
                                    <CardMedia
                                        component="img"
                                        image={event.image}
                                        alt={event.title}
                                        sx={{
                                            borderRadius: 2,
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Grid>

                                {/* Text Section */}
                                <Grid item xs={12} md={6}>
                                    <Card sx={{ boxShadow: 0 }}>
                                        <CardContent>
                                            {/* Event Title */}
                                            <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom mb={1}>
                                                {event.title}
                                            </Typography>

                                            {/* Event Address & Time */}
                                            <Typography variant="body2" color="primary" fontWeight={600} fontSize={'16px'} gutterBottom mb={2}>
                                                {event.address} <br />
                                                {event.date} <br />
                                                {event.time}
                                            </Typography>

                                            {/* Description */}
                                            <Typography variant="body1" color="text.primary" paragraph>
                                                {event.description}
                                            </Typography>

                                            {/* CTA Button */}
                                            <Box display="flex" alignItems="center" mt={2}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    sx={{
                                                        textTransform: 'none',
                                                        fontWeight: 'bold',
                                                    }}
                                                    onClick={() => {
                                                        console.log(true);

                                                        setOpenModal(true)
                                                    }}
                                                >
                                                    Book Seat
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                </PageSection>
            </Grid>
            <Grid item></Grid>

            {/* <Volenteer open={openModal} onClose={closeModalHandler} /> */}
        </Grid >
    )
}

export default Events;