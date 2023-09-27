import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './components/home/Home';
import Stat from './components/stat/Stat';
import DonationPage from './components/donations/DonationPage';
import DonationLists from './components/donationList/DonationLists';
import Error from './Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
       path:"/donationslist",
       element:<DonationLists></DonationLists>,
       loader: () => fetch('donationData.json')
      },
      {
        path:"/donations/:donationid",
        element: <DonationPage></DonationPage>,
        loader: () => fetch('../donationData.json')
      },
      {
        path:"/statistic",
        element: <Stat></Stat>,
        loader: () => fetch('donationData.json')
      },
      {
        path:"/*",
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
