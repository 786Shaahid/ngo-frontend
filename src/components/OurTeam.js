import { Favorite, Home, Settings } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Header, Images, PageSection, SmallCard, StrokeTextWithBgImg, TextImageAlter } from "../styles/typographyStyle";

export const OurTeam = () => {
  const items = [
    { label: "Home", icon: <Home sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
    { label: "Favorites", icon: <Favorite sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
    { label: "Settings", icon: <Settings sx={{ fontSize: { sm: 60, xs: 30 }, color: 'secondary.main' }} /> },
  ];

  const sections = [
    {
      text: "At [NGO Name], we envision a world where every child has access to quality education and healthcare. Our mission is to break the cycle of poverty by empowering communities with the tools and resources they need to thrive.",
      achievements: [
        "Delivered clean water to over 50 rural villages.",
        "Ensured access to basic education for 1,000+ children.",
        "Distributed 10,000 meals annually through global partnerships."
      ],
      imageUrl: "https://as1.ftcdn.net/v2/jpg/08/33/07/16/1000_F_833071612_ZqqFxm1ziwXrKGKnT07XFWryiZQ1VHr6.jpg",
    },

    // Add more sections as needed
  ];
  return (
    <Grid container spacing={0.2}>
      <Grid item xs={12} >
        <PageSection bgColor={'#7f7f9f'}>
          <StrokeTextWithBgImg url={"https://t4.ftcdn.net/jpg/06/35/44/45/240_F_635444578_CDFldlAX7gZprsu1ZCIs5vSlglSEP5wc.jpg"} text={"Our Team"} />
          <Stack direction="row" spacing={5} mt={3} justifyContent={'center'}>
            {items.map((item, index) => (
              <SmallCard key={index} item={item} />
            ))}
          </Stack>

        </PageSection>
      </Grid>
      <Grid item xs={12} >
        <PageSection bgColor={'#fff'}>
          <Grid container >
            <Grid item xs={12} textAlign={'center'}>
              <Header text={"Leadership"} />
            </Grid>
            <Grid item xs={12} sm={12} display="flex" justifyContent="center" alignItems="center" mt={2}>
              <Box sx={{ p: '0px 0px 0px 0px', width: { xs: '100%', sm: '80%', md: '80%' } }} >
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem' }} component={'p'}>
                  <Box
                    sx={{
                      width: '40%',
                      textAlign: 'center',
                      float: 'right'
                    }}
                  >
                    {/* Round Image with Hover Effect */}
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9maWxlfGVufDB8fDB8fHww"
                      alt="Profile"
                      sx={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #c4d6c7',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />

                    {/* Designation Text */}
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                      John Doe
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Senior Manager, NGO Organization
                    </Typography>
                  </Box>
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.
                  Delivered clean water to over 50 rural villages.
                  Ensured access to basic education for 1,000+ children.
                  Distributed 10,000 meals annually through global partnerships.




                </Typography>
                {/* <Typography variant="body1" sx={{ mb: 3 }}>
                                        <strong>Key Achievements:</strong><br />
                                        {section.achievements.map((achievement, idx) => (
                                            <div key={idx}>
                                                - {achievement}
                                            </div>
                                        ))}
                                    </Typography> */}
                {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Join Us
                                    </Button> */}
              </Box>
            </Grid>
            {/* <Grid item xs={12} sm={6} display="flex" justifyContent="Start" alignItems="center">
              <Box sx={{ p: '0px 10px 0px 15px', width: { xs: '100%', sm: '80%', md: '80%' }, textAlign: 'center' }}>
                  <img
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9maWxlfGVufDB8fDB8fHww"
                  alt="Profile"
                  style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #ccc',
                  }}
                />

                 <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                  John Doe
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Senior Manager, NGO Organization
                </Typography>
              </Box>
            </Grid> */}
          </Grid>

        </PageSection >
      </Grid >
      <Grid item xs={12} ><PageSection bgColor={'white'}>
        <Grid container padding={2}>
          <Grid item xs={12} textAlign={'center'}>
            <Header text={"Our Mission"} />
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
            <Box sx={{ p: '0px 0px 0px 15px', width: { xs: '100%', sm: '80%', md: '80%' } }} >
              <Typography variant="body1" sx={{ mb: 3 }}>
                Delivered clean water to over 50 rural villages.
                Ensured access to basic education for 1,000+ children.
                Distributed 10,000 meals annually through global partnerships.

              </Typography>
              {/* <Typography variant="body1" sx={{ mb: 3 }}>
                                        <strong>Key Achievements:</strong><br />
                                        {section.achievements.map((achievement, idx) => (
                                            <div key={idx}>
                                                - {achievement}
                                            </div>
                                        ))}
                                    </Typography> */}
              {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Join Us
                                    </Button> */}
            </Box>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>

          </Grid>
        </Grid>
      </PageSection></Grid>
      {/* <Grid item xs={12} sm={6}><PageSection bgColor={''}></PageSection></Grid> */}
    </Grid >
  )
};
