import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './component/main/Main';
import Home from './component/home/Home';
import Topic from './component/topic/Topic';
import Statistics from './component/statistics/Statistics';
import Blog from './component/blog/Blog';
import Nomatch from './component/Nomathch/Nomatch';
import Quiz from './component/header/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },

          element: <Quiz></Quiz>
        },
        {
          path: '/topic',
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <Nomatch></Nomatch>
        }
      ]
    }
  ])

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
