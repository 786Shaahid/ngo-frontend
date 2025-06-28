import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  Container,
  Fade,
  TextField,
  MenuItem,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { eventsData, getEventsByCategory, getEventsByStatus } from '../../data/eventsData';
import EventCard from './EventCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Headline, BodyText1 } from '../../styles/typographyStyle';
import { ContainedButton } from '../../styles/styleButton';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  const tabs = [
    { label: 'All Events', value: 'all' },
    { label: 'Upcoming', value: 'Upcoming' },
    { label: 'Ongoing', value: 'Ongoing' },
    { label: 'Completed', value: 'Completed' }
  ];

  const categories = [...new Set(eventsData.map(event => event.category))];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filteredEvents = activeTab === 0 
        ? eventsData 
        : getEventsByStatus(tabs[activeTab].value);
      
      if (categoryFilter) {
        filteredEvents = filteredEvents.filter(event => event.category === categoryFilter);
      }
      
      setEvents(filteredEvents);
      setLoading(false);
    }, 600);
  }, [activeTab, categoryFilter]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRegister = (event) => {
    console.log('Register for:', event.title);
    // Navigate to registration form
  };

  const handleViewDetails = (event) => {
    console.log('View details for:', event.title);
    // Navigate to event details page
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
              Upcoming Events
            </Headline>
            <BodyText1>
              Join us in making a difference through community engagement
            </BodyText1>
          </motion.div>
        </Box>

        {/* Filters */}
        <Box mb={4}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
            {/* Tabs */}
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

            {/* Category Filter */}
            <TextField
              select
              label="Category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              sx={{ minWidth: 200 }}
              size="small"
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Box>

        {/* Results Count */}
        <Box mb={3}>
          <Typography variant="body1" color="text.secondary">
            {loading ? 'Loading...' : `${events.length} ${events.length === 1 ? 'event' : 'events'} found`}
          </Typography>
        </Box>

        {/* Events Grid */}
        {loading ? (
          <LoadingSpinner message="Loading events..." />
        ) : (
          <Fade in={!loading} timeout={600}>
            <Grid container spacing={4}>
              {events.map((event, index) => (
                <Grid item xs={12} sm={6} lg={4} key={event.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <EventCard
                      event={event}
                      onRegister={handleRegister}
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Fade>
        )}

        {/* No Results */}
        {!loading && events.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No events found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your filters or check back later for new events.
            </Typography>
          </Box>
        )}

        {/* CTA Section */}
        <Box textAlign="center" mt={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h5" fontWeight="600" gutterBottom>
              Want to organize an event?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Partner with us to create meaningful community events
            </Typography>
            <ContainedButton size="large">
              Propose an Event
            </ContainedButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default EventsSection;