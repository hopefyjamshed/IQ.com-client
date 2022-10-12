import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../question/Question';

const Quiz = () => {
    const topics = useLoaderData()
    const { id, name, questions, correctAnswer
    } = topics.data



    const [quiz, setQuiz] = useState(0)
    const [Answer, setAnswer] = useState([])
    const ansHandler = (answare, option) => {

        if (option === answare) {
            alert('correct')
            setQuiz(quiz + 1)




        }
        else {
            alert('not correct')
        }

    }
    const eyeHandler = (correct) => {
        // let ans = []
        // const answ = Answer.find(f => f === answare)
        // if (answ) {
        //     ans = [...Answer, answare]
        //     alert('ans')

        alert(correct)

    }

    return (
        <div className='bg-slate-500'>

            <h1 className=' text-4xl text-white'> Quiz of <span className=' font-bold'> {name}</span></h1>
            <dir>
                <h1 className='text-2xl font-bold text-white'>Total correct Answer : <span className='text-3xl'>{quiz}</span></h1>
            </dir>

            <div className=''>
                {
                    questions.map(quest => <Question
                        key={quest.id}
                        quest={quest}
                        ansHandler={ansHandler}
                        eyeHandler={eyeHandler}


                    ></Question>)

                }
            </div>
        </div>
    );
};

export default Quiz;