import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../question/Question';

const Quiz = () => {
    const topics = useLoaderData()
    const { id, name, questions
    } = topics.data

    return (
        <div className='bg-slate-500'>
            <h1 className=' text-4xl text-fuchsia-700'> Quiz of <span className=' font-bold'> {name}</span></h1>

            <div className=''>
                {
                    questions.map(quest => <Question
                        key={quest.id}
                        quest={quest}
                    ></Question>)

                }
            </div>
        </div>
    );
};

export default Quiz;