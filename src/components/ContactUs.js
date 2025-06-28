import { Email, Facebook, Instagram, LocationOn, Phone, YouTube } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Header, PageSection, StrokeTextWithBgImg, TextFieldSmall, TextImageAlter } from "../styles/typographyStyle";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './common/LoadingSpinner';
import { pageVariants, sectionVariants, fadeInUp } from './common/AnimationVariants';

export const Contact = () => {
  const [loading, setLoading] = useState(true);

  const contactInfo = [
    { icon: <Email sx={{ fontSize: 40 }} />, label: "contact@ngoexample.org" },
    { icon: <Phone sx={{ fontSize: 40 }} />, label: "+123 456 7890" },
    { icon: <LocationOn sx={{ fontSize: 40 }} />, label: "123 Community Street, City, Country" },
  ];

  const socialMedia = [
    { icon: <Facebook sx={{ fontSize: 40, color: '#4267B2' }} />, label: "Facebook" },
    { icon: <YouTube sx={{ fontSize: 40, color: '#FF0000' }} />, label: "YouTube" },
    { icon: <Instagram sx={{ fontSize: 40, color: '#C13584' }} />, label: "Instagram" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading contact information..." fullScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contact-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Grid container spacing={0.2}>
          {/* Contact Section */}
          <Grid item xs={12}>
            <PageSection bgColor={'#eef2f2'}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StrokeTextWithBgImg
                  url="https://images.unsplash.com/photo-1586449480584-34302e933441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  text="Contact Us"
                />
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Stack direction="row" spacing={5} mt={3} justifyContent={'center'}>
                    {contactInfo.map((info, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Box textAlign={'center'}>
                          <IconButton>
                            {info.icon}
                          </IconButton>
                          <Typography variant="h6">{info.label}</Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              </motion.div>
            </PageSection>
          </Grid>

          <Grid item xs={12}>
            <PageSection bgColor={'#fff'}>
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </PageSection>
          </Grid>
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
};