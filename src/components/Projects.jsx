import { useState, useEffect } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Project images from the public/projects folder
    const projects = [
        {
            id: 1,
            image: '/projects/p1.jpeg',
            title: 'Offshore Engineering Excellence',
            description: 'Delivering world-class marine engineering solutions with precision and safety'
        },
        {
            id: 2,
            image: '/projects/p2.jpeg',
            title: 'Maritime Innovation',
            description: 'Pioneering advanced diving services and underwater operations'
        }
    ];

    // Auto-play slideshow
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, projects.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-slate-900">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${index === currentSlide
                            ? 'opacity-100 translate-x-0'
                            : index < currentSlide
                                ? 'opacity-0 -translate-x-full'
                                : 'opacity-0 translate-x-full'
                            }`}
                    >
                        {/* Background Image - Original Size */}
                        <div
                            className="absolute inset-0 w-full h-full bg-white bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12">
                            <div className="max-w-4xl">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 transform transition-all duration-700 delay-300">
                                    {project.title}
                                </h2>
                                <p className="text-lg md:text-2xl text-blue-200 mb-8 leading-relaxed transform transition-all duration-700 delay-500">
                                    {project.description}
                                </p>

                                {/* Animated Progress Bar */}
                                <div className="w-full md:w-2/3 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                                        style={{
                                            width: index === currentSlide && isAutoPlaying ? '100%' : '0%',
                                            transition: index === currentSlide && isAutoPlaying ? 'width 5s linear' : 'width 0.3s'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 backdrop-blur-md hover:bg-slate-900/80 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-cyan-400/50 group"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 backdrop-blur-md hover:bg-slate-900/80 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-cyan-400/50 group"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'w-12 md:w-16 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-500'
                            : 'w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-24 md:top-28 right-4 md:right-8 z-20 bg-slate-900/60 backdrop-blur-md hover:bg-slate-900/80 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-cyan-400/50"
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
                {isAutoPlaying ? (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>

            {/* Header Title Overlay */}
            <div className="absolute top-24 md:top-28 left-6 md:left-12 z-20">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                </h1>
            </div>
        </div>
    );
};

export default Projects;
