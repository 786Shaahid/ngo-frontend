import React from 'react'
import arrow_btn from '@assets/images/arrow_btn.png';
import play_icon from '@assets/images/play_icon.png';
import pause_icon from '@assets/images/pause_icon.png';
import { Box, Typography } from '@mui/material';

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
    return (
        <div>
            <Box>
                <Typography>
                    {heroData.text1}
                </Typography>
                <Typography>
                    {heroData.text2}
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Explore the feature
                </Typography>
                <img src={arrow_btn} alt='arrowbtn' />
            </Box>
            <Box>
                <ul  >
                    <li onClick={() => setHeroCount(0)}></li>
                    <li onClick={() => setHeroCount(1)}></li>
                    <li onClick={() => setHeroCount(2)}></li>
                </ul>
            </Box>
            <Box bgcolor={'black'}>
                <img src={playStatus ? pause_icon : play_icon} alt='arrowbtn' onClick={() => setPlayStatus(!playStatus)} />

                {/* <ul  >
                    <li onClick={() => setHeroCount(0)}></li>
                    <li onClick={() => setHeroCount(1)}></li>
                    <li onClick={() => setHeroCount(2)}></li>
                </ul> */}
            </Box>
        </div>
    )
}

export default Hero;