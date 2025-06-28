import { Box, Button, Grid, Modal, Paper, Stack, styled, TextField, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"

export const Header = ({ text }) => {
    return (
        <Typography
            variant="h4"
            sx={{
                fontWeight: 'bold',
                mb: 2,
                display: 'inline-block',
                borderBottom: '3px solid',
            }}
            mt={2}
        >
            {text}
        </Typography>
    )
}
export const CardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    textAlign: 'left',
}));


export const StrokeTextWithBgImg = ({ url = '', text = '' }) => {
    return (
        <Box sx={{
            height: {
                xs: '10rem', // Set height to 10rem for xs screens
                sm: '30rem', // Default height for larger screens
            },
            overflow: 'hidden',
            padding: '2px 13px',
        }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden", // Prevents overflow of the image
                    height: {
                        xs: "10rem", // Mobile screen height
                        sm: "30rem", // Default height for larger screens
                    },
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover", // Ensures the image covers the entire container
                    backgroundPosition: "center", // Centers the background image
                    backgroundRepeat: "no-repeat", // Avoids repeating the background image
                    borderRadius: "0 0 10px 10px",
                    animation: "zoomBackground 10s ease-out forwards", // Animation applied here
                    "@keyframes zoomBackground": {
                        "0%": {
                            transform: "scale(1.1)", // Initial scale
                        },
                        "50%": {
                            transform: "scale(1)", // Slightly zoomed in
                        },
                    },
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        padding: { xs: "0 5px", sm: "0 10px" }, // Adjust padding for responsiveness
                        border: text
                            ? { xs: "2px solid white", sm: "5px solid white" }
                            : "", // Responsive border size
                        transform: "translate(-50%, -50%)",
                        color: "transparent", // Transparent inner text
                        fontWeight: "bold",
                        textAlign: "center",
                        letterSpacing: { xs: "1px", sm: "5px" }, // Adjust letter spacing for smaller screens
                        WebkitTextStroke: { xs: "1px white", sm: "3px white" }, // Responsive stroke width
                        fontFamily: "sans-serif",
                        fontSize: { xs: "1rem", sm: '3.5rem' }, // Font size for different screens

                    }}
                >
                    {text}
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="body1"
                    sx={{
                        position: "absolute",
                        top: { xs: "calc(50% + 20px)", sm: "calc(50% + 50px)" }, // Adjust vertical position
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        fontWeight: "normal",
                        textAlign: "center",
                        fontSize: { xs: "0.5rem", sm: "1rem" }, // Font size for different screens
                    }}
                >
                    Add your subtitle or additional text here.
                </Typography>

                {/* Button */}
                <Box sx={{ position: "absolute", bottom: "4%", left: "5%" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            fontSize: { xs: "0.7rem", sm: "1rem" }, // Button font size for responsiveness
                            padding: { xs: "5px 10px", sm: "10px 20px" }, // Adjust padding for mobile
                        }}
                    >
                        Donate Now
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export const PageSection = styled(motion(Box))(({ theme, bgColor }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight: '20rem', // Height for xs screens
        boxShadow: theme.shadows[0],  // No shadow on small screens
    },
}));

export const BodyText1 = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    lineHeight: 1.7,
    textAlign: 'justify',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}));
export const BodyText2 = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: 1.7,
    textAlign: 'justify',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}));


export const Highlight = styled(Box)(({ theme }) => ({
    fontWeight: 700,
    display: 'inline',
    color: theme.palette.text.primary,
}));

export const Headline = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '2.5rem', // Adjust size as needed
    lineHeight: 1.2,
    letterSpacing: '-0.5px',
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
    },
}));


export const ImagesWithText = () => {
    return (<>

    </>);
}

export const SmallCard = ({ bgColor = 'white', item = {}, text = '' }) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Paper
                elevation={3}
                sx={{
                    width: { xs: 60, sm: 120 },  // 80x80 on xs, 120x120 on sm and up
                    height: { xs: 60, sm: 120 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    backgroundColor: 'whiteSmoke'
                }}
            >
                {item.icon}
            </Paper>
            <Typography variant="h6" mt={1}>{item.label}</Typography>
        </Box>
    )
}
export const TypographyText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,   // Default text color
    fontWeight: "bold",                  // Example style
    textAlign: "center",                 // Center text
}));
export const NumericTextField = styled((props) => {
    const handleChange = (event) => {
        const inputValue = event.target.value;

        const formattedValue = inputValue.match(/^\d*\.?\d{0,2}$/);
        if (props.onChange && (inputValue === '' || formattedValue)) {
            let finalValue = inputValue;
            if (formattedValue !== null) {
                finalValue = formattedValue[0];
            }
            props.onChange({
                target: {
                    value: finalValue === '' ? '' : props.type === 'text' ? finalValue : Number(finalValue),
                    name: event.target.name
                }
            });
        }
    };

    return (
        <TextField
            {...props}
            size="small"
            type={props.type ?? 'number'}
            onChange={handleChange}
            inputProps={{ ...props.inputProps, inputMode: 'decimal', pattern: '[0-9]*[.,]?[0-9]{0,2}' }}
            InputProps={props.InputProps}
        />
    );
})(({ theme }) => ({
    '& input[type=number]': {
        MozAppearance: 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
    },
    '& .MuiInputBase-root': {},
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.grey[400]
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main
        }
    }
}));

export const StyleStackCenter = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}));
export const StyleStackEnd = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
}));
styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
}));
export const StyleStackBetween = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
}));
export const StyleStackAround = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center'
}));
export const StyleModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const StyledModalContent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 10 6px 20px rgba(0, 0, 0, 0.19)',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '1rem',
    outline: 'none',
    position: 'relative',
    overflow: 'auto'
}));
export const TextFieldSmall = styled((props) => <TextField {...props} size="small" />)(({ theme }) => ({
    '& .MuiInputBase-root': {}
}));
export const Images = ({ url }) => {
    return (
        <Box
            sx={{
                py: { xs: 0, sm: 1 },
                px: 2,
                textAlign: 'center',
                '& img': {
                    width: '100%',
                    maxHeight: '300px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    border: '4px solid #ccc',  // Outer border

                },
                '&:hover img': {
                    transform: 'scale(1.06)',
                },
            }}
        >
            <img src={url} alt="NGO Images" />
        </Box>

    )
}

export const TextImageAlter = ({ sections }) => {
    return (
        <Grid container mt={2}>
            {sections.map((section, index) => (
                <React.Fragment key={index}>
                    {/* Check if index is even or odd to alternate the layout */}
                    {index % 2 !== 0 ? (
                        // Even index: Image on left, Text on right
                        <>
                            <Grid item xs={12} sm={6} display="flex" justifyContent="end" alignItems="center"  >
                                <Images url={section.imageUrl} />
                            </Grid>
                            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                                <Box sx={{ p: '0px 0px 0px 15px', width: { xs: '100%', sm: '80%', md: '80%' } }} >
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        {section.text}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        <strong>Key Achievements:</strong><br />
                                        {section.achievements.map((achievement, idx) => (
                                            <div key={idx}>
                                                - {achievement}
                                            </div>
                                        ))}
                                    </Typography>
                                    {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Join Us
                                    </Button> */}
                                </Box>
                            </Grid>
                        </>
                    ) : (
                        // Odd index: Text on left, Image on right
                        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} p={2} >
                            <Grid item xs={12} sm={6} display="flex" justifyContent="end" alignItems="center">
                                <Box sx={{ p: '0px 5px 0px 0px', width: { xs: '100%', sm: '80%', md: '76%' } }} >
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        {section.text}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        <strong>Key Achievements:</strong><br />
                                        {section.achievements.map((achievement, idx) => (
                                            <div key={idx}>
                                                - {achievement}
                                            </div>
                                        ))}
                                    </Typography>
                                    {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Join Us
                                    </Button> */}
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                                <Images url={section.imageUrl} />
                            </Grid>
                        </Stack>
                    )}
                </React.Fragment>
            ))}
        </Grid>
    );
};