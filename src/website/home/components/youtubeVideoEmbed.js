import { Box, Typography } from '@mui/material';

const YouTubeEmbedComponent = ({ videoId }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                paddingTop: '75%', // 16:9 aspect ratio

            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </Box>
    );
};

export default YouTubeEmbedComponent;
