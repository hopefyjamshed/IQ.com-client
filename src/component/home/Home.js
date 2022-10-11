import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { createSearchParams, useLoaderData } from 'react-router-dom';
import img from '../../rm373batch13-089.jpg'
import Cart from '../cart/Cart';
import Head from '../head/Head';
const Home = () => {



    const carts = useLoaderData()


    return (
        <div>
            <Head></Head>



            <div className='flex mt-7 gap-9 justify-center'>
                {
                    carts.data.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
            </div>
        </div>

    );
};

export default Home; <h1>this is home</h1>