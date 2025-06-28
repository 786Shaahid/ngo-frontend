import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Button,
  Stack,
  IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocationOn,
  People,
  CalendarToday,
  TrendingUp,
  Favorite,
  Share
} from '@mui/icons-material';
import { ContainedButton, OutlinedButton } from '../../styles/styleButton';

const MotionCard = motion(Card);

const ProjectCard = ({ project, onLearnMore, onDonate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Completed': return 'primary';
      case 'Planning': return 'warning';
      default: return 'default';
    }
  };

  return (
    <MotionCard
      whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
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
          image={project.image}
          alt={project.title}
        />
        
        {/* Status Chip */}
        <Chip
          label={project.status}
          color={getStatusColor(project.status)}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            fontWeight: 600,
          }}
        />
        
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
            <Favorite fontSize="small" />
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
        {/* Category */}
        <Typography
          variant="caption"
          color="primary"
          sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}
        >
          {project.category}
        </Typography>

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mt: 1, mb: 2, lineHeight: 1.3 }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.6 }}
        >
          {project.description}
        </Typography>

        {/* Project Stats */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {project.location}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <People fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {project.beneficiaries.toLocaleString()} beneficiaries
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              Started: {new Date(project.startDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Stack>

        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="body2" fontWeight="600">
              Progress
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="600">
              {project.progress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={project.progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(90deg, #02133E, #0073df)',
              },
            }}
          />
        </Box>

        {/* Budget */}
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <TrendingUp fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            Budget: <strong>{project.budget}</strong>
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <OutlinedButton
            size="small"
            onClick={() => onLearnMore(project)}
            sx={{ flex: 1 }}
          >
            Learn More
          </OutlinedButton>
          <ContainedButton
            size="small"
            onClick={() => onDonate(project)}
            sx={{ flex: 1 }}
          >
            Donate
          </ContainedButton>
        </Stack>
      </CardContent>
    </MotionCard>
  );
};

export default ProjectCard;