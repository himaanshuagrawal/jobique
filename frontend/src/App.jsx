import './App.css';
import logo from './assets/images/logo.svg';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Addjobs, Admin, Alljobs, Dashboard, Delete, EditJob, Error, HomeLayout, Landing, Login, Profile, Register, Stats } from './pages';


const router =createBrowserRouter(
[
  {
    path:'/addjobs',
    element:<Addjobs/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/alljobs',
    element:<Alljobs/>
  },
  {
    path:'/delete',
    element:<Delete/>
  },
  {
    path:'/editjob',
    element:<EditJob/>
  },
  {
    path:'/error',
    element:<Error/>
  },
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>,
        children:[
          {
            index:true,
            element:<Addjobs/>
          },
          {
            path:'all-jobs',
            element:<Alljobs/>
          },
            {
            path:'stats',
            element:<Stats/>
          },
           {
            path:'profile',
            element:<profile/>
          },
           {
            path:'admin',
            element:<Admin/>
          },


        ]
      },
    ]
  },
  {
    path:'/profile',
    element: <Profile/>
  },
   {
    path:'/stats',
    element:<Stats/>
  },
])
function App() {
  return (
  
  <RouterProvider router={router} />
  )
}

export default App
