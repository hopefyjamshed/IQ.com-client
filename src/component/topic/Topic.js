import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';

const Topic = () => {
    // const topics = useLoaderData()
    // const { id, name, questions
    // } = topics.data

    return (
        <div>
            {/* <h1 className=' text-4xl text-fuchsia-700'> Quiz of <span className=' font-bold'> {name}</span></h1>

            <div>
                {
                    questions.map(quest => <Question
                        key={quest.id}
                        quest={quest}
                    ></Question>)

                }
            </div> */}
            <h1 className='text-3xl'> <ArchiveBoxXMarkIcon icons={ArchiveBoxXMarkIcon}></ArchiveBoxXMarkIcon> </h1>
        </div>
    );
};

export default Topic; <h1>this is topic</h1>