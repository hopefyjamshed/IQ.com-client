import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';
import StatisticData from '../stastisticdata/StatisticData';

const Statistics = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
        <div className=''>
            <div className='md:flex md:justify-center md:items-center gap-4 mt-5'>
                {
                    quizes.data.map(quiz => <StatisticData
                        key={quiz.id}
                        quiz={quiz}
                    ></StatisticData>)
                }
            </div>
        </div>
    );
};

export default Statistics;