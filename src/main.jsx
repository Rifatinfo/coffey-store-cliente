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
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffey')
  },
  {
    path: 'addCoffey',
    element: <AddCoffey></AddCoffey>
  },
  {
    path: 'updateCoffey/:id',
    element: <UpdateCoffey></UpdateCoffey>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffey/${params.id}`)
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path : '/register' ,
    element : <Register></Register>
  },
  {
    path : '/users',
    element : <Users></Users>,
    loader : () => fetch('http://localhost:5000/user')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
