import React, { useState } from 'react';

const Answare = ({ option, correctAnswer, ansHandler }) => {
    const [exist, setExist] = useState(true)


    return (
        <div>

            <div>
                <ol>
                    <li className=''><button id='btn' onClick={() => ansHandler(correctAnswer, option)} className={`bg-fuchsia-300 mt-5 mr-5 ml-5 w-96 hover:bg-fuchsia-800 py-4 hover:text-fuchsia-50 text-xl `} >
                        {option}
                    </button></li>
                </ol>
            </div>
        </div >
    );
};

export default Answare;