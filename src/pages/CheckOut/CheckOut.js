import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkOutBanner from '../../assets/car wash banner.png';
import { AuthContext } from '../../context/AuthProvider';

const CheckOut = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered'
        const message = form.message.value;
        console.log(name, phone, message, email);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        console.log(order);
    }

    return (
        <div className="container mx-auto">
            <img src={checkOutBanner} style={{ height: '200px', width: '100%', borderRadius: '8px' }} alt="" />
            <div className="order_checkout bg-base-200 rounded-xl py-12 my-12 ">
                <>
                    <h2 className='text-5xl font-bold text-center text-yellow-300 mb-16'>CheckOut your order</h2>
                </>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-1/2 md:w-2/5 px-4 mb-8'>
                        <img src={img} alt=''></img>
                    </div>
                    <div className='w-1/2 md:w-3/5 px-6'>
                        <h3 className='text-4xl font-semibold text-slate-50 mb-4'>{title}</h3>
                        <h4 className='text-xl  text-yellow-300 mb-4'>Price: ${price}</h4>
                        <p className='text-justify'>{description}</p>
                    </div>
                </div>
            </div>
            <form className='mb-12 bg-base-200 rounded-xl p-24' onSubmit={handleFormSubmit}>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                    <input type="text" name='firstName' placeholder="Enter your First Name" className="input input-bordered w-full" />
                    <input type="text" name='lastName' placeholder="Enter your Last Name" className="input input-bordered w-full" />
                    <input type="text" name='phone' placeholder="Enter your phone number" className="input input-bordered w-full" />
                    <input type="text" defaultValue={"Email: " + user?.email} className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full my-4" placeholder="Enter your message"></textarea>
                <div className='grid justify-items-center'>
                    <input type='submit' className="btn btn-outline btn-warning  w-1/2" value='Submit' />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;