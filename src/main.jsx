import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Layout from './Layout'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


// Method-1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>, 
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },
//       {
//         path: "user/:userid",
//         element: <User />
//       },
//       { 
//         loader: {githubInfoLoader},
//         path: "github",
//         element: <Github />
//       }
//     ]
//   }
// ])

// Method-2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />} >
      <Route path= '' element = {<Home />} />
      <Route path= 'about' element = {<About />} />
      <Route path= 'contact' element = {<Contact />} />
      <Route path= 'user/:userid' element = {<User />} />
      <Route loader= {githubInfoLoader} path= 'github' element = {<Github />} />  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
