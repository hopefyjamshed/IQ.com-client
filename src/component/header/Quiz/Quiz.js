import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../question/Question';

const Quiz = () => {
    const topics = useLoaderData()
    console.log(topics)
    const { id, name, questions, correctAnswer
    } = topics.data

    // const [quiz, setQuiz] = useState(false)
    // const answareHandler = (answare) => {
    //     const correct = quiz.find(q => q.correctAnswer === answare.correctAnswer);
    //     if (correct) {
    //         alert('the answare is correct')
    //     }
    //     else {
    //         alert('the ans is wrong')
    //     }
    //     setQuiz(correct)


    // }



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