import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg p-2">
            <figure><img className='object-fill h-56 w-96' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-yellow-400 font-semibold">{title}</h2>
                <div className='flex'>
                    <p className='text-lg'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning h-2"><FaArrowRight></FaArrowRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;