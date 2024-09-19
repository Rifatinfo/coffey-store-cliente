import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffey from './Components/AddCoffey.jsx';
import UpdateCoffey from './Components/UpdateCoffey.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffey')
  },
  {
    path : 'addCoffey',
    element : <AddCoffey></AddCoffey>
  },
  {
    path : 'updateCoffey/:id',
    element : <UpdateCoffey></UpdateCoffey>,
    loader : ({params}) => fetch(`http://localhost:5000/coffey/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
