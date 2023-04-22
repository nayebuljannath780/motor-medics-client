import React from 'react';
import './BannerSlide.css';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const BannerSlide = ({slide}) => {
    const {image, id, next, prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 top-1/4 m mx-10">
                    <h1 className='text-6xl text-yellow-400 font-semibold'>Providing <br />top notch service <br /> in reasonable price</h1>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 top-2/4 m mx-10">
                    <h1 className='text-xl text-slate-300 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mauris a tortor aliquet aliquet ac in turpis. Integer ac mauris in neque lacinia aliquet non fermentum justo</h1>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 top-3/4 m mx-10">
                    <button className="btn btn-warning btn-wide  mr-5">Button</button>
                    <button className="btn btn-outline btn-wide btn-warning">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mx-10">
                    <a href={`#slide${prev}`} className="btn btn-circle btn-warning w-20 mr-5"><FaArrowLeft/></a>
                    <a href={`#slide${next}`} className="btn btn-circle btn-warning w-20"><FaArrowRight/></a>
                </div>
            </div>     
    );
};

export default BannerSlide;