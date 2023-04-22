import React from 'react';
import img1 from "../../../assets/carousel-img/carousel-1.jpg";
import img2 from "../../../assets/carousel-img/carousel-2.jpg";
import img3 from "../../../assets/carousel-img/carousel-3.jpg";
import img4 from "../../../assets/carousel-img/carousel-4.jpg";
import img5 from "../../../assets/carousel-img/carousel-5.jpg";
import BannerSlide from './BannerSlide';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="container my-2 mx-auto  carousel w-full">
            {
                bannerData.map(slide => <BannerSlide 
                    key={slide.id}
                    slide={slide}
                    ></BannerSlide>)
            }
           
        </div>

    );
};

export default Banner;