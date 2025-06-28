import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  Divider,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocationOn,
  Work,
  Schedule,
  CurrencyRupee,
  People,
  CalendarToday,
  Bookmark,
  Share
} from '@mui/icons-material';
import { ContainedButton, OutlinedButton } from '../../styles/styleButton';

const MotionCard = motion(Card);

const JobCard = ({ job, onApply, onViewDetails }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time': return 'primary';
      case 'Part-time': return 'secondary';
      case 'Contract': return 'warning';
      default: return 'default';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysRemaining = (lastDate) => {
    const today = new Date();
    const deadline = new Date(lastDate);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(job.lastDate);

  return (
    <MotionCard
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, pb: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box flex={1}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {job.title}
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="600">
              {job.department}
            </Typography>
          </Box>
          
          <Box display="flex" gap={1}>
            <IconButton size="small">
              <Bookmark fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Share fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Job Type Chip */}
        <Chip
          label={job.type}
          color={getTypeColor(job.type)}
          size="small"
          sx={{ fontWeight: 600 }}
        />
      </Box>

      {/* Job Details */}
      <CardContent sx={{ flexGrow: 1, pt: 0 }}>
        <Stack spacing={2} mb={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.location}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <Work fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.experience} experience
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <CurrencyRupee fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.salary}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <People fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job.vacancies} {job.vacancies === 1 ? 'position' : 'positions'} available
            </Typography>
          </Box>
        </Stack>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5,
          }}
        >
          {job.description}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Dates */}
        <Stack spacing={1} mb={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Posted: {formatDate(job.postedDate)}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <Schedule fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Deadline: {formatDate(job.lastDate)}
            </Typography>
          </Box>
          
          {daysRemaining > 0 && (
            <Typography
              variant="caption"
              color={daysRemaining <= 7 ? 'error' : 'warning.main'}
              fontWeight="600"
            >
              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
            </Typography>
          )}
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <OutlinedButton
            size="small"
            onClick={() => onViewDetails(job)}
            sx={{ flex: 1 }}
          >
            View Details
          </OutlinedButton>
          <ContainedButton
            size="small"
            onClick={() => onApply(job)}
            sx={{ flex: 1 }}
            disabled={daysRemaining <= 0}
          >
            {daysRemaining <= 0 ? 'Expired' : 'Apply Now'}
          </ContainedButton>
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export default JobCard;