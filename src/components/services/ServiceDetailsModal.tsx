'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceDetailsModalProps {
    item: {
        title: string;
        description: string;
        media?: string[]; // Mixed array of image and video paths
    };
    category: string;
    onClose: () => void;
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);
const isImage = (src: string) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(src);

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({ item, category, onClose }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = 400;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'right' ? scrollByAmount : -scrollByAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                <div className="relative">
                    {/* <div className="overflow-x-scroll  my-1 md:my-0 md:overflow-hidden">
                        {Array.isArray(item.media) && item.media.length > 0 ? (
                            <div
                                className={cn(
                                    ' gap-1 p-1 items-center h-72 w-full md:h-full',
                                    item.media.length === 1
                                        ? 'flex md:p-0 justify-center overflow-hidden items-center !h-[22rem]'
                                        : item.media.length === 2 ?
                                            'flex md:grid md:grid-cols-2 '
                                            : item.media.length === 3
                                                ? 'flex md:grid md:grid-cols-3'
                                                : item.media.length === 4
                                                    ? 'flex md:grid md:grid-cols-4 '
                                                    : 'flex md:grid md:grid-cols-5 '
                                )}
                            >
                                {item.media.map((src, idx) =>
                                    isVideo(src) ? (
                                        <video
                                            key={idx}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            className="w-full h-60 sm:h-64 md:h-72 object-cover rounded-lg"
                                        >
                                            <source src={src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : isImage(src) ? (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt={`${item.title} ${idx + 1}`}
                                            className={"w-full object-cover rounded-lg"}
                                        />
                                    ) : null
                                )}
                                <ArrowRight size={16} className="top-10 right-10 z-10" />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                                <span className="text-gray-500">No Media Available</span>
                            </div>
                        )}
                    </div> */}

                    <div className="relative my-1 md:my-0">
                        {/* Scrollable container */}
                        <div
                            ref={scrollRef}
                            className="overflow-x-scroll md:overflow-hidden scrollbar-hide"
                        >
                            {Array.isArray(item.media) && item.media.length > 0 ? (
                                <div
                                    className={cn(
                                        'gap-1 p-1 items-center h-72 w-full md:h-full',
                                        item.media.length === 1
                                            ? 'flex md:p-0 justify-center overflow-hidden items-center !h-[22rem]'
                                            : item.media.length === 2
                                                ? 'flex md:grid md:grid-cols-2'
                                                : item.media.length === 3
                                                    ? 'flex md:grid md:grid-cols-3'
                                                    : item.media.length === 4
                                                        ? 'flex md:grid md:grid-cols-4'
                                                        : 'flex md:grid md:grid-cols-5'
                                    )}
                                >
                                    {item.media.map((src, idx) =>
                                        isVideo(src) ? (
                                            <video
                                                key={idx}
                                                controls
                                                autoPlay
                                                muted
                                                loop
                                                className="w-full h-60 sm:h-64 md:h-72 object-cover rounded-lg"
                                            >
                                                <source src={src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : isImage(src) ? (
                                            <img
                                                key={idx}
                                                src={src}
                                                alt={`${item.title} ${idx + 1}`}
                                                className="w-full object-cover rounded-lg"
                                            />
                                        ) : null
                                    )}
                                </div>
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                                    <span className="text-gray-500">No Media Available</span>
                                </div>
                            )}
                        </div>

                        {/* Left Scroll Button (small screens only) */}
                        {item.media.length > 1 && (
                            <>
                                <button
                                    onClick={() => scroll('left')}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                >
                                    <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center">
                                        <ArrowLeft className="text-black h-6 w-6" />
                                    </div>
                                </button>

                                {/* Right Scroll Button (small screens only) */}
                                <button
                                    onClick={() => scroll('right')}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                >
                                    <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center">
                                        <ArrowRight className="text-black h-6 w-6" />
                                    </div>
                                </button>
                            </>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <p className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                            {category}
                        </p>
                        <h2 className="text-2xl font-playfair">{item.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    <div className="flex justify-end mt-6">
                        <Button variant="outline" onClick={onClose} className="mr-2">
                            Close
                        </Button>
                        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                            <a href="/contact">Request Similar</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetailsModal;
