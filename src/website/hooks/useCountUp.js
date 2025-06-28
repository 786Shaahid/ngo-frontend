import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export const useCountUp = ({ end, duration = 2000, start = 0, delay = 0 }) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(null);
    const isInView = useInView(countRef, {
        once: true,
        margin: "0px 0px -100px 0px"
    });

    useEffect(() => {
        if (!isInView) return;

        const timer = setTimeout(() => {
            const startTime = Date.now();
            const startValue = start;
            const endValue = end;

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutExpo);
                setCount(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }, delay);

        return () => clearTimeout(timer);
    }, [isInView, end, start, duration, delay]);

    return { count, ref: countRef, isInView };
};