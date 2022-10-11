import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=" mt-4 border-2 bg-slate-300 p-4">
                <h1 className='md:text-3xl text-xl font-bold'>what is the purpose of React Router?</h1>
                <p className='md:text-xl '>
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
            </div>
            <div className="  mt-4 border-2 bg-blue-300 p-4">
                <h1 className='md:text-3xl text-xl font-bold'>How does Context API Works?</h1>
                <p className='md:text-xl '>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className=" mt-4 border-2 bg-red-300 p-4">
                <h1 className='md:text-3xl text-xl font-bold'>What is useRef?</h1>
                <p className='md:text-xl '>
                    A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined.
                </p>
            </div>
        </div>
    );
};

export default Blog;