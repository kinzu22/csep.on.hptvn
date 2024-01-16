import { memo } from 'react';
import { useInView, useAnimate } from 'framer-motion';
import React, { useEffect } from 'react';

const animation = {
    fadeInLeft: {
        from: {
            x: [-100, 0, 0],
            opacity: 1,
        },
        to: {
            x: [0, 0, 0],
            opacity: 0,
        },
        duration: { duration: 1 },
    },
    fadeInRight: {
        from: {
            x: [100, 0, 0],
            opacity: 1,
        },
        to: {
            x: [0, 0, 0],
            opacity: 0,
        },
        duration: { duration: 1 },
    },
    fadeInUp: {
        from: {
            y: [100, 0],
            opacity: 1,
        },
        to: {
            y: [0, 0, 0],
            opacity: 0,
        },
        duration: { duration: 1 },
    },
    fadeInDown: {
        from: {
            y: [-100, 0],
            opacity: 1,
        },
        to: {
            y: [0, 0, 0],
            opacity: 0,
        },
        duration: { duration: 1 },
    },
};

const InViewMotion = memo(function InViewMotion({
    animationProps,
    className,
    children,
}) {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { margin: '-50px 0px -50px 0px' });
    useEffect(() => {
        if (isInView) {
            animate(
                scope.current,
                animation[animationProps].from,
                animation[animationProps].duration
            );
        } else {
            animate(scope.current, animation[animationProps].to);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <div ref={scope} className={className}>
            {children}
        </div>
    );
});
export default InViewMotion;
