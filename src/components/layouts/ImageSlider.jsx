import React, { useState, useEffect } from "react";

const images = [
    "/images/img5.avif",
    "/images/img3.webp",
    "/images/img1.jpg",
    "/images/img8.jpg",
    
    
    
    "/images/img5.avif",
    "/images/img2.jpg",



];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <img
                src={images[currentIndex]}
                alt="slider"
                className="slider-image"
            />
            <button className="slider-arrow left-arrow" onClick={prevSlide}>
                &#8592;
            </button>
            <button className="slider-arrow right-arrow" onClick={nextSlide}>
                &#8594;
            </button>
        </div>
    );
};

export default ImageSlider;
