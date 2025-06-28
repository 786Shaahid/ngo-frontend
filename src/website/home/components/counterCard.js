import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useCountUp } from '../../hooks/useCountUp';

const CounterCard = ({
    title,
    count,
    suffix = '',
    delay = 0,
    icon,
    index = 0
}) => {
    const { count: animatedCount, ref, isInView } = useCountUp({
        end: count,
        duration: 2500,
        delay
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.1 + 0.3,
                ease: "backOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.4
            }
        }
    };



    const lineVariants = {
        hidden: { x: "-100%" },
        visible: {
            x: 0,
            transition: {
                duration: 1,
                delay: index * 0.1 + 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileTap={{ scale: 0.98 }}
        >
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: 'hidden',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: 6
                    }
                }}
            >
                {/* Gradient Overlay */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom right, #eff6ff, #eef2ff)',
                        zIndex: 0
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <Box sx={{ position: 'relative', px: 4, py: 6, zIndex: 1 }}>
                    {/* Icon */}
                    {icon && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <motion.div
                                variants={iconVariants}
                                style={{
                                    padding: 12,
                                    borderRadius: '999px',
                                    background: 'linear-gradient(to right, #02133E, #1e40af)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {icon}
                            </motion.div>
                        </Box>
                    )}

                    {/* Title */}
                    <motion.div variants={titleVariants}>
                        <Typography
                            // variant="subtitle1"
                            variant='h6'
                            sx={{ color: 'text.secondary', textTransform: 'capitalize', fontWeight: 600, mb: 3 }}
                        >
                            {title}
                        </Typography>
                    </motion.div>

                    {/* Animated Count */}
                    <Box ref={ref} sx={{ mb: 4 }}>
                        <Box sx={{ position: 'relative', display: 'inline-block' }}>
                            <motion.span
                                style={{
                                    position: 'relative',
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    color: '#02133E'
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isInView ? 1 : 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1 + 0.5
                                }}
                            >
                                {animatedCount.toLocaleString()}
                                {suffix}
                            </motion.span>
                        </Box>
                    </Box>
                </Box>

                {/* Bottom Line */}
                <Box
                    sx={{
                        height: 4,
                        backgroundColor: 'grey.100',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        variants={lineVariants}
                        style={{
                            height: '100%',
                            background: 'linear-gradient(to right, #02133E, #2563eb)'
                        }}
                    />
                </Box>
            </Box>
        </motion.div>
    );
};

export default CounterCard;
