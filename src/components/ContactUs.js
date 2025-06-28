import { Email, Facebook, Instagram, LocationOn, Phone, YouTube } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Header, PageSection, StrokeTextWithBgImg, TextFieldSmall, TextImageAlter } from "../styles/typographyStyle";
import ContactForm from "./ContactForm";

export const Contact = () => {
  const contactInfo = [
    { icon: <Email sx={{ fontSize: 40 }} />, label: "contact@ngoexample.org" },
    { icon: <Phone sx={{ fontSize: 40 }} />, label: "+123 456 7890" },
    { icon: <LocationOn sx={{ fontSize: 40 }} />, label: "123 Community Street, City, Country" },
  ];

  const socialMedia = [
    { icon: <Facebook sx={{ fontSize: 40, color: '#4267B2' }} />, label: "Facebook" },
    { icon: <YouTube sx={{ fontSize: 40, color: '#FF0000' }} />, label: "YouTube" },
    { icon: <Instagram sx={{ fontSize: 40, color: '#C13584' }} />, label: "Instagram" },
  ];
  return (
    <>
      <Grid container spacing={0.2}>

        {/* Contact Section */}
        <Grid item xs={12}>
          <PageSection bgColor={'#eef2f2'}>
            <StrokeTextWithBgImg
              url="https://images.unsplash.com/photo-1586449480584-34302e933441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Contact Us"
            />
            <Stack direction="row" spacing={5} mt={3} justifyContent={'center'}>
              {contactInfo.map((info, idx) => (
                <Box textAlign={'center'} key={idx}>
                  <IconButton>
                    {info.icon}
                  </IconButton>
                  <Typography variant="h6">{info.label}</Typography>
                </Box>
              ))}
            </Stack>
            {/* Contact Info */}
            {/* <Grid container justifyContent="center" alignItems="center" mt={3}>
              {contactInfo.map((info, idx) => (
                <Grid item xs={12} sm={4} textAlign="center" key={idx}>
                  <IconButton>
                    {info.icon}
                  </IconButton>
                  <Typography variant="h6">{info.label}</Typography>
                </Grid>
              ))}
            </Grid> */}

            {/* Social Media Icons */}
            {/* <Grid container spacing={4} justifyContent="center" alignItems="center" mt={3}>
              {socialMedia.map((media, idx) => (
                <Grid item xs={4} sm={2} textAlign="center" key={idx}>
                  <IconButton>
                    {media.icon}
                  </IconButton>
                  <Typography variant="body2">{media.label}</Typography>
                </Grid>
              ))}
            </Grid> */}

          </PageSection>
        </Grid>
        <Grid item xs={12}>
          <PageSection bgColor={'#fff'}>

            {/* Contact Info */}
            <ContactForm />
          </PageSection>
        </Grid>

      </Grid>


    </>
    // <Box sx={{ py: 4, px: 2, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
    //   <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>Contact</Typography>
    //   <Typography variant="body1" sx={{ mb: 3 }}>
    //     We’d love to hear from you! Whether you want to volunteer, donate, or learn more about our work, get in touch with us.
    //   </Typography>


    // </Box>
  )
};