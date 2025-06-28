import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Donor',
        comment: 'This NGO has changed the lives of so many children. I\'m proud to support their mission.',
        image: '/john-doe.jpg', // Add image path
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'Volunteer',
        comment: 'Volunteering with this organization has been a life-changing experience. Highly recommend!',
        image: '/jane-smith.jpg', // Add image path
    },
    {
        id: 3,
        name: 'Alice Johnson',
        role: 'Beneficiary',
        comment: 'Thanks to this NGO, I now have access to quality education and a brighter future.',
        image: '/alice-johnson.jpg', // Add image path
    },
    {
        id: 3,
        name: 'Alice Johnson',
        role: 'Beneficiary',
        comment: 'Thanks to this NGO, I now have access to quality education and a brighter future.',
        image: '/alice-johnson.jpg', // Add image path
    },
    {
        id: 3,
        name: 'Alice Johnson',
        role: 'Beneficiary',
        comment: 'Thanks to this NGO, I now have access to quality education and a brighter future.',
        image: '/alice-johnson.jpg', // Add image path
    },
    {
        id: 3,
        name: 'Alice Johnson',
        role: 'Beneficiary',
        comment: 'Thanks to this NGO, I now have access to quality education and a brighter future.',
        image: '/alice-johnson.jpg', // Add image path
    },
];


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

const scrollVariants = {
    animate: {
        x: ["100%", "-100%"], // Moves from right to left
        transition: {
            ease: "linear",
            duration: 50, // Speed of scroll (adjust as needed)
            repeat: Infinity, // Infinite loop
        },
    },
};

const TestimonialsSection = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container backgroundColor="red">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                    What People Say
                </Typography>
                <Box sx={{ overflow: "hidden", width: "100%", display: "flex", position: "relative" }}>
                    <motion.div
                        style={{ display: "flex", gap: "20px", whiteSpace: "nowrap" }}
                        variants={scrollVariants}
                        animate="animate"
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => ( // Duplicate for seamless effect
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 1 }}
                                variants={scrollVariants}
                            >
                                <Box
                                    sx={{
                                        minWidth: "300px", // Ensures consistent width
                                        backgroundColor: "white",
                                        borderRadius: "16px",
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                        p: 3,
                                        textAlign: "center",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        sx={{ width: 80, height: 80, mb: 2 }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {testimonial.role}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                                        "{testimonial.comment}"
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;