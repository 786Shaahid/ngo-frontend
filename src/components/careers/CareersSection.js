import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  Container,
  Fade,
  Stack
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FilterList } from '@mui/icons-material';
import { careersData, getJobsByDepartment, getJobsByType } from '../../data/careersData';
import JobCard from './JobCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { Headline, BodyText1 } from '../../styles/typographyStyle';
import { pageVariants, sectionVariants, staggerContainer, fadeInUp } from '../common/AnimationVariants';

const CareersSection = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const departments = [...new Set(careersData.map(job => job.department))];
  const jobTypes = [...new Set(careersData.map(job => job.type))];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setJobs(careersData);
      setFilteredJobs(careersData);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Department filter
    if (departmentFilter) {
      filtered = filtered.filter(job => job.department === departmentFilter);
    }

    // Type filter
    if (typeFilter) {
      filtered = filtered.filter(job => job.type === typeFilter);
    }

    setFilteredJobs(filtered);
  }, [jobs, searchTerm, departmentFilter, typeFilter]);

  const handleApply = (job) => {
    console.log('Apply for:', job.title);
    // Navigate to application form
  };

  const handleViewDetails = (job) => {
    console.log('View details for:', job.title);
    // Navigate to job details page
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="careers-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
          <Container maxWidth="xl">
            {/* Section Header */}
            <Box textAlign="center" mb={6}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Headline gutterBottom>
                  Join Our Team
                </Headline>
                <BodyText1>
                  Be part of the change you want to see in the world
                </BodyText1>
              </motion.div>
            </Box>

            {/* Filters */}
            <Box mb={4}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      placeholder="Search jobs by title, description, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      select
                      label="Department"
                      value={departmentFilter}
                      onChange={(e) => setDepartmentFilter(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                      }}
                    >
                      <MenuItem value="">All Departments</MenuItem>
                      {departments.map((dept) => (
                        <MenuItem key={dept} value={dept}>
                          {dept}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      select
                      label="Job Type"
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                      }}
                    >
                      <MenuItem value="">All Types</MenuItem>
                      {jobTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </motion.div>
            </Box>

            {/* Results Count */}
            <Box mb={3}>
              <Typography variant="body1" color="text.secondary">
                {loading ? 'Loading...' : `${filteredJobs.length} ${filteredJobs.length === 1 ? 'job' : 'jobs'} found`}
              </Typography>
            </Box>

            {/* Jobs Grid */}
            {loading ? (
              <LoadingSpinner message="Loading career opportunities..." />
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Grid container spacing={4}>
                  {filteredJobs.map((job, index) => (
                    <Grid item xs={12} md={6} lg={4} key={job.id}>
                      <motion.div
                        variants={sectionVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <JobCard
                          job={job}
                          onApply={handleApply}
                          onViewDetails={handleViewDetails}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}

            {/* No Results */}
            {!loading && filteredJobs.length === 0 && (
              <Box textAlign="center" py={8}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No jobs found
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Try adjusting your search criteria or check back later for new opportunities.
                </Typography>
              </Box>
            )}

            {/* CTA Section */}
            <Box textAlign="center" mt={8} p={4} bgcolor="grey.50" borderRadius={2}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  Don't see the right fit?
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                  We're always looking for passionate individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                  <TextField
                    placeholder="Enter your email"
                    size="small"
                    sx={{ minWidth: 250 }}
                  />
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Box component="button" className="button">
                      Subscribe to Job Alerts
                    </Box>
                  </motion.div>
                </Stack>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default CareersSection;