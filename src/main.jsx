import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import SpendControl from './SpendControl'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login, SignUp, Dashboard, ProtectedRoute } from './routes'
import { AuthProvider } from './auth/AuthProvider'





const router = createBrowserRouter([
  {
    path: '/',
    element: < Login />
  },
  {
    path: '/signup',
    element: < SignUp />
  },
  {
    path: '/',
    element: < ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: < Dashboard />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
