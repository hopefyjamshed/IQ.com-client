import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../mix ideas 3.jpg'

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <Link to="/">
                <div className='flex items-center mt-2 ml-3'>
                    <img className='h-20 w-24' src={logo} alt="" />
                    <h1 className='text-2xl font-bold ml-3'>IQ dot com</h1>
                </div></Link>
            <div className='mr-3'>
                <Link className='text-2xl text-blue-900 ml-3' to='/'>Home</Link>
                <Link className='text-2xl text-blue-900 ml-3' to='/topic'>Topic</Link>
                <Link className='text-2xl text-blue-900 ml-3' to='/statistics'>Statistics</Link>
                <Link className='text-2xl text-blue-900 ml-3' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;