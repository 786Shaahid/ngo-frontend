import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Button,
  Stack,
  Chip,
  Paper,
  IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Favorite,
  People,
  School,
  EmojiEvents,
  Visibility,
  Psychology,
  LinkedIn,
  Twitter,
  Email
} from '@mui/icons-material';
import LoadingSpinner from './common/LoadingSpinner';
import { Headline, BodyText1, BodyText2 } from '../styles/typographyStyle';
import { ContainedButton, OutlinedButton } from '../styles/styleButton';
import { 
  pageVariants, 
  sectionVariants, 
  staggerContainer, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  scaleIn 
} from './common/AnimationVariants';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Core values data
  const coreValues = [
    {
      icon: <Favorite fontSize="large" />,
      title: "Compassion",
      description: "We lead with empathy and understanding in every interaction."
    },
    {
      icon: <People fontSize="large" />,
      title: "Community",
      description: "We believe in the power of collective action and shared responsibility."
    },
    {
      icon: <School fontSize="large" />,
      title: "Education",
      description: "Knowledge is the foundation for sustainable change and growth."
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services."
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "priya@thehelpsansthan.org" }
    },
    {
      name: "Rajesh Kumar",
      role: "Program Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "rajesh@thehelpsansthan.org" }
    },
    {
      name: "Anita Patel",
      role: "Community Outreach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "anita@thehelpsansthan.org" }
    },
    {
      name: "Vikram Singh",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "vikram@thehelpsansthan.org" }
    }
  ];

  if (loading) {
    return <LoadingSpinner message="Loading about us..." fullScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="about-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Box sx={{ bgcolor: 'primary.contrastText' }}>
          {/* Hero Section with Mission Statement */}
          <Box
            sx={{
              position: 'relative',
              height: { xs: '60vh', md: '70vh' },
              backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(2, 19, 62, 0.7)',
                zIndex: 1
              }
            }}
          >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <Typography
                  variant="h2"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                  sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
                >
                  Empowering Communities Through Compassionate Action
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  textAlign="center"
                  sx={{ 
                    maxWidth: '800px', 
                    mx: 'auto',
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    opacity: 0.9
                  }}
                >
                  We believe every person deserves access to healthcare, education, and opportunities to thrive.
                </Typography>
              </motion.div>
            </Container>
          </Box>

          {/* Vision Statement */}
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box textAlign="center" mb={8}>
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="600"
                  textTransform="uppercase"
                  letterSpacing={2}
                  gutterBottom
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color="text.secondary"
                  sx={{ maxWidth: '700px', mx: 'auto' }}
                >
                  A world where every community has the resources and support needed to build a sustainable, healthy future.
                </Typography>
              </Box>
            </motion.div>

            {/* Organization Overview */}
            <Grid container spacing={6} alignItems="center" mb={10}>
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" fontWeight="600" gutterBottom color="primary.main">
                    Who We Are
                  </Typography>
                  <BodyText1 gutterBottom>
                    The Help Sansthan is a nonprofit organization dedicated to transforming lives through 
                    healthcare access and educational opportunities. Since 2020, we've been working directly 
                    with underserved communities across India to address critical needs and build lasting change.
                  </BodyText1>
                  <BodyText1 gutterBottom>
                    We serve rural families, children without access to quality education, and communities 
                    lacking basic healthcare services. Our approach combines immediate relief with long-term 
                    capacity building, ensuring sustainable impact.
                  </BodyText1>
                  <BodyText1>
                    What sets us apart is our community-centered approach—we don't just provide services, 
                    we partner with communities to identify their needs and build solutions together.
                  </BodyText1>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop"
                    alt="Our team in action"
                    sx={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: 3,
                      boxShadow: 3
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>

            {/* Highlighted Quote */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  mb: 10,
                  bgcolor: 'grey.50',
                  borderLeft: '6px solid',
                  borderColor: 'primary.main',
                  position: 'relative'
                }}
              >
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  color="text.secondary"
                  textAlign="center"
                  gutterBottom
                  sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
                >
                  "Every small act of kindness creates ripples of hope. When we work together, 
                  those ripples become waves of transformation that can change entire communities."
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" mt={3}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight="600">
                      Dr. Priya Sharma
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Founder & Director
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight="600" gutterBottom color="primary.main">
                  Our Core Values
                </Typography>
                <BodyText1>
                  These principles guide everything we do and shape how we serve our communities.
                </BodyText1>
              </Box>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid container spacing={4} mb={10}>
                {coreValues.map((value, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        elevation={0}
                        sx={{
                          height: '100%',
                          textAlign: 'center',
                          p: 3,
                          border: '1px solid',
                          borderColor: 'grey.200',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: 3,
                            borderColor: 'primary.main'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            bgcolor: 'primary.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            color: 'primary.main'
                          }}
                        >
                          {value.icon}
                        </Box>
                        <Typography variant="h6" fontWeight="600" gutterBottom>
                          {value.title}
                        </Typography>
                        <BodyText2>
                          {value.description}
                        </BodyText2>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* Meet the Team */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight="600" gutterBottom color="primary.main">
                  Meet Our Team
                </Typography>
                <BodyText1>
                  Passionate individuals dedicated to creating positive change in communities.
                </BodyText1>
              </Box>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid container spacing={4} mb={8}>
                {teamMembers.map((member, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        elevation={0}
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          border: '1px solid',
                          borderColor: 'grey.200',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: 3
                          }
                        }}
                      >
                        <Avatar
                          src={member.image}
                          sx={{
                            width: 120,
                            height: 120,
                            mx: 'auto',
                            mb: 2,
                            border: '4px solid',
                            borderColor: 'primary.light'
                          }}
                        />
                        <Typography variant="h6" fontWeight="600" gutterBottom>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" color="primary" gutterBottom>
                          {member.role}
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                          <IconButton size="small" color="primary">
                            <LinkedIn fontSize="small" />
                          </IconButton>
                          <IconButton size="small" color="primary">
                            <Twitter fontSize="small" />
                          </IconButton>
                          <IconButton size="small" color="primary">
                            <Email fontSize="small" />
                          </IconButton>
                        </Stack>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  textAlign: 'center',
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 3
                }}
              >
                <Typography variant="h4" fontWeight="600" gutterBottom>
                  Ready to Make a Difference?
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                  Join our mission to transform communities through compassionate action.
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  justifyContent="center"
                  alignItems="center"
                >
                  <ContainedButton
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'grey.100'
                      }
                    }}
                  >
                    Learn More About Our Story
                  </ContainedButton>
                  <OutlinedButton
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'white',
                        color: 'primary.main'
                      }
                    }}
                  >
                    Contact Us
                  </OutlinedButton>
                  <ContainedButton
                    size="large"
                    sx={{
                      bgcolor: 'secondary.main',
                      '&:hover': {
                        bgcolor: 'secondary.dark'
                      }
                    }}
                  >
                    Join Our Mission
                  </ContainedButton>
                </Stack>
              </Paper>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;