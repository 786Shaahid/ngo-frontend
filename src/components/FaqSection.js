import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header, } from "../styles/typographyStyle";
import { motion } from 'framer-motion';

const FaqSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqData = [
        {
            question: "What is the mission of this NGO?",
            answer: "Our mission is to empower communities through education, healthcare, and sustainable development.",
        },
        {
            question: "How can I donate?",
            answer: "You can donate through our website, bank transfer, or by visiting our office.",
        },
        {
            question: "Are donations tax-deductible?",
            answer: "Yes, all donations are tax-deductible under Section 80G of the Income Tax Act.",
        },
        {
            question: "How can I volunteer?",
            answer: "You can apply to volunteer through our website or contact us directly for more information.",
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
    return (
        <Grid container padding={{ xs: 1, sm: 2, lg: 10 }}>
            <Container maxWidth="md">
                <Grid item xs={12} textAlign={'center'} >
                    <Header text={"Frequently Asked Questions"} />
                </Grid>
                <Grid item xs={12} mt={2} >
                    {faqData.map((faq, index) => (
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={cardVariants}
                        >
                            <Accordion
                                key={index}
                                sx={{ backgroundColor: '#eef2f2' }}  // Correct way to set background color in MUI
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" sx={{ fontFamily: 'Arial', fontWeight: 600, color: '#333' }}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography >{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))}
                </Grid>

            </Container>

        </Grid>


    );
};

export default FaqSection;