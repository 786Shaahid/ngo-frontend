import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './footerC';
import Navbar from './navbar';



const AppContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'primary.contrastText',
  zoom: '100%',
  minHeight: '98vh',
  marginTop: '4rem'
}));

const WebLayouts = () => {
  return (
    <div className="App" style={{ background: 'primary.contrastText' }}>
      <Navbar />
      <AppContainer>

        {/* <ErrorBoundary location={location}> */}
        {/* <Box
            component="main"
            sx={{ flexGrow: 1, paddingX: 2, paddingY: 1 }}

        >
            <Toolbar /> */}
        <Box sx={{
          width: '100%',
          height: '100%',
        }}>
          <Outlet />

        </Box>
        {/* </Box> */}
        {/* </ErrorBoundary> */}
      </AppContainer>

      <Footer />
    </div>
  )
}

export default WebLayouts;