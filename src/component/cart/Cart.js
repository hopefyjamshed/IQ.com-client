import React from 'react';
import { BeakerIcon, Bars3Icon, LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart
    console.log(cart)
    return (
        <div className=''>
            <div className=' border border-1 w-64 bg-slate-400 rounded-md'>
                <img className=' h-48 w-64' src={logo} alt="" />

                {/* btn part  */}
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className=' text-xl font-bold'>{name}</h2>
                    </div>

                    <button className='flex bg-slate-900 text-white p-2 rounded-sm'>
                        <span>Start Quiz</span>
                        <ArrowRightIcon icons={ArrowRightIcon} className='h-6 w-7 text-white'></ArrowRightIcon>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Cart;