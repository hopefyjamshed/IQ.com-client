import React from 'react';
import img from '../../rm373batch13-089.jpg'

const Head = () => {
    return (
        <div>
            <div className='md:flex mt-6'>
                <div className="w-full md:w-6/12">
                    <img className=' h-74' src={img} alt="" />
                </div>
                <div className="bg-blue-900 md:bg-black">
                    <h1 className=' md:mt-24 text-7xl font-bold text-white h-full p-5  '>Make difference with you</h1>
                </div>
            </div>
        </div>
    );
};

export default Head;