import React, { useState } from 'react';

const Answare = ({ option, quest }) => {
    console.log(quest)
    const { correctAnswer } = quest
    const [quiz, setQuiz] = useState(false)

    const answareHandler = (answare) => {
        const init = []
        const correct = quiz.find(q => q === answare)
        if (correct) {
            alert('this is wrong')
        }
        else {
            init.push(correct)
            setQuiz(init)
        }


    }



    return (
        <div>
            <div>
                <ol type='1'>
                    <li onClick={() => answareHandler(correctAnswer)} className='bg-fuchsia-300 mt-5 mr-5 ml-5 hover:bg-fuchsia-800 hover:text-fuchsia-50 text-xl w py-4'>
                        {option}
                    </li>
                </ol>
            </div>
        </div >
    );
};

export default Answare;