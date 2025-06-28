import { alpha, Button, styled } from "@mui/material";
import { motion } from 'framer-motion';

export const NavDonateButton = styled(Button)(({ theme }) => ({
    borderRadius: 8,
    textTransform: 'none',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.text.secondary,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: theme.palette.text.secondary,
        color: '#fafbfb',
        transform: 'translateY(-2px)',
    },
}));

export const NavItemButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    height: 'inherit',
    borderRadius: 0,
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.secondary, 0.2),
        color: theme.palette.primary.main,
        transform: 'translateY(-1px)',
    },
}));

export const OutlinedButtonHero = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    height: 'auto',
    '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    },
}));

export const OutlinedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    border: `2px solid ${theme.palette.text.secondary}`,
    borderColor: theme.palette.text.secondary,
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    height: 'auto',
    '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    },
}));

export const ContainedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    '&:hover': {
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.text.secondary})`,
        color: theme.palette.common.white,
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    },
}));

// Motion-enhanced buttons for consistent animations
export const MotionContainedButton = motion(ContainedButton);
export const MotionOutlinedButton = motion(OutlinedButton);