import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const TypewriterText = ({
    text = '',
    speed = 100,
    variant = 'h4',
    cursor = true,
    sx = {},
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        intervalRef.current = setInterval(() => {
            setDisplayedText(prev => prev + text[indexRef.current]);
            indexRef.current += 1;
            if (indexRef.current >= text.length) {
                clearInterval(intervalRef.current);
            }
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [text, speed]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            aria-label={text}
        >
            <Typography
                variant={variant}
                sx={{ whiteSpace: 'pre', fontWeight: 600, ...sx }}
            >
                {displayedText}
                {cursor && (
                    <motion.span
                        aria-hidden="true"
                        style={{ display: 'inline-block', marginLeft: 2 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    >
                        |
                    </motion.span>
                )}
            </Typography>
        </motion.div>
    );
};

export default TypewriterText;
