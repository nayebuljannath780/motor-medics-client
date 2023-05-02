import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container m-8 mx-auto p-12  bg-base-200 rounded-lg'>
            <div className='w-3/4 text-center mx-auto mb-6'>
                <h2 className='text-5xl text-yellow-400 font-bold'>Our Services</h2>
                <p className='mt-3 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;