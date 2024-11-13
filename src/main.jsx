import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import Customerlist from './CustomerList.jsx';
import Traininglist from './Trainingslist.jsx';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
    children: [                       
      {
        element: <Traininglist />,
        index: true   
      },
        {
        path: "customers",                
        element: <Customerlist />,
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
