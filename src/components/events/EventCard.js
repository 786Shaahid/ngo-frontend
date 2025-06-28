import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  IconButton,
  LinearProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocationOn,
  Schedule,
  People,
  CurrencyRupee,
  CalendarToday,
  Share,
  Bookmark
} from '@mui/icons-material';
import { ContainedButton, OutlinedButton } from '../../styles/styleButton';

const MotionCard = motion(Card);

const EventCard = ({ event, onRegister, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'primary';
      case 'Ongoing': return 'success';
      case 'Completed': return 'default';
      default: return 'default';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Fundraising': 'error',
      'Healthcare': 'success',
      'Education': 'primary',
      'Environment': 'success',
      'Women Empowerment': 'secondary',
      'Appreciation': 'warning'
    };
    return colors[category] || 'default';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const registrationPercentage = (event.registered / event.capacity) * 100;
  const spotsLeft = event.capacity - event.registered;

  return (
    <MotionCard
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={event.image}
          alt={event.title}
        />
        
        {/* Status and Category Chips */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <Chip
            label={event.status}
            color={getStatusColor(event.status)}
            size="small"
            sx={{ fontWeight: 600 }}
          />
          <Chip
            label={event.category}
            color={getCategoryColor(event.category)}
            size="small"
            variant="outlined"
            sx={{ 
              fontWeight: 600,
              backgroundColor: 'rgba(255,255,255,0.9)',
            }}
          />
        </Box>
        
        {/* Action Buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'white' },
            }}
          >
            <Bookmark fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'white' },
            }}
          >
            <Share fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Content Section */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, lineHeight: 1.3 }}
        >
          {event.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6,
          }}
        >
          {event.description}
        </Typography>

        {/* Event Details */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {formatDate(event.date)}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <Schedule fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {formatTime(event.time)} - {formatTime(event.endTime)}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.venue}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <CurrencyRupee fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.ticketPrice}
            </Typography>
          </Box>
        </Stack>

        {/* Registration Progress */}
        <Box sx={{ mb: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="body2" fontWeight="600">
              Registration
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="600">
              {event.registered}/{event.capacity}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={registrationPercentage}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                background: registrationPercentage > 80 
                  ? 'linear-gradient(90deg, #f44336, #ff9800)'
                  : 'linear-gradient(90deg, #02133E, #0073df)',
              },
            }}
          />
          <Typography
            variant="caption"
            color={spotsLeft <= 10 ? 'error' : 'text.secondary'}
            fontWeight="600"
            sx={{ mt: 0.5, display: 'block' }}
          >
            {spotsLeft > 0 ? `${spotsLeft} spots left` : 'Fully booked'}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <OutlinedButton
            size="small"
            onClick={() => onViewDetails(event)}
            sx={{ flex: 1 }}
          >
            View Details
          </OutlinedButton>
          <ContainedButton
            size="small"
            onClick={() => onRegister(event)}
            sx={{ flex: 1 }}
            disabled={spotsLeft <= 0 || event.status === 'Completed'}
          >
            {spotsLeft <= 0 ? 'Full' : event.status === 'Completed' ? 'Ended' : 'Register'}
          </ContainedButton>
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export default EventCard;