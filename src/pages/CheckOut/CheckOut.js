import React from 'react';
import { useLoaderData } from 'react-router-dom';
import checkOutBanner from '../../assets/car wash banner.png';
import messageBanner from '../../assets/message_pic.svg';

const CheckOut = () => {
    const { title, img, price, description } = useLoaderData();
    return (
        <div className="container mx-auto">
            <img src={checkOutBanner} style={{ height: '200px', width: '100%', borderRadius: '8px' }} alt="" />
            <>
                <h2 className='text-5xl font-bold text-center text-yellow-300 my-8'>CheckOut your order</h2>
            </>
            <div className='flex flex-col md:flex-row my-8'>
                <div className='w-1/2 px-4'>
                    <img src={img} alt=''></img>
                </div>
                <div className='w-1/2 px-2'>
                    <h3 className='text-4xl font-semibold text-slate-50 mb-4'>{title}</h3>
                    <h4 className='text-xl  text-yellow-300 mb-4'>Price: ${price}</h4>
                    <p className='text-justify'>{description}</p>
                </div>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className='flex my-8'>
                <textarea className="textarea textarea-bordered w-1/2" placeholder="Give your message"></textarea>
                <div className='ms-14'>
                    <img src={messageBanner} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;