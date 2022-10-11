import React, { useState } from 'react';
import Answare from '../answare/Answare';

const Question = ({ quest }) => {
    const { id, correctAnswer, question, options } = quest

    const [quiz, setQuiz] = useState(quest)
    const ansHandler = (id) => {
        const correct = quiz.find(q => q.id === id);
        console.lgo(correct)

    }



    return (
        <div className='border-2 border-black mt-8 ml-5 mr-5 rounded-lg p-6 bg-white'>
            <h1 className=' text-3xl'>{question}</h1>
            <div className='md:grid md:grid-cols-2 gap-3 '>
                {
                    options.map(option => <Answare
                        key={option.id}
                        option={option}
                        quest={quest}
                        ansHandler={ansHandler}

                    ></Answare>)
                }
            </div>

        </div>
    );
};

export default Question;