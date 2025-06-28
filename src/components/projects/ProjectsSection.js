import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
  Container,
  Fade
} from '@mui/material';
import { motion } from 'framer-motion';
import { projectsData, getProjectsByStatus } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Headline, BodyText1 } from '../../styles/typographyStyle';
import { ContainedButton } from '../../styles/styleButton';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const tabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Active', value: 'Active' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Planning', value: 'Planning' }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filteredProjects = activeTab === 0 
        ? projectsData 
        : getProjectsByStatus(tabs[activeTab].value);
      setProjects(filteredProjects);
      setLoading(false);
    }, 500);
  }, [activeTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLearnMore = (project) => {
    console.log('Learn more about:', project.title);
    // Navigate to project details page
  };

  const handleDonate = (project) => {
    console.log('Donate to:', project.title);
    // Navigate to donation page
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Headline gutterBottom>
              Our Projects
            </Headline>
            <BodyText1>
              Making a lasting impact through targeted initiatives
            </BodyText1>
          </motion.div>
        </Box>

        {/* Tabs */}
        <Box display="flex" justifyContent="center" mb={4}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 120,
              },
              '& .Mui-selected': {
                color: 'primary.main',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        {loading ? (
          <LoadingSpinner message="Loading projects..." />
        ) : (
          <Fade in={!loading} timeout={600}>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} lg={4} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onLearnMore={handleLearnMore}
                      onDonate={handleDonate}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Fade>
        )}

        {/* CTA Section */}
        <Box textAlign="center" mt={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h5" fontWeight="600" gutterBottom>
              Want to make a difference?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Join us in creating positive change in communities across India
            </Typography>
            <ContainedButton size="large">
              Start Your Own Project
            </ContainedButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;