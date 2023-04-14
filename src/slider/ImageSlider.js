import { React, useEffect, useState } from 'react'

const slideStyles = {
    width: "100%",
    height: "90vh",
    borderRadius: "0px",
    backgroundSize: "cover",
    repeat: "none",
    backgroundPosition: "top",
};

const rightArrowStyles = {
    position: "absolute",
    top: "25%",
    transform: "translate(0, 0%)",
    right: "32px",
    fontSize: "30px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    // boxShadow: "0 2px 30px rgba(0, 0, 0, 0.2)",
    textShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)"
};

const leftArrowStyles = {
    position: "absolute",
    top: "25%",
    transform: "translate(0, 0%)",
    left: "32px",
    fontSize: "30px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    textShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)"

};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles = {
    display: "none",
    // justifyContent: "center",
    // position: "relative",
    // top: "-30%"
};

// const dotStyle = {
//     margin: "0 5px",
//     cursor: "pointer",
//     fontSize: "50px",
//     position: "relative",
//     top: "0px"
// };


function ImageSlider3({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    //automatic loop
    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNext();
        }, 10000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);


    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div>
            <div className='sliderpro w-[100%] shadow-2xl shadow-gray-500'>
                <div className='sliderpro relative h-[50vh] w-[100%]'>
                    <div>
                        <div onClick={goToPrevious} style={leftArrowStyles}>
                            ❰
                        </div>
                        <div onClick={goToNext} style={rightArrowStyles}>
                            ❱
                        </div>
                    </div>
                    <div style={slideStylesWidthBackground} className='arsh'></div>
                    <div style={dotsContainerStyles}>
                        {slides.map((slide, slideIndex) => (
                            <div
                                className={`indicator ${slideIndex === currentIndex ? "indicator-active" : ""}`}
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                _
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider3