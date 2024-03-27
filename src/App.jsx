import React, { Component } from 'react';

import Parent from './Components/Parent/Parent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Layout from './Components/Layout/Layout';
import Comparason from './Components/Comparason/Comparason';
import Test from './Components/TestFunc/Test';
import ApiFunc from './Components/ApiFunc/ApiFunc';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '/', element: <Parent /> },
      { path: 'Gallery', element: <Gallery /> },
      {
        path: 'Projects',
        element: <Projects />,
        children: [
          {
            path: 'React',
            element: <Parent />,
          },
          {
            path: 'Angular',
            element: <h2 className="bg-danger p-2"> Angular Project</h2>,
          },
          {
            path: 'android',
            element: <h2 className="bg-danger p-2"> android Project</h2>,
          },
          {
            path: 'iphone',
            element: <h2 className="bg-danger p-2"> iphone Project</h2>,
          },
        ],
      },
      { path: 'Parent', element: <Parent /> },
      { path: 'About', element: <About /> },
      { path: 'Home', element: <Home /> },
      { path: 'api', element: <ApiFunc /> },
      { path: 'TestFunc', element: <Test /> },
      {
        path: '*',
        element: (
          <div className="d-flex justify-content-center ">
            <h2>Not Found</h2>
          </div>
        ),
      },
    ],
  },
  {
    path: 'func',
    element: <Comparason />,
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
