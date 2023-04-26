import React from 'react';
import parts from '../../assets/about/parts.jpg'
import person from '../../assets/about/person-2.jpg'

const About = () => {
    return (
        <div className="container mx-auto hero mt-16 mb-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="w-3/5 absolute right-8 top-2/4 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl text-yellow-400 font-bold">Your Ride, Our Passion</h1>
                    <p className="py-6 text-justify">With over 10 years of experience in motorbike service, we take pride in providing the best service possible to our clients. Our team of skilled technicians is committed to ensuring that your motorbike runs smoothly and efficiently, so you can enjoy a safe and comfortable ride. Whether you need routine maintenance, repairs, or customizations, we've got you covered. Trust us to keep your motorbike in top condition.</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;