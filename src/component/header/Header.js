import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../mix ideas 3.jpg'
import { BeakerIcon, Bars3Icon, LightBulbIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex md:p-3 items-center justify-between'>
            <Link to="/">
                <div className='flex items-center mt-2 ml-3'>
                    {/* <img className='h-20 w-24' src={logo} alt="" /> */}
                    <LightBulbIcon className='h-10 w-15' icons={LightBulbIcon}></LightBulbIcon>
                    <h1 className='text-1xl md:text-2xl font-bold ml-3'>IQ dot com</h1>
                </div></Link>
            <div className='mr-3'>


                <Bars3Icon onClick={() => setOpen(!open)} className='h-7 w-8 md:hidden' icons={Bars3Icon}></Bars3Icon>


                <div className={` bg-blue-900 p-2 duration-500 ease-in md:bg-white md:flex md:inline md:top-0 absolute right-0 rounded-md mr-7 md:top-3 ${(open) ? '-right-7' : '-right-96'} md:right-7`}>


                    <p> <Link className=' text-white md:text-2xl md:text-blue-900 ml-3' to='/'>Home</Link></p>

                    <p><Link className=' text-white md:text-2xl md:text-blue-900 ml-3' to='/statistics'>Statistics</Link></p>
                    <p> <Link className='text-white md:text-2xl md:text-blue-900 ml-3' to='/topic'>Topic</Link></p>
                    <p><Link className='text-white md:text-2xl md:text-blue-900 ml-3' to='/blog'>Blog</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Header;