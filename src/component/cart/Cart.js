import React from 'react';
import { BeakerIcon, Bars3Icon, LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Cart = ({ cart, handler }) => {
    const { id, name, logo, total } = cart

    return (
        <div className=''>
            <div className=' w-full border border-1 md:w-64 bg-slate-400 rounded-md pb-2'>
                <img className=' h-48 w-64' src={logo} alt="" />

                {/* btn part  */}
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className=' text-xl font-bold'>{name}</h2>
                        <h3 className='text-5 text-white font-semibold ml-1'>
                            Total quistion:{total}
                        </h3>
                    </div>

                    <Link to={`/topic/${id}`}>
                        <button className='flex bg-slate-900 text-white p-2 rounded-sm'>
                            <span>Start Quiz</span>
                            <ArrowRightIcon icons={ArrowRightIcon} className='h-6 w-7 text-white'></ArrowRightIcon>
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Cart;