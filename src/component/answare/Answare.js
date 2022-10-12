import React, { useState } from 'react';

const Answare = ({ option, correctAnswer, ansHandler }) => {
    const [exist, setExist] = useState(true)


    return (
        <div>

            <div>
                <ol>
                    <button><li id='btn' onClick={() => ansHandler(correctAnswer, option)} className={`bg-fuchsia-300 mt-5 mr-5 ml-5 md:w-96 w-52 rounded-md hover:bg-fuchsia-800 py-4 hover:text-fuchsia-50 text-xl `} >
                        {option}
                    </li></button>
                </ol>
            </div>
        </div >
    );
};

export default Answare;