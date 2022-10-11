import React from 'react';

const Answare = ({ option }) => {


    return (
        <div>
            <div>
                <ol type='1'>
                    <li className='bg-fuchsia-300 mt-5 mr-5 ml-5 hover:bg-fuchsia-800 hover:text-fuchsia-50 text-xl w py-4'>
                        {option}
                    </li>
                </ol>
            </div>
        </div >
    );
};

export default Answare;