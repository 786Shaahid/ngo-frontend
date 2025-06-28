import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const PageLoader = ({ progress = 0, message = "Loading page..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'primary.contrastText',
          zIndex: 9999,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" color="primary.main" fontWeight="bold" gutterBottom>
              The Help Sansthan
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {message}
            </Typography>
          </Box>
          
          <Box sx={{ width: 300, mb: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: 'grey.200',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: 'linear-gradient(90deg, #02133E, #0073df)',
                }
              }} 
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {Math.round(progress)}%
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default PageLoader;