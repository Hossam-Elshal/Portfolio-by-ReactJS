// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import "react-router-dom";
import MasterLayout from './components/MasterLayout/MasterLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Work from './components/Work/Work.jsx';
import NotFound from './components/NotFound/NotFound.jsx';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout/>,
      errorElement: <NotFound/>, 
      children: [
        {index: true, element: <Home/>},
        {path: 'home', element: <Home/>},
        {path: 'about', element: <About/>},
        {path: 'prod', element: <Skills/>},
        {path: 'contact', element: <Experience/>},
        {path: 'contact', element: <Work/>},
      ]
    }
  ])

  return (
    <>
      <MasterLayout/>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
