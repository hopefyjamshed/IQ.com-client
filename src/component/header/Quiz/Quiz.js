import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../question/Question';

const Quiz = () => {
    const topics = useLoaderData()
    const { id, name, questions, correctAnswer
    } = topics.data



    const [quiz, setQuiz] = useState(0)
    const ansHandler = (answare, option) => {
        let correct = []
        if (option === answare) {
            alert('correct')
            setQuiz(quiz + 1)



        }
        else {
            alert('not correct')
        }

    }

    return (
        <div className='bg-slate-500'>
            {quiz}
            <h1 className=' text-4xl text-fuchsia-700'> Quiz of <span className=' font-bold'> {name}</span></h1>

            <div className=''>
                {
                    questions.map(quest => <Question
                        key={quest.id}
                        quest={quest}
                        ansHandler={ansHandler}


                    ></Question>)

                }
            </div>
        </div>
    );
};

export default Quiz;