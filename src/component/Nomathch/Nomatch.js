import { ArchiveBoxIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Nomatch = () => {
    return (
        <div className='flex items-center justify-center'>
            <div>
                <h1 className=' mb-28 text-3xl font-extrabold mt-40'>page not found </h1>
            </div>
            <div>
                <ArchiveBoxXMarkIcon className=' h-24 w-28' icons={ArchiveBoxXMarkIcon}></ArchiveBoxXMarkIcon>
            </div>
        </div>
    );
};

export default Nomatch;