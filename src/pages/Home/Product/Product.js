import React, { useEffect, useState } from 'react';
import motorMedicsBanner from '../../../assets/MotorMedics-banner.png'
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mx-auto mt-10'>
        <img className=' w-full' src={motorMedicsBanner} alt=''></img>
            <div className='mx-auto my-16 '>
                <div className='w-3/4 text-center mx-auto mb-6'>
                    <h2 className='text-4xl text-yellow-400 font-bold'>Available Products</h2>
                    <p className='mt-3 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla recusandae facilis corrupti adipisci necessitatibus incidunt delectus, tenetur praesentium aliquid odio.</p>
                </div>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(product => <ProductCard
                            key={product.id} product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;