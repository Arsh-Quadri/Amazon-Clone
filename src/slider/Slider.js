import React from 'react'
import ImageSlider from "./ImageSlider";

function Slider() {

    const slides = [
        { url: "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg", title: "beach" },
        { url: "https://m.media-amazon.com/images/I/71w4UiDFfkL._SX3000_.jpg", title: "boat" },
        { url: "https://m.media-amazon.com/images/I/71womsFLWzL._SX3000_.png", title: "forest" },
        { url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg", title: "city" },
        { url: "https://m.media-amazon.com/images/I/71jhnI7aVJL._SX3000_.jpg", title: "italy" },
        { url: "https://m.media-amazon.com/images/I/61mZ60Ci3YL._SX3000_.jpg", title: "italy" },
        { url: "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg", title: "italy" },

    ];

    return (
        <div>
            <div>
                <div className='firstSlider w-[102vw] h-[18vhpx]  my-auto'>
                    <ImageSlider slides={slides} />
                </div>
            </div>
            {/* <hr className='relative -bottom-16 z-10' /> */}
        </div>
    )
}

export default Slider