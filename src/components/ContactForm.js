import { Box, Button, Grid } from "@mui/material"
import { Header, TextFieldSmall } from "../styles/typographyStyle"


const ContactForm = () => {
    return (
        <Grid container padding={2}>
            <Grid item xs={12} textAlign={'center'} >
                <Header text={"Contact Us"} />
            </Grid>

            <Grid item xs={12} sm={6} display={'flex'} justifyContent={'end'}>

            </Grid>
            <Grid item xs={12} sm={4} >
                <Box sx={{ mt: 1, p: 2 }} textAlign={'center'}>
                    <TextFieldSmall label="Name" fullWidth variant="outlined" sx={{ mb: 2 }} />
                    <TextFieldSmall label="Email" fullWidth variant="outlined" sx={{ mb: 2 }} />
                    <TextFieldSmall
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 1 }}
                    />
                    <Button variant="contained" color="primary">Send Message</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ContactForm