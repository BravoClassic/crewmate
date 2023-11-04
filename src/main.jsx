import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./pages/Create.jsx";
import Edit from "./pages/Edit.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import CrewMate from './pages/CrewMate.jsx';
import Home from './pages/Home.jsx';
import CrewMates from './pages/CrewMates.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      
  {
    path: "/create",
    element: <Create />,
  },{
    path: "/edit/:id",
    element: <Edit />,
  },{
    path: "/:id",
    element: <CrewMate />,
  },{
    path: "/view",
    element: <CrewMates />,
  }
      
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
