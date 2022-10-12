import React from 'react';

const StatisticData = ({ quiz }) => {
    const { logo, name, total } = quiz

    return (
        <div className=' bg-slate-400'>
            <img className=' h-56 mt-4 w-56' src={logo} alt="" />
            <div>
                <h1 className=' text-3xl font-bold text-white'>{name}</h1>
                <h1 className=' text-3xl font-bold text-white'>Total quiz: {total}</h1>
            </div>
        </div>
    );
};

export default StatisticData;