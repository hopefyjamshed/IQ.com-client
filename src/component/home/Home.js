import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { createSearchParams, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import img from '../../rm373batch13-089.jpg'
import Cart from '../cart/Cart';
import Head from '../head/Head';
import Topic from '../topic/Topic';
const Home = () => {
    const carts = useLoaderData()
    const [cart, setCart] = useState()
    const Navigate = useNavigate()

    const handler = (id) => {
        Navigate(`/topic/${id}`)
    }




    return (
        <div>
            <Head></Head>



            <div className='md:flex mt-7 gap-9 justify-center'>
                {
                    carts.data.map(cart => <Cart
                        key={cart.id}
                        cart={cart}

                        handler={handler}

                    ></Cart>)
                }
            </div>
        </div>

    );
};

export default Home; <h1>this is home</h1>