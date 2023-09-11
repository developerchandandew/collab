import { useState } from 'react'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Impact from './component/pages/Impact';
import Action from './component/pages/Action';
import Join from './component/pages/Join';
import Contact from './component/pages/Contact';
import Shilp from './component/pages/Shilp';
import VaxNow from './component/pages/VaxNow';
import PresionHealth from './component/pages/PresionHealth';
import Economic from './component/pages/Economic';
import Blogcard from './component/pages/Blogcard';
function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/action",
      element:<Action/>
    },
    {
      path:"/impact",
      element:<Impact/>
    },
    {
      path:"/shilp",
      element:<Shilp/>
    },
    {
      path:"/economic",
      element:<Economic/>
    },
    {
      path:"/vaxnow",
      element:<VaxNow/>
    },
    {
      path:"presionhealth",
      element:<PresionHealth/>
    },
    {
      path:"/join",
      element:<Join/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:'/blogcard',
      element:<Blogcard/>
    }
    
  ]);

  return (
    <>
      <div>
      <RouterProvider router={router} /> 
      </div>
      
    </>
  )
}

export default App
