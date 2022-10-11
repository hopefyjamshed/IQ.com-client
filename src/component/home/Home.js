import React from 'react';
import img from '../../rm373batch13-089.jpg'
const Home = () => {
    return (
        <div className='md:flex mt-6'>
            <div className="w-full md:w-6/12">
                <img className=' h-74' src={img} alt="" />
            </div>
            <div className="bg-blue-900 md:bg-black">
                <h1 className=' md:mt-24 text-7xl font-bold text-white h-full p-5  '>Make difference with you</h1>
            </div>
        </div>
    );
};

export default Home; <h1>this is home</h1>