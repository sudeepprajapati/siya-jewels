'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import ThreeCanvas from '../3d/ThreeCanvas';
import GoldRing from '../3d/GoldRing';
import Diamond from '../3d/Diamond';

interface AboutHeaderProps {
    portfolioCategories: string[];
    filter: string;
    setFilter: (category: string) => void;
}

const fadeLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
    },
});

const AboutHeader: React.FC<AboutHeaderProps> = ({ portfolioCategories, filter, setFilter }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" ref={ref}>
            <motion.div animate={controls} initial="hidden" variants={fadeLeft(0.2)}>
                <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                    Our <span className="text-gold">Portfolio</span>
                </h1>
                <motion.p variants={fadeLeft(0.2)} className="text-gray-700 max-w-2xl mb-10">
                    Browse through our collection of projects spanning Jewellery design, web development, creative media, and more.
                </motion.p>
                <motion.div className="flex flex-wrap gap-2 md:gap-4 mb-12" variants={fadeLeft(0.2)}>
                    {portfolioCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm md:text-base transition-colors",
                                filter === category
                                    ? "bg-gold text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </motion.div>

            {/* 3D Element */}
            <div className="hidden md:block h-[300px]">
                <Suspense
                    fallback={
                        <div className="h-full flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-t-gold border-b-gold rounded-full animate-spin"></div>
                        </div>
                    }
                >
                    <ThreeCanvas>
                        {filter === 'Jewellery CAD' ? (
                            <GoldRing position={[0, 0, 0]} scale={2} rotationSpeed={1} />
                        ) : (
                            <Diamond position={[0, 0, 0]} scale={1.8} rotationSpeed={0.8} />
                        )}
                    </ThreeCanvas>
                </Suspense>

            </div>
        </div>
    );
};

export default AboutHeader;
