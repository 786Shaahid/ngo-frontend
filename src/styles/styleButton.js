import { alpha, Button, styled } from "@mui/material";

export const NavDonateButton = styled(Button)(({ theme }) => ({
    borderRadius: 8,
    textTransform: 'none',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: theme.palette.text.secondary,
        color: '#fafbfb',
    },
}));

export const NavItemButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    height: 'inherit',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.secondary, 0.2),
        color: theme.palette.primary.main,
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
    },
}));