import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const CustomDot = ({ onClick, active, index, ...rest }) => {
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
      style={{
        width: active ? '12px' : '8px',
        height: active ? '12px' : '8px',
        borderRadius: '50%',
        border: 'none',
        background: active ? '#02133E' : '#ccc',
        margin: '0 4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    />
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const theme = useTheme();
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'white',
          transform: 'translateY(-50%) scale(1.1)',
        },
        zIndex: 2,
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const theme = useTheme();
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'white',
          transform: 'translateY(-50%) scale(1.1)',
        },
        zIndex: 2,
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent = ({ 
  children, 
  autoPlay = true, 
  infinite = true, 
  showDots = true,
  customResponsive = null,
  arrows = true,
  autoPlaySpeed = 3000,
  ...props 
}) => {
  return (
    <Box sx={{ position: 'relative', '& .react-multi-carousel-list': { overflow: 'visible' } }}>
      <Carousel
        responsive={customResponsive || responsive}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        infinite={infinite}
        showDots={showDots}
        customDot={<CustomDot />}
        customLeftArrow={arrows ? <CustomLeftArrow /> : <div />}
        customRightArrow={arrows ? <CustomRightArrow /> : <div />}
        removeArrowOnDeviceType={arrows ? [] : ["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        containerClass="carousel-container"
        {...props}
      >
        {children}
      </Carousel>
      
      <style jsx global>{`
        .custom-dot-list-style {
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
        }
        .carousel-item-padding-20-px {
          padding: 0 10px;
        }
        .carousel-container {
          padding-bottom: 50px;
        }
      `}</style>
    </Box>
  );
};

export default CarouselComponent;