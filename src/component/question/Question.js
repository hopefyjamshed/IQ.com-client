import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Answare from '../answare/Answare';

const Question = ({ quest, ansHandler, eyeHandler }) => {
    const { id, correctAnswer, question, options } = quest






    return (
        <div className='border-2 border-black mt-8 ml-5 mr-5 rounded-lg p-6 bg-white'>
            <EyeIcon onClick={() => eyeHandler(correctAnswer)} className=' h-6 w-7' icons={EyeIcon}></EyeIcon>
            <h1 className=' text-3xl'>{question}</h1>
            <div className='md:grid md:grid-cols-2 gap-3 '>
                {
                    options.map(option => <Answare
                        key={id}
                        correctAnswer={correctAnswer}
                        option={option}

                        ansHandler={ansHandler}



                    ></Answare>)
                }
            </div>

        </div>
    );
};

export default Question;